import { getStore } from '@netlify/blobs';

const ADMIN_KEY = process.env.FEEDBACK_ADMIN_KEY || '';

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'content-type': 'application/json',
      'access-control-allow-origin': '*',
      'access-control-allow-headers': 'content-type, x-admin-key',
      'access-control-allow-methods': 'GET, POST, OPTIONS',
    },
  });
}

export default async (req) => {
  if (req.method === 'OPTIONS') return json({});

  const store = getStore('feedback');

  if (req.method === 'POST') {
    let body;
    try {
      body = await req.json();
    } catch {
      return json({ error: 'Invalid JSON' }, 400);
    }

    const rating = Number(body.rating);
    const comment = String(body.comment || '').slice(0, 2000).trim();
    const table = String(body.table || '').slice(0, 10).trim();
    const name = String(body.name || '').slice(0, 100).trim();

    if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
      return json({ error: 'Rating must be 1-5' }, 400);
    }
    if (!comment && !name) {
      // rating alone is fine, comment/name optional
    }

    const id = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    const record = { id, table, rating, comment, name, createdAt: new Date().toISOString() };
    await store.setJSON(id, record);
    return json({ ok: true });
  }

  if (req.method === 'GET') {
    const url = new URL(req.url);
    const key = req.headers.get('x-admin-key') || url.searchParams.get('key');
    if (!ADMIN_KEY || key !== ADMIN_KEY) {
      return json({ error: 'Unauthorized' }, 401);
    }

    const { blobs } = await store.list();
    const records = await Promise.all(blobs.map((b) => store.get(b.key, { type: 'json' })));
    records.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
    return json({ records });
  }

  return json({ error: 'Method not allowed' }, 405);
};

export const config = {
  path: '/.netlify/functions/feedback',
};
