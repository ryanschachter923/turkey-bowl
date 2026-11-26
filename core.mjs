// Generated from src/core.js: shared game logic.
const TB_SEED = {"players":[{"name":"Shac","num":"9","pos":"WR","ratings":{"SPD":75,"ACC":70,"AGI":75,"PWR":80,"CTH":80,"RTE":80,"THP":70,"THA":75,"COV":60},"comps":{"best":{"name":"Amon-Ra St. Brown","note":"Madden 27: 95 OVR (Lions). Closest star profile: wins with hands and routes, not raw speed."},"base":{"name":"Carnell Tate","note":"Madden 27: 79 OVR (Titans). Closest profile near your 81: sure hands, polished routes."},"worst":{"name":"Theo Wease Jr.","note":"Madden 27: 65 OVR (Chargers). Same toolkit, mostly a preseason legend."}}},{"name":"Teb","num":"1","pos":"QB","ratings":{"SPD":70,"ACC":75,"AGI":85,"PWR":60,"CTH":85,"RTE":75,"THP":80,"THA":90,"COV":60},"comps":{"best":{"name":"Jordan Love","note":"Madden 27: 90 OVR (Packers). Accurate, smooth, makes it look easy."},"base":{"name":"Sam Darnold","note":"Madden 27: 84 OVR (Seahawks). Accurate passer who can extend plays."},"worst":{"name":"Drew Lock","note":"Madden 27: 68 OVR (Seahawks). Big-game confidence, backup-QB results."}}},{"name":"Z","num":"9","pos":"QB","ratings":{"SPD":75,"ACC":75,"AGI":75,"PWR":85,"CTH":82,"RTE":75,"THP":90,"THA":80,"COV":65},"comps":{"best":{"name":"Josh Allen","note":"Madden 27: 99 OVR (Bills). Cannon arm, runs through people. The dream."},"base":{"name":"Drake Maye","note":"Madden 27: 89 OVR (Patriots). Big arm, athletic, right at your level."},"worst":{"name":"Carson Wentz","note":"Madden 27: 68 OVR (Vikings). Big arm, strong frame, the 'what could have been' tour."}}},{"name":"JerJay","num":"0","pos":"WR","ratings":{"SPD":70,"ACC":70,"AGI":70,"PWR":75,"CTH":80,"RTE":77,"THP":65,"THA":72,"COV":60},"comps":{"best":{"name":"Puka Nacua","note":"Madden 27: 98 OVR (Rams). Strong hands, owns the middle of the field."},"base":{"name":"Christian Kirk","note":"Madden 27: 78 OVR (49ers). Reliable chain-mover right at your level."},"worst":{"name":"Chris Blair","note":"Madden 27: 67 OVR (Falcons). Same skill set. You wear #0; hopefully not your catch total."}}},{"name":"Fay","num":"69","pos":"WR","ratings":{"SPD":99,"ACC":95,"AGI":80,"PWR":10,"CTH":85,"RTE":85,"THP":70,"THA":70,"COV":60},"comps":{"best":{"name":"DeVonta Smith","note":"Madden 27: 92 OVR (Eagles). Slight frame, elite speed and routes. Strength optional (PWR 10 approves)."},"base":{"name":"Chris Olave","note":"Madden 27: 89 OVR (Saints). Same 89 OVR, same burner-who-runs-real-routes profile."},"worst":{"name":"Jalin Hyatt","note":"Madden 27: 70 OVR (Giants). All the speed, mostly decoy duty. Don't let a corner touch you."}}},{"name":"JSiff","num":"10","pos":"TE","ratings":{"SPD":65,"ACC":65,"AGI":65,"PWR":90,"CTH":75,"RTE":75,"THP":75,"THA":75,"COV":60},"comps":{"best":{"name":"George Kittle","note":"Madden 27: 97 OVR (49ers). Bully-ball tight end; your PWR 90 is his whole personality."},"base":{"name":"Harold Fannin Jr.","note":"Madden 27: 81 OVR (Browns). Closest profile near your 78: physical, reliable hands."},"worst":{"name":"Moliki Matavao","note":"Madden 27: 62 OVR (Saints). Same blocking-first build, fewer targets."}}},{"name":"ZSiff","num":"11","pos":"WR","ratings":{"SPD":70,"ACC":70,"AGI":70,"PWR":70,"CTH":70,"RTE":70,"THP":70,"THA":70,"COV":70},"comps":{"best":{"name":"Ja'Marr Chase","note":"Madden 27: 99 OVR (Bengals). The most well-rounded WR in the game. You're also well-rounded: 70 at everything."},"base":{"name":"Harrison Wallace III","note":"Madden 27: 67 OVR (Cardinals). Closest \"no weaknesses, no superpowers\" match."},"worst":{"name":"Dareke Young","note":"Madden 27: 66 OVR (Raiders). Perfectly average, slightly worse at it."}}},{"name":"Big Fry","num":"54","pos":"WR","ratings":{"SPD":60,"ACC":60,"AGI":60,"PWR":60,"CTH":65,"RTE":70,"THP":5,"THA":5,"COV":60},"comps":{"best":{"name":"Davante Adams","note":"Madden 27: 91 OVR (Rams). Route technician who never needed a 4.3. Routes are your best skill too."},"base":{"name":"Irvin Charles","note":"Madden 27: 63 OVR (Seahawks). Near the bottom of the league's WR rankings; you'd be a camp battle."},"worst":{"name":"Brandon Smith","note":"Madden 27: 62 OVR (Steelers). The lowest-rated WR in the game, still two points ahead of you. Never let him throw (THP 5)."}}},{"name":"Small Fry","num":"34","pos":"WR","ratings":{"SPD":75,"ACC":75,"AGI":70,"PWR":80,"CTH":80,"RTE":70,"THP":80,"THA":60,"COV":60},"comps":{"best":{"name":"Nico Collins","note":"Madden 27: 90 OVR (Texans). Big, strong hands, wins through contact."},"base":{"name":"Ryan Flournoy","note":"Madden 27: 77 OVR (Cowboys). Exact OVR match with the same physical style."},"worst":{"name":"C.J. Williams","note":"Madden 27: 66 OVR (Jaguars). Same strengths, rookie-camp results."}}},{"name":"Pan","num":"88","pos":"TE","ratings":{"SPD":99,"ACC":99,"AGI":99,"PWR":99,"CTH":60,"RTE":60,"THP":99,"THA":5,"COV":50},"comps":{"best":{"name":"Brock Bowers","note":"Madden 27: 96 OVR (Raiders). Freak athlete who also catches. You have the first part."},"base":{"name":"Tucker Kraft","note":"Madden 27: 87 OVR (Packers). Exact OVR match: run-after-catch monster."},"worst":{"name":"Jaren Kanak","note":"Madden 27: 60 OVR (Titans). Elite athlete, raw as a pass catcher. Never let him throw (THA 5)."}}},{"name":"Hafe","num":"17","pos":"WR","ratings":{"SPD":80,"ACC":60,"AGI":75,"PWR":80,"CTH":70,"RTE":75,"THP":80,"THA":80,"COV":60},"comps":{"best":{"name":"Terry McLaurin","note":"Madden 27: 88 OVR (Commanders). Strong deep threat. You have the strength and speed; he has the get-off."},"base":{"name":"Caleb Douglas","note":"Madden 27: 74 OVR (Dolphins). Closest match at your level: fast and strong, still polishing routes."},"worst":{"name":"Gunner Olszewski","note":"Madden 27: 66 OVR (Giants). Return man moonlighting at WR. At least you can throw (THA 80)."}}},{"name":"OG Hein (E)","num":"0","pos":"WR","ratings":{"SPD":80,"ACC":75,"AGI":80,"PWR":99,"CTH":85,"RTE":80,"THP":90,"THA":60,"COV":65},"comps":{"best":{"name":"Mike Evans","note":"Madden 27: 91 OVR (49ers). The OG blueprint: 12-year vet and still one of Madden's strongest WRs. Wins with size and hands, not wheels."},"base":{"name":"Tetairoa McMillan","note":"Madden 27: 87 OVR (Panthers). Closest profile near your 88, plus Madden's best WR arm (79 THP). You throw it harder; his actually lands."},"worst":{"name":"Malachi Corley","note":"Madden 27: 69 OVR (Browns). Closest low-end profile: built to run through people. The OG version runs through one, then needs a breather."}}}]};
// Turkey Bowl core: shared by the browser app and the Netlify Function.
const Core = (() => {
  const ATTRS = ['SPD', 'ACC', 'AGI', 'PWR', 'CTH', 'RTE', 'THP', 'THA', 'COV'];
  const ATTR_NAMES = { SPD: 'Speed', ACC: 'Acceleration', AGI: 'Agility', PWR: 'Power', CTH: 'Catching', RTE: 'Route running', THP: 'Throw power', THA: 'Throw accuracy', COV: 'Coverage' };
  const POSITIONS = ['QB', 'WR', 'TE'];
  // Madden-style: each position weights the ratings differently, then the result is stretched around 70.
  const WEIGHTS = {
    QB: { THA: 0.40, THP: 0.25, SPD: 0.10, AGI: 0.10, ACC: 0.07, PWR: 0.05, CTH: 0.03 },
    WR: { CTH: 0.24, SPD: 0.22, RTE: 0.22, ACC: 0.12, AGI: 0.12, PWR: 0.08 },
    TE: { CTH: 0.28, PWR: 0.22, RTE: 0.18, SPD: 0.14, ACC: 0.09, AGI: 0.09 },
  };
  const DEF_WEIGHTS = { COV: 0.45, SPD: 0.18, AGI: 0.15, ACC: 0.12, PWR: 0.10 };
  const STRETCH = 1.5, PIVOT = 70;
  const STATS = {
    passTD: 'Pass TDs', comp: 'Completions', intThrown: 'INTs thrown', rec: 'Receptions', recTD: 'Rec TDs',
    rushTD: 'Rush TDs', totalTD: 'Total TDs', defINT: 'Def INTs', defTD: 'Def TDs', sacks: 'Sacks', pat: 'PATs made',
  };
  // Stats the commish types into a box score. totalTD is worked out from rec + rush + def TDs.
  const BOX_STATS = ['comp', 'passTD', 'intThrown', 'rec', 'recTD', 'rushTD', 'defINT', 'defTD', 'sacks', 'pat'];
  const EVENTS = {
    catch: { label: 'Catch', pts: 0, needs: 'player' },
    catchTD: { label: 'TD catch', pts: 6, needs: 'player' },
    rushTD: { label: 'Rushing TD', pts: 6, needs: 'player' },
    pat1: { label: 'PAT (1 pt)', pts: 1, needs: 'team' },
    pat2: { label: 'PAT (2 pts)', pts: 2, needs: 'team' },
    int: { label: 'Interception', pts: 0, needs: 'player' },
    pick6: { label: 'Pick-six', pts: 6, needs: 'player' },
    sack: { label: 'Sack', pts: 0, needs: 'player' },
    safety: { label: 'Safety', pts: 2, needs: 'team' },
    points: { label: 'Points adjustment', pts: null, needs: 'team' },
  };
  const QUARTERS = [1, 2, 3, 4, 5]; // 5 = OT
  const qLabel = (q) => (q === 5 ? 'OT' : 'Q' + q);
  const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
  const round = (v, d = 0) => { const f = 10 ** d; return Math.round((v + Number.EPSILON) * f) / f; };
  const roundHalf = (v) => Math.round(v * 2) / 2;
  const toHalfPoint = (v) => { const r = roundHalf(v); return Number.isInteger(r) ? r + (v >= r ? 0.5 : -0.5) : r; };

  function weighted(p, w) {
    let s = 0;
    for (const k in w) s += w[k] * (Number(p.ratings?.[k]) || 0);
    return s;
  }
  function stretch(w) { return clamp(Math.round(w + (STRETCH - 1) * (w - PIVOT)), 1, 99); }
  function ovr(p) {
    if (p.ovrOverride) return clamp(Math.round(p.ovrOverride), 1, 99);
    const w = WEIGHTS[p.pos];
    if (!w) return stretch(weighted(p, { SPD: 0.2, CTH: 0.2, RTE: 0.15, AGI: 0.15, ACC: 0.1, PWR: 0.1, THA: 0.05, THP: 0.05 }));
    return stretch(weighted(p, w));
  }
  function def(p) { return stretch(weighted(p, DEF_WEIGHTS)); }
  function tier(v) { return v >= 90 ? 'elite' : v >= 80 ? 'gold' : v >= 70 ? 'silver' : 'bronze'; }

  // ---------- teams, draft ----------
  const other = (t) => (t === 'A' ? 'B' : 'A');
  function rosters(cfg) {
    const r = { A: [], B: [] };
    for (const t of ['A', 'B']) { const c = cfg.teams?.[t]?.captainId; if (c) r[t].push(c); }
    for (const pk of cfg.draft?.picks || []) if (r[pk.team] && !r[pk.team].includes(pk.playerId)) r[pk.team].push(pk.playerId);
    return r;
  }
  function teamOf(cfg, id) { const r = rosters(cfg); return r.A.includes(id) ? 'A' : r.B.includes(id) ? 'B' : null; }
  function player(cfg, id) { return (cfg.players || []).find((p) => p.id === id); }
  function teamName(cfg, t) {
    const tm = cfg.teams?.[t] || {};
    if (tm.name) return tm.name;
    const cap = tm.captainId && player(cfg, tm.captainId);
    return cap ? 'Team ' + cap.name : 'Team ' + (t === 'A' ? '1' : '2');
  }
  function teamQB(cfg, t) { return rosters(cfg)[t].map((id) => player(cfg, id)).find((p) => p && p.pos === 'QB') || null; }
  function nextPickTeam(cfg) {
    const d = cfg.draft || {}; const n = (d.picks || []).length; const first = d.first || 'A';
    if ((d.order || 'snake') === 'alternating') return n % 2 === 0 ? first : other(first);
    const round = Math.floor(n / 2), inRound = n % 2;
    const t = inRound === 0 ? first : other(first);
    return round % 2 === 0 ? t : other(t);
  }
  function draftable(cfg) { const r = rosters(cfg); const taken = new Set([...r.A, ...r.B]); return (cfg.players || []).filter((p) => !taken.has(p.id)); }
  function teamRatings(cfg, t) {
    const ps = rosters(cfg)[t].map((id) => player(cfg, id)).filter(Boolean);
    if (!ps.length) return { ovr: 0, off: 0, def: 0, n: 0 };
    const qb = ps.find((p) => p.pos === 'QB');
    const skill = ps.filter((p) => p !== qb);
    const avg = (a) => (a.length ? a.reduce((s, v) => s + v, 0) / a.length : 0);
    const skillAvg = avg(skill.map(ovr));
    const off = qb ? (skill.length ? 0.35 * ovr(qb) + 0.65 * skillAvg : ovr(qb)) : skillAvg;
    const d = avg(ps.map(def));
    return { ovr: Math.round(0.55 * off + 0.45 * d), off: Math.round(off), def: Math.round(d), n: ps.length };
  }

  // ---------- odds and lines ----------
  function profit(stake, odds) { odds = Number(odds); return odds > 0 ? stake * odds / 100 : stake * 100 / Math.abs(odds); }
  function fmtOdds(o) { o = Number(o); return o === 100 ? 'EVEN' : (o > 0 ? '+' + o : String(o)); }
  function probToOdds(p) {
    p = clamp(p, 0.02, 0.98);
    let o = p >= 0.5 ? -100 * p / (1 - p) : 100 * (1 - p) / p;
    if (Math.abs(o) <= 105) return 100;
    const r = Math.abs(o) >= 1000 ? 100 : Math.abs(o) >= 300 ? 25 : 5;
    return Math.round(o / r) * r;
  }
  function normCdf(x) { // Abramowitz-Stegun
    const t = 1 / (1 + 0.2316419 * Math.abs(x));
    const d = 0.3989423 * Math.exp(-x * x / 2);
    const p = d * t * (0.3193815 + t * (-0.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274))));
    return x > 0 ? 1 - p : p;
  }
  const SPREAD_SD = 10;
  function projection(cfg) {
    const a = teamRatings(cfg, 'A'), b = teamRatings(cfg, 'B');
    const margin = (a.ovr - b.ovr) * 0.9; // points Team A is expected to win by
    return { a, b, margin, probA: normCdf(margin / SPREAD_SD) };
  }
  function suggestLines(cfg) {
    const pr = projection(cfg);
    const spreadA = -toHalfPoint(pr.margin === 0 ? 0.01 : pr.margin);
    const ml = { A: probToOdds(pr.probA), B: probToOdds(1 - pr.probA) }; // fair odds: no house cut
    const offAvg = (pr.a.off + pr.b.off) / 2 || 70;
    const total = toHalfPoint(56 + (offAvg - 75) * 0.6);
    const props = []; const ftd = [];
    const r = rosters(cfg); const inGame = new Set([...r.A, ...r.B]);
    const ps = (cfg.players || []).filter((p) => inGame.size === 0 || inGame.has(p.id));
    let wsum = 0; const ws = [];
    for (const p of ps) {
      const R = p.ratings || {};
      if (p.pos === 'QB') {
        props.push({ id: 'p-' + p.id + '-passTD', playerId: p.id, stat: 'passTD', line: clamp(toHalfPoint(3.5 + (R.THA - 75) / 10 + (R.THP - 75) / 20), 1.5, 6.5), odds: 100 });
        props.push({ id: 'p-' + p.id + '-intThrown', playerId: p.id, stat: 'intThrown', line: R.THA >= 80 ? 0.5 : 1.5, odds: 100 });
        const w = Math.max(5, (R.SPD + R.AGI) / 2 - 55) * 0.35; ws.push([p.id, w]); wsum += w;
      } else {
        props.push({ id: 'p-' + p.id + '-rec', playerId: p.id, stat: 'rec', line: clamp(toHalfPoint(3 + (R.CTH - 70) / 10 + (R.RTE - 70) / 12 + (R.SPD - 70) / 25), 0.5, 8.5), odds: 100 });
        props.push({ id: 'p-' + p.id + '-recTD', playerId: p.id, stat: 'recTD', line: ovr(p) >= 88 ? 1.5 : 0.5, odds: 100 });
        const w = Math.max(5, (R.CTH + R.RTE + R.SPD) / 3 - 55); ws.push([p.id, w]); wsum += w;
      }
    }
    for (const [id, w] of ws) {
      const pTD = (w / wsum) * 0.95; // the 5% left over is "no one" / misc
      ftd.push({ playerId: id, odds: Math.max(150, probToOdds(pTD)) });
    }
    return { ml, spread: { A: spreadA, odds: 100 }, total: { points: total, odds: 100 }, props, ftd };
  }

  // ---------- stats & settlement ----------
  function sortEvents(evs) { return [...(evs || [])].sort((x, y) => (x.q - y.q) || (x.ts - y.ts)); }
  function computeStats(snap) {
    const cfg = snap.config; const pl = {}; const blank = () => ({ passTD: 0, comp: 0, intThrown: 0, rec: 0, recTD: 0, rushTD: 0, totalTD: 0, defINT: 0, defTD: 0, sacks: 0, pat: 0 });
    for (const p of cfg.players || []) pl[p.id] = blank();
    const teams = { A: { pts: 0, byQ: {} }, B: { pts: 0, byQ: {} } };
    const add = (t, q, n) => { if (!teams[t] || !n) return; teams[t].pts += n; teams[t].byQ[q] = (teams[t].byQ[q] || 0) + n; };
    let firstTD = null; const log = [];
    for (const e of sortEvents(snap.events)) {
      const def = EVENTS[e.type]; if (!def) continue;
      const t = e.playerId ? teamOf(cfg, e.playerId) : e.team; const s = e.playerId && pl[e.playerId];
      if (['catch', 'catchTD'].includes(e.type) && s) {
        s.rec++; const qb = t && teamQB(cfg, t); if (qb && qb.id !== e.playerId && pl[qb.id]) pl[qb.id].comp++;
        if (e.type === 'catchTD') { s.recTD++; s.totalTD++; if (qb && qb.id !== e.playerId && pl[qb.id]) pl[qb.id].passTD++; firstTD = firstTD || e.playerId; }
      }
      if (e.type === 'rushTD' && s) { s.rushTD++; s.totalTD++; firstTD = firstTD || e.playerId; }
      if (['int', 'pick6'].includes(e.type) && s) {
        s.defINT++; const qb = t && teamQB(cfg, other(t)); if (qb && pl[qb.id]) pl[qb.id].intThrown++;
        if (e.type === 'pick6') { s.defTD++; s.totalTD++; firstTD = firstTD || e.playerId; }
      }
      if (e.type === 'sack' && s) s.sacks++;
      if (['pat1', 'pat2'].includes(e.type) && e.playerId && pl[e.playerId]) pl[e.playerId].pat++;
      const pts = e.type === 'points' ? Number(e.pts) || 0 : def.pts;
      const scoringTeam = e.team || t;
      if (scoringTeam) add(scoringTeam, e.q, pts);
      log.push({ ...e, team: scoringTeam, pts });
    }
    // Typed-in stat lines replace play-by-play totals for those players: a player's own report or the commish's
    // fix ('stats/' blobs), or a line saved inside config.box by the first box-score version (newest wins).
    // The commish's box score (config.box) also sets the team score and the first TD scorer.
    const box = cfg.box; const src = {}; const lines = {};
    const n = (v) => (v === '' || v == null || !Number.isFinite(Number(v)) ? null : Math.max(0, Math.round(Number(v))));
    for (const [id, m] of Object.entries(box?.players || {})) lines[id] = { stats: m, by: 'Commish', self: false, ts: box.ts || 0, legacy: true };
    for (const L of snap.stats || []) if (L?.pid && (!lines[L.pid] || (L.ts || 0) >= lines[L.pid].ts)) lines[L.pid] = L;
    for (const [id, L] of Object.entries(lines)) {
      if (!pl[id]) continue;
      const s = blank(); for (const k of BOX_STATS) s[k] = n(L.stats?.[k]) || 0;
      s.totalTD = s.recTD + s.rushTD + s.defTD; pl[id] = s; src[id] = { by: L.by || '', self: !!L.self, ts: L.ts || 0, legacy: !!L.legacy };
    }
    if (box) {
      for (const t of ['A', 'B']) {
        const sc = box.score?.[t]; if (!sc) continue;
        const byQ = {}; for (const q of QUARTERS) { const v = n(sc.q?.[q]); if (v !== null) byQ[q] = v; }
        const fin = n(sc.final); const qs = Object.values(byQ);
        if (fin === null && !qs.length) continue;
        teams[t] = { pts: fin !== null ? fin : qs.reduce((a, b) => a + b, 0), byQ };
      }
      if (box.firstTD) firstTD = box.firstTD === 'none' ? null : box.firstTD;
    }
    return { players: pl, teams, firstTD, log, src, manual: !!box || Object.keys(src).length > 0 };
  }
  function lineFor(bet) { return bet.line; }
  function settle(bet, snap, st) {
    if ((snap.voids || []).includes(bet.id)) return { status: 'void', ret: bet.stake };
    if (snap.game?.status !== 'final') return { status: 'open', ret: 0 };
    st = st || computeStats(snap);
    const A = st.teams.A.pts, B = st.teams.B.pts;
    let res; // 1 win, 0 push, -1 loss
    if (bet.market === 'ml') res = A === B ? 0 : ((A > B ? 'A' : 'B') === bet.sel ? 1 : -1);
    else if (bet.market === 'spread') { const m = (bet.sel === 'A' ? A - B : B - A) + lineFor(bet); res = m > 0 ? 1 : m < 0 ? -1 : 0; }
    else if (bet.market === 'total') { const d = A + B - bet.line; res = d === 0 ? 0 : ((d > 0) === (bet.sel === 'over') ? 1 : -1); }
    else if (bet.market === 'prop') { const v = st.players[bet.playerId]?.[bet.stat] || 0; const d = v - bet.line; res = d === 0 ? 0 : ((d > 0) === (bet.sel === 'over') ? 1 : -1); }
    else if (bet.market === 'ftd') res = st.firstTD === bet.sel ? 1 : -1;
    else res = 0;
    if (res > 0) return { status: 'won', ret: round(bet.stake + profit(bet.stake, bet.odds), 2) };
    if (res === 0) return { status: 'push', ret: bet.stake };
    return { status: 'lost', ret: 0 };
  }
  function ledger(snap) {
    const bank = snap.config?.settings?.bankroll ?? 100; const st = computeStats(snap); const out = {};
    for (const b of snap.bettors || []) out[b.id] = { id: b.id, name: b.name, playerId: b.playerId || null, available: bank, atRisk: 0, bets: [], won: 0, lost: 0 };
    for (const bet of [...(snap.bets || [])].sort((x, y) => x.ts - y.ts)) {
      const L = out[bet.bettorId]; if (!L) continue;
      const s = settle(bet, snap, st);
      L.available -= bet.stake;
      if (s.status === 'open') L.atRisk += bet.stake; else L.available += s.ret;
      if (s.status === 'won') L.won++; if (s.status === 'lost') L.lost++;
      L.bets.push({ ...bet, ...s });
    }
    for (const L of Object.values(out)) { L.available = round(L.available, 2); L.atRisk = round(L.atRisk, 2); L.bankroll = round(L.available + L.atRisk, 2); }
    return out;
  }
  function describe(bet, cfg) {
    const tn = (t) => teamName(cfg, t); const pn = (id) => player(cfg, id)?.name || '?';
    const sgn = (v) => (v > 0 ? '+' + v : String(v));
    if (bet.market === 'ml') return tn(bet.sel) + ' moneyline';
    if (bet.market === 'spread') return tn(bet.sel) + ' ' + sgn(bet.line);
    if (bet.market === 'total') return (bet.sel === 'over' ? 'Over ' : 'Under ') + bet.line + ' total points';
    if (bet.market === 'prop') return pn(bet.playerId) + ' ' + (bet.sel === 'over' ? 'over ' : 'under ') + bet.line + ' ' + (STATS[bet.stat] || bet.stat).toLowerCase();
    if (bet.market === 'ftd') return pn(bet.sel) + ' first TD scorer';
    return bet.market;
  }
  // Resolve a market selection against the posted lines. Returns {line, odds, playerId, stat} or an error string.
  function quote(cfg, market, sel, propId) {
    const L = cfg.lines; if (!L) return 'Lines are not set';
    if (market === 'ml') { if (!['A', 'B'].includes(sel)) return 'Bad pick'; return { line: null, odds: Number(L.ml[sel]) }; }
    if (market === 'spread') { if (!['A', 'B'].includes(sel)) return 'Bad pick'; const a = Number(L.spread.A); return { line: sel === 'A' ? a : -a, odds: Number(L.spread.odds) }; }
    if (market === 'total') { if (!['over', 'under'].includes(sel)) return 'Bad pick'; return { line: Number(L.total.points), odds: Number(L.total.odds) }; }
    if (market === 'prop') { const pr = (L.props || []).find((x) => x.id === propId); if (!pr) return 'That prop is gone'; if (!['over', 'under'].includes(sel)) return 'Bad pick'; return { line: Number(pr.line), odds: Number(pr.odds), playerId: pr.playerId, stat: pr.stat, propId }; }
    if (market === 'ftd') { const f = (L.ftd || []).find((x) => x.playerId === sel); if (!f) return 'Not offered'; return { line: null, odds: Number(f.odds) }; }
    return 'Unknown market';
  }

  // ---------- seed ----------
  const NAMES = ['Shac', 'Teb', 'Z', 'JerJay', 'Fay', 'JSiff', 'ZSiff', 'Big Fry', 'Small Fry', 'Pan', 'Hafe', 'OG Hein (E)'];
  const slug = (s) => String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  function seedConfig(seed) {
    const players = (seed?.players || NAMES.map((n) => ({ name: n }))).map((p) => ({
      id: p.id || slug(p.name), name: p.name, num: p.num ?? '', pos: p.pos || '',
      ratings: Object.fromEntries(ATTRS.map((a) => [a, p.ratings?.[a] ?? 70])), ovrOverride: p.ovrOverride || null,
      comps: p.comps || { worst: { name: '', note: '' }, base: { name: '', note: '' }, best: { name: '', note: '' } },
    }));
    return {
      v: 1, settings: { title: 'Turkey Bowl', year: 2026, bankroll: 100 },
      players, teams: { A: { name: '', color: '#F28C28', captainId: null }, B: { name: '', color: '#2EC4B6', captainId: null } },
      draft: { order: 'snake', first: 'A', picks: [] }, lines: null,
    };
  }
  const SEED = typeof TB_SEED !== 'undefined' ? TB_SEED : null; // eslint-disable-line no-undef

  // ---------- server ----------
  const enc = new TextEncoder();
  async function sha(s) { const b = await crypto.subtle.digest('SHA-256', enc.encode(s)); return [...new Uint8Array(b)].map((x) => x.toString(16).padStart(2, '0')).join(''); }
  function rid(n = 10) { const a = new Uint8Array(n); crypto.getRandomValues(a); return [...a].map((x) => (x % 36).toString(36)).join(''); }
  async function hashPin(pin, salt) { salt = salt || rid(12); return { salt, hash: await sha(salt + ':' + pin) }; }
  async function checkPin(pin, rec) { return !!rec && (await sha(rec.salt + ':' + pin)) === rec.hash; }
  const json = (obj, status = 200) => new Response(JSON.stringify(obj), { status, headers: { 'content-type': 'application/json', 'cache-control': 'no-store' } });
  const err = (msg, status = 400) => json({ error: msg }, status);
  const validPin = (p) => /^\d{4}$/.test(String(p || ''));

  // A stat line from a form: every BOX_STATS key as a whole number from 0 to 99 (blank = 0). Null if anything is off.
  function cleanLine(m) {
    const out = {};
    for (const k of BOX_STATS) { const v = m?.[k]; const x = v === '' || v == null ? 0 : Number(v); if (!Number.isInteger(x) || x < 0 || x > 99) return null; out[k] = x; }
    return out;
  }
  async function loadAll(store, prefix) {
    const { blobs } = await store.list({ prefix });
    const out = []; const keys = blobs.map((b) => b.key);
    for (let i = 0; i < keys.length; i += 16) {
      const vals = await Promise.all(keys.slice(i, i + 16).map((k) => store.get(k, { type: 'json' })));
      vals.forEach((v) => v && out.push(v));
    }
    return out;
  }
  async function getConfig(store) {
    let c = await store.getWithMetadata('config', { type: 'json' });
    if (!c) { await store.setJSON('config', seedConfig(SEED), { onlyIfNew: true }); c = await store.getWithMetadata('config', { type: 'json' }); }
    return c;
  }
  async function rebuild(store) {
    for (let attempt = 0; attempt < 6; attempt++) {
      const cur = await store.getWithMetadata('snapshot', { type: 'json' });
      const [cfg, game, bettors, bets, voids, events, stats] = await Promise.all([
        getConfig(store), store.get('game', { type: 'json' }), loadAll(store, 'bettors/'), loadAll(store, 'bets/'), loadAll(store, 'voids/'), loadAll(store, 'events/'), loadAll(store, 'stats/'),
      ]);
      const snap = {
        builtAt: Date.now(), config: cfg.data, configEtag: cfg.etag, game: game || { status: 'pre', linesPosted: false, betsLocked: false },
        bettors: bettors.map((b) => ({ id: b.id, name: b.name, playerId: b.playerId || null, ts: b.ts })),
        bets, voids: voids.map((v) => v.betId), events, stats,
      };
      const res = await store.setJSON('snapshot', snap, cur ? { onlyIfMatch: cur.etag } : { onlyIfNew: true });
      if (res.modified) return snap;
    }
    throw new Error('Busy, try again');
  }
  async function readSnap(store) { const s = await store.get('snapshot', { type: 'json' }); return s || rebuild(store); }
  async function requireCommish(store, pin) {
    const auth = await store.get('auth', { type: 'json' });
    if (!auth) return 'Set a commissioner PIN first';
    return (await checkPin(pin, auth.commish)) ? null : 'Wrong commissioner PIN';
  }

  async function handle(request, store) {
    try {
      const url = new URL(request.url); const path = url.pathname.replace(/^\/api/, '').replace(/\/+$/, '') || '/';
      if (request.method === 'GET' && path === '/state') {
        const known = url.searchParams.get('etag');
        let s = await store.getWithMetadata('snapshot', { type: 'json', etag: known || undefined });
        if (!s) { await rebuild(store); s = await store.getWithMetadata('snapshot', { type: 'json' }); }
        const auth = await store.get('auth', { type: 'json' });
        if (known && s.etag === known) return json({ etag: s.etag, unchanged: true, hasCommish: !!auth });
        return json({ etag: s.etag, state: s.data, hasCommish: !!auth });
      }
      if (request.method !== 'POST') return err('Not found', 404);
      const body = await request.json().catch(() => ({}));
      const ok = async (extra = {}) => { const snap = await rebuild(store); return json({ ok: true, ...extra, builtAt: snap.builtAt }); };

      if (path === '/commish/claim') {
        if (!validPin(body.pin)) return err('PIN must be 4 digits');
        const r = await store.setJSON('auth', { commish: await hashPin(body.pin) }, { onlyIfNew: true });
        return r.modified ? json({ ok: true }) : err('A commissioner PIN is already set', 409);
      }
      if (path === '/commish/check') { const e = await requireCommish(store, body.pin); return e ? err(e, 403) : json({ ok: true }); }
      if (path === '/config') {
        const e = await requireCommish(store, body.pin); if (e) return err(e, 403);
        const cur = await getConfig(store);
        if (body.baseEtag && body.baseEtag !== cur.etag) return err('Someone else changed the setup. Refresh and try again.', 409);
        const c = body.config; if (!c || !Array.isArray(c.players) || c.players.length > 60) return err('Bad config');
        for (const p of c.players) for (const a of ATTRS) p.ratings[a] = clamp(Math.round(Number(p.ratings[a]) || 1), 1, 99);
        const r = await store.setJSON('config', c, { onlyIfMatch: cur.etag });
        if (!r.modified) return err('Someone else changed the setup. Refresh and try again.', 409);
        return ok();
      }
      if (path === '/game') {
        const e = await requireCommish(store, body.pin); if (e) return err(e, 403);
        const cur = (await store.get('game', { type: 'json' })) || { status: 'pre', linesPosted: false, betsLocked: false };
        const next = { ...cur };
        for (const k of ['status', 'linesPosted', 'betsLocked', 'quarter']) if (k in (body.game || {})) next[k] = body.game[k];
        if (!['pre', 'live', 'final'].includes(next.status)) return err('Bad status');
        await store.setJSON('game', next); return ok();
      }
      if (path === '/event') {
        const e = await requireCommish(store, body.pin); if (e) return err(e, 403);
        const ev = body.event || {}; const def = EVENTS[ev.type]; if (!def) return err('Unknown event');
        const q = Number(ev.q); if (!QUARTERS.includes(q)) return err('Pick a quarter');
        const snap = await readSnap(store);
        if (def.needs === 'player' && !player(snap.config, ev.playerId)) return err('Pick a player');
        if (def.needs === 'player' && !teamOf(snap.config, ev.playerId)) return err('That player is not on a team yet');
        if (def.needs === 'team' && !['A', 'B'].includes(ev.team)) return err('Pick a team');
        const id = rid(8); const ts = Date.now();
        const rec = { id, ts, q, type: ev.type, playerId: ev.playerId || null, team: def.needs === 'team' ? ev.team : null, pts: ev.type === 'points' ? Number(ev.pts) || 0 : undefined, note: String(ev.note || '').slice(0, 80) };
        await store.setJSON('events/' + ts + '-' + id, rec, { onlyIfNew: true }); return ok({ id });
      }
      if (path === '/event/delete') {
        const e = await requireCommish(store, body.pin); if (e) return err(e, 403);
        const { blobs } = await store.list({ prefix: 'events/' }); const k = blobs.find((b) => b.key.endsWith('-' + body.id));
        if (!k) return err('Already gone', 404); await store.delete(k.key); return ok();
      }
      if (path === '/join') {
        const name = String(body.name || '').trim().slice(0, 24); if (!name) return err('Enter a name');
        if (!validPin(body.pin)) return err('PIN must be 4 digits');
        const snap = await readSnap(store);
        const pid = body.playerId && player(snap.config, body.playerId) ? body.playerId : null;
        if (pid && (snap.bettors || []).some((b) => b.playerId === pid)) return err('That player already has an account. Log in instead.', 409);
        const id = slug(name) || rid(6);
        const r = await store.setJSON('bettors/' + id, { id, name, playerId: pid, pin: await hashPin(body.pin), ts: Date.now() }, { onlyIfNew: true });
        if (!r.modified) return err('That name is taken. Log in instead.', 409);
        return ok({ bettor: { id, name, playerId: pid } });
      }
      if (path === '/login') {
        const id = slug(body.name || ''); const b = id && (await store.get('bettors/' + id, { type: 'json' }));
        if (!b || !(await checkPin(body.pin, b.pin))) return err('Name or PIN is wrong', 403);
        return json({ ok: true, bettor: { id: b.id, name: b.name, playerId: b.playerId || null } });
      }
      if (path === '/bet') {
        const b = await store.get('bettors/' + slug(body.bettorId || ''), { type: 'json' });
        if (!b || !(await checkPin(body.pin, b.pin))) return err('Log in again', 403);
        const snap = await readSnap(store); const g = snap.game || {};
        if (!g.linesPosted) return err('Lines are not posted yet'); if (g.betsLocked || g.status !== 'pre') return err('Betting is locked');
        const qt = quote(snap.config, body.market, body.sel, body.propId); if (typeof qt === 'string') return err(qt);
        if (Number(body.odds) !== qt.odds || (qt.line !== null && Number(body.line) !== qt.line)) return err('The line moved. Check the new number and try again.', 409);
        if (body.market === 'prop' && body.sel === 'under' && b.playerId && b.playerId === qt.playerId) return err("You can't bet the under on your own props");
        const stake = round(Number(body.stake), 2); if (!(stake >= 1)) return err('Minimum bet is $1');
        const L = ledger(snap)[b.id] || { available: snap.config.settings?.bankroll ?? 100 };
        if (stake > L.available + 1e-9) return err('Not enough in your bankroll');
        const id = rid(10); const ts = Date.now();
        const bet = { id, ts, bettorId: b.id, market: body.market, sel: body.sel, line: qt.line, odds: qt.odds, stake, propId: qt.propId || null, playerId: qt.playerId || null, stat: qt.stat || null };
        await store.setJSON('bets/' + id, bet, { onlyIfNew: true }); return ok({ bet });
      }
      if (path === '/bet/void') {
        const e = await requireCommish(store, body.pin); if (e) return err(e, 403);
        await store.setJSON('voids/' + body.betId, { betId: body.betId, ts: Date.now() }); return ok();
      }
      if (path === '/stats/me') { // a player saves his own stat line (sportsbook login), until the game is final
        const b = await store.get('bettors/' + slug(body.bettorId || ''), { type: 'json' });
        if (!b || !(await checkPin(body.pin, b.pin))) return err('Log in again', 403);
        const snap = await readSnap(store);
        if (!b.playerId || !player(snap.config, b.playerId)) return err("Your account isn't linked to a player");
        const g = (await store.get('game', { type: 'json' })) || { status: 'pre', linesPosted: false, betsLocked: false };
        if (g.status === 'final') return err('The game is final. Ask the commish to fix your stats.', 409);
        const stats = cleanLine(body.stats); if (!stats) return err('Stats must be whole numbers from 0 to 99');
        await store.setJSON('stats/' + b.playerId, { pid: b.playerId, stats, by: b.name, self: true, ts: Date.now() });
        if (!g.betsLocked) await store.setJSON('game', { ...g, betsLocked: true }); // stats are coming in, so the game's been played
        return ok();
      }
      if (path === '/stats/set') { // the commish fixes any players' lines
        const e = await requireCommish(store, body.pin); if (e) return err(e, 403);
        const snap = await readSnap(store); const lines = Object.entries(body.lines || {}); const clean = [];
        if (lines.length > 60) return err('Too many players');
        for (const [pid, m] of lines) { if (!player(snap.config, pid)) return err('Unknown player'); const s = cleanLine(m); if (!s) return err('Stats must be whole numbers from 0 to 99'); clean.push([pid, s]); }
        const ts = Date.now();
        for (const [pid, s] of clean) await store.setJSON('stats/' + pid, { pid, stats: s, by: 'Commish', self: false, ts });
        return ok();
      }
      if (path === '/reset') {
        const e = await requireCommish(store, body.pin); if (e) return err(e, 403);
        const what = body.what;
        const wipe = async (prefix) => { const { blobs } = await store.list({ prefix }); for (const x of blobs) await store.delete(x.key); };
        if (what === 'game') { await wipe('events/'); await wipe('stats/'); await store.setJSON('game', { status: 'pre', linesPosted: false, betsLocked: false }); }
        else if (what === 'book') { await wipe('bets/'); await wipe('voids/'); await wipe('bettors/'); }
        else return err('Unknown reset');
        return ok();
      }
      return err('Not found', 404);
    } catch (e) {
      return err(e?.message || 'Server error', 500);
    }
  }

  return {
    ATTRS, ATTR_NAMES, POSITIONS, WEIGHTS, DEF_WEIGHTS, STATS, BOX_STATS, EVENTS, QUARTERS, qLabel, STRETCH, PIVOT,
    ovr, def, tier, rosters, teamOf, player, teamName, teamQB, nextPickTeam, draftable, teamRatings, other,
    profit, fmtOdds, probToOdds, projection, suggestLines, computeStats, settle, ledger, describe, quote,
    seedConfig, slug, round, handle,
  };
})();

export default Core;
