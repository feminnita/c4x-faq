import { Router } from 'express';
import type { Request, Response } from 'express';
import db from './db.js';

const router = Router();
const ADMIN_KEY = process.env.FAQ_ADMIN_PASSWORD || 'c4x@admin2026';

function auth(req: Request, res: Response): boolean {
  if (req.headers['x-admin-key'] !== ADMIN_KEY) {
    res.status(401).json({ error: 'Nao autorizado' });
    return false;
  }
  return true;
}

router.get('/public', (_req, res) => {
  res.json(db.prepare(
    'SELECT * FROM faq_items WHERE ativo=1 ORDER BY modulo, ordem, id'
  ).all());
});

router.get('/all', (req, res) => {
  if (!auth(req, res)) return;
  res.json(db.prepare(
    'SELECT * FROM faq_items ORDER BY modulo, ordem, id'
  ).all());
});

router.post('/', (req, res) => {
  if (!auth(req, res)) return;
  const { modulo, categoria, pergunta, resposta, video_url, ordem, ativo } = req.body;
  const r = db.prepare(
    'INSERT INTO faq_items (modulo,categoria,pergunta,resposta,video_url,ordem,ativo) VALUES (?,?,?,?,?,?,?)'
  ).run(
    modulo || 'gestao_operacional', categoria || 'Geral',
    pergunta, resposta, video_url || '',
    Number(ordem) || 0, ativo === false ? 0 : 1
  );
  res.json({ id: r.lastInsertRowid });
});

router.put('/:id', (req, res) => {
  if (!auth(req, res)) return;
  const { modulo, categoria, pergunta, resposta, video_url, ordem, ativo } = req.body;
  db.prepare(
    'UPDATE faq_items SET modulo=?,categoria=?,pergunta=?,resposta=?,video_url=?,ordem=?,ativo=? WHERE id=?'
  ).run(modulo, categoria, pergunta, resposta, video_url || '', Number(ordem) || 0,
        ativo === false ? 0 : 1, req.params.id);
  res.json({ ok: true });
});

router.delete('/:id', (req, res) => {
  if (!auth(req, res)) return;
  db.prepare('DELETE FROM faq_items WHERE id=?').run(req.params.id);
  res.json({ ok: true });
});

export default router;
