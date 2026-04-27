import Database from 'better-sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DB_PATH = process.env.FAQ_DB_PATH || path.join(__dirname, '..', 'faq.db');

const db = new Database(DB_PATH);
db.exec(`
  CREATE TABLE IF NOT EXISTS faq_items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    modulo TEXT NOT NULL DEFAULT 'gestao_operacional',
    categoria TEXT NOT NULL DEFAULT 'Geral',
    pergunta TEXT NOT NULL,
    resposta TEXT NOT NULL,
    video_url TEXT NOT NULL DEFAULT '',
    ordem INTEGER NOT NULL DEFAULT 0,
    ativo INTEGER NOT NULL DEFAULT 1,
    criado_em TEXT DEFAULT (datetime('now'))
  )
`);
export default db;
