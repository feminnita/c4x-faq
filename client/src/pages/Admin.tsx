import { useState, useEffect, useCallback } from 'react';

const MODULES = [
  { value: 'gestao_operacional', label: 'Gestao Operacional' },
  { value: 'gestao_financeira', label: 'Gestao Financeira' },
  { value: 'marketing', label: 'Marketing' },
  { value: 'estoque', label: 'Gestao de Estoque' },
];

type Item = {
  id: number; modulo: string; categoria: string; pergunta: string;
  resposta: string; video_url: string; ordem: number; ativo: number;
};
const EMPTY: Omit<Item,'id'> = {
  modulo:'gestao_operacional', categoria:'Geral', pergunta:'', resposta:'',
  video_url:'', ordem:0, ativo:1,
};

const BASE = import.meta.env.BASE_URL;
const API  = BASE + 'api/faq';

export default function Admin() {
  const [keyInput, setKeyInput] = useState('');
  const [key,      setKey]      = useState(() => localStorage.getItem('c4x_faq_key') || '');
  const [authed,   setAuthed]   = useState(false);
  const [items,    setItems]    = useState<Item[]>([]);
  const [filter,   setFilter]   = useState('todos');
  const [form,     setForm]     = useState<Partial<Item> | null>(null);
  const [authErr,  setAuthErr]  = useState('');
  const [saving,   setSaving]   = useState(false);

  const load = useCallback(async (k: string) => {
    const r = await fetch(API + '/all', { headers: { 'x-admin-key': k } });
    if (r.status === 401) { setAuthed(false); setAuthErr('Senha incorreta'); return; }
    setItems(await r.json());
    setAuthed(true);
    setAuthErr('');
  }, []);

  useEffect(() => { if (key) load(key); }, [key, load]);

  function login() {
    localStorage.setItem('c4x_faq_key', keyInput);
    setKey(keyInput);
  }

  async function save() {
    if (!form?.pergunta || !form?.resposta) return;
    setSaving(true);
    const method = form.id ? 'PUT' : 'POST';
    const url    = form.id ? `${API}/${form.id}` : `${API}/`;
    await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json', 'x-admin-key': key },
      body: JSON.stringify(form),
    });
    setSaving(false);
    setForm(null);
    load(key);
  }

  async function del(id: number) {
    if (!confirm('Excluir esta pergunta?')) return;
    await fetch(`${API}/${id}`, { method: 'DELETE', headers: { 'x-admin-key': key } });
    load(key);
  }

  async function toggle(item: Item) {
    await fetch(`${API}/${item.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', 'x-admin-key': key },
      body: JSON.stringify({ ...item, ativo: item.ativo ? 0 : 1 }),
    });
    load(key);
  }

  const visible = filter === 'todos' ? items : items.filter(i => i.modulo === filter);

  if (!authed) return (
    <div className="min-h-screen bg-[#0F172A] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-8 w-full max-w-sm shadow-2xl">
        <img src={`${BASE}c4x_logo.png`} alt="C4X" className="h-16 object-contain mx-auto mb-6" />
        <h2 className="text-xl font-bold text-[#0F172A] text-center mb-6">Painel Admin — FAQ</h2>
        {authErr && <p className="text-red-500 text-sm text-center mb-4">{authErr}</p>}
        <input
          type="password" placeholder="Senha de acesso" value={keyInput}
          onChange={e => setKeyInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && login()}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4 outline-none focus:border-[#8B2635]"
        />
        <button onClick={login} className="w-full bg-[#8B2635] text-white font-semibold py-3 rounded-lg hover:bg-[#6B1D28]">
          Entrar
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-[#0F172A] px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={`${BASE}c4x_logo.png`} alt="C4X" className="h-10 object-contain" />
          <span className="text-white font-semibold text-lg">FAQ Admin</span>
        </div>
        <div className="flex items-center gap-3">
          <a href={BASE} className="text-[#E8C99A] text-sm hover:underline">Ver FAQ publico</a>
          <button onClick={() => { localStorage.removeItem('c4x_faq_key'); setAuthed(false); setKey(''); }}
            className="text-gray-400 text-sm hover:text-white">Sair</button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
          <div className="flex gap-2 flex-wrap">
            {[{value:'todos',label:'Todos'}, ...MODULES].map(m => (
              <button key={m.value} onClick={() => setFilter(m.value)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold border transition-all ${
                  filter === m.value
                    ? 'bg-[#8B2635] text-white border-[#8B2635]'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-[#8B2635]'}`}>
                {m.label} {filter !== m.value && items.filter(i => m.value === 'todos' || i.modulo === m.value).length > 0
                  ? `(${items.filter(i => m.value === 'todos' || i.modulo === m.value).length})` : ''}
              </button>
            ))}
          </div>
          <button onClick={() => setForm({...EMPTY})}
            className="bg-[#E8C99A] text-[#0F172A] font-semibold px-4 py-2 rounded-lg text-sm hover:bg-[#d4b882] flex items-center gap-1">
            + Nova pergunta
          </button>
        </div>

        <div className="space-y-3">
          {visible.length === 0 && (
            <div className="text-center py-16 text-gray-400 bg-white rounded-xl border border-gray-200">
              Nenhuma pergunta cadastrada
            </div>
          )}
          {visible.map(item => (
            <div key={item.id} className={`bg-white rounded-xl border px-5 py-4 flex items-start gap-4 ${
              item.ativo ? 'border-gray-200' : 'border-orange-100 opacity-60'}`}>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[#0F172A] text-[#E8C99A]">
                    {MODULES.find(m => m.value === item.modulo)?.label || item.modulo}
                  </span>
                  <span className="text-xs text-gray-400">{item.categoria}</span>
                  {item.video_url && <span className="text-xs text-blue-500 font-medium">▶ video</span>}
                </div>
                <p className="font-semibold text-[#0F172A] text-sm">{item.pergunta}</p>
                <p className="text-gray-400 text-xs mt-1 line-clamp-2">{item.resposta}</p>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <button onClick={() => toggle(item)}
                  className={`text-xs px-2 py-1 rounded font-medium ${item.ativo ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                  {item.ativo ? 'Ativo' : 'Oculto'}
                </button>
                <button onClick={() => setForm({...item})} className="text-xs text-[#8B2635] hover:underline px-1">Editar</button>
                <button onClick={() => del(item.id)} className="text-xs text-red-400 hover:text-red-600 px-1">✕</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {form && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl">
            <h3 className="text-lg font-bold text-[#0F172A] mb-5">
              {form.id ? 'Editar pergunta' : 'Nova pergunta'}
            </h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-gray-500 block mb-1">Modulo</label>
                  <select value={form.modulo} onChange={e => setForm({...form, modulo: e.target.value})}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-[#8B2635]">
                    {MODULES.map(m => <option key={m.value} value={m.value}>{m.label}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 block mb-1">Categoria</label>
                  <input value={form.categoria || ''} onChange={e => setForm({...form, categoria: e.target.value})}
                    placeholder="ex: Configuracao, Faturamento..."
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-[#8B2635]" />
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-500 block mb-1">Pergunta</label>
                <input value={form.pergunta || ''} onChange={e => setForm({...form, pergunta: e.target.value})}
                  placeholder="Como faco para..."
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-[#8B2635]" />
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-500 block mb-1">Resposta</label>
                <textarea value={form.resposta || ''} onChange={e => setForm({...form, resposta: e.target.value})}
                  rows={5} placeholder="Descreva a resposta completa..."
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-[#8B2635] resize-none" />
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-500 block mb-1">Link do video de treinamento (opcional)</label>
                <input value={form.video_url || ''} onChange={e => setForm({...form, video_url: e.target.value})}
                  placeholder="https://youtube.com/..."
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-[#8B2635]" />
              </div>
              <div className="flex items-center gap-4">
                <div>
                  <label className="text-xs font-semibold text-gray-500 block mb-1">Ordem</label>
                  <input type="number" value={form.ordem ?? 0} onChange={e => setForm({...form, ordem: Number(e.target.value)})}
                    className="w-20 border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-[#8B2635]" />
                </div>
                <label className="flex items-center gap-2 text-sm text-gray-600 mt-4">
                  <input type="checkbox" checked={form.ativo !== 0}
                    onChange={e => setForm({...form, ativo: e.target.checked ? 1 : 0})} />
                  Visivel no FAQ publico
                </label>
              </div>
            </div>
            <div className="flex gap-3 mt-6 justify-end">
              <button onClick={() => setForm(null)}
                className="px-5 py-2 rounded-lg border border-gray-300 text-gray-600 text-sm hover:bg-gray-50">
                Cancelar
              </button>
              <button onClick={save} disabled={saving || !form.pergunta || !form.resposta}
                className="px-5 py-2 rounded-lg bg-[#8B2635] text-white text-sm font-semibold hover:bg-[#6B1D28] disabled:opacity-50">
                {saving ? 'Salvando...' : 'Salvar'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
