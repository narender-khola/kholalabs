// Paywall abstraction. Everything that is gated goes through can(). Swap activate() for a real
// license check (Lemon Squeezy / Dodo / Gumroad license-key API, or Play Billing via Capacitor) later.

export const PRICE = { usd: '$12', inr: '₹399', note: 'one-time · lifetime updates · up to 5 devices' };

// TODO(payments): set to your hosted checkout URL (Dodo/Lemon Squeezy/Gumroad). Empty = "coming soon" stub.
export const CHECKOUT_URL = '';

export const FREE_LIMITS = { customDecks: 1, cardsPerDeck: 10, photos: 3 };

const KEY = 'bc.license';
const DEMO_KEY = 'BHASHA-PRO-DEMO'; // dev-only unlock: works on localhost only
const IS_DEV = ['localhost', '127.0.0.1'].includes(location.hostname);

export function isPro() {
  try { return !!JSON.parse(localStorage.getItem(KEY) || 'null')?.active; } catch { return false; }
}

/** Returns {ok:true} or {ok:false, reason}. ctx carries counts the check needs. */
export function can(feature, ctx = {}) {
  if (isPro()) return { ok: true };
  switch (feature) {
    case 'template':    return ctx.pro ? no('The “' + ctx.title + '” deck is part of Pro.') : { ok: true };
    case 'newDeck':     return ctx.customCount >= FREE_LIMITS.customDecks ? no(`Free plan includes ${FREE_LIMITS.customDecks} custom deck.`) : { ok: true };
    case 'addCard':     return ctx.cardCount >= FREE_LIMITS.cardsPerDeck ? no(`Free decks hold up to ${FREE_LIMITS.cardsPerDeck} cards.`) : { ok: true };
    case 'addPhoto':    return ctx.photoCount >= FREE_LIMITS.photos ? no(`Free plan includes ${FREE_LIMITS.photos} family photos.`) : { ok: true };
    case 'layout':      return ctx.layout !== 'a4-4' ? no('Letter, 9-up and 6×4 photo-paper layouts are Pro.') : { ok: true };
    case 'noWatermark': return no('Remove the watermark with Pro.');
    default:            return { ok: true };
  }
}
const no = (reason) => ({ ok: false, reason });

/** Stub activation. Real impl: POST key to provider's license/validate endpoint (no own server needed). */
export async function activate(licenseKey) {
  const k = (licenseKey || '').trim().toUpperCase();
  if (IS_DEV && k === DEMO_KEY) {
    localStorage.setItem(KEY, JSON.stringify({ active: true, key: k, at: Date.now(), source: 'demo' }));
    return { ok: true };
  }
  return { ok: false, reason: 'That key wasn’t recognised. (Payments are not live yet.)' };
}

export function deactivate() { localStorage.removeItem(KEY); }
