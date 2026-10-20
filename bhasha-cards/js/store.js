// Local-first storage: decks in localStorage, photos (downscaled JPEG blobs) in IndexedDB.
const DKEY = 'bc.decks.v1';
export const uid = () => Math.random().toString(36).slice(2, 10);

export function loadDecks() {
  try { return JSON.parse(localStorage.getItem(DKEY) || '[]'); } catch { return []; }
}
export function saveDecks(decks) { localStorage.setItem(DKEY, JSON.stringify(decks)); }

let dbp;
function db() {
  dbp ||= new Promise((res, rej) => {
    const r = indexedDB.open('bhasha-cards', 1);
    r.onupgradeneeded = () => r.result.createObjectStore('photos');
    r.onsuccess = () => res(r.result);
    r.onerror = () => rej(r.error);
  });
  return dbp;
}
async function tx(mode, fn) {
  const d = await db();
  return new Promise((res, rej) => {
    const t = d.transaction('photos', mode); const req = fn(t.objectStore('photos'));
    t.oncomplete = () => res(req?.result); t.onerror = () => rej(t.error);
  });
}
export const putPhoto = (id, blob) => tx('readwrite', (s) => s.put(blob, id));
export const getPhoto = (id) => tx('readonly', (s) => s.get(id));
export const delPhoto = (id) => tx('readwrite', (s) => s.delete(id));

const urlCache = new Map();
export async function photoURL(id) {
  if (!id) return null;
  if (urlCache.has(id)) return urlCache.get(id);
  const b = await getPhoto(id); if (!b) return null;
  const u = URL.createObjectURL(b); urlCache.set(id, u); return u;
}

/** Downscale + center-crop to 4:3, JPEG ~0.85 */
export async function processImage(file, w = 800, h = 600) {
  const bmp = await createImageBitmap(file);
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  const s = Math.max(w / bmp.width, h / bmp.height);
  const dw = bmp.width * s, dh = bmp.height * s;
  c.getContext('2d').drawImage(bmp, (w - dw) / 2, (h - dh) / 2, dw, dh);
  return new Promise((r) => c.toBlob(r, 'image/jpeg', 0.85));
}
