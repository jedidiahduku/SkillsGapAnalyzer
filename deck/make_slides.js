// Generates 8 pitch slides as standalone 1280x720 HTML files.
// Rendered to PNG by headless Chrome, then assembled into a .pptx.
const fs = require('fs');
const path = require('path');
const OUT = path.join(__dirname, 'slides');
fs.mkdirSync(OUT, { recursive: true });

const wrap = (inner) => `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8">
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
<style>
  *{box-sizing:border-box;margin:0;padding:0}
  :root{
    --accent:#00ffcc; --blue:#4facfe; --purple:#c471f5;
    --warn:#ffd166; --error:#ff8a8a; --muted:#b0c4de; --faint:rgba(176,196,222,.55);
    --card:rgba(255,255,255,.05); --border:rgba(255,255,255,.1);
  }
  html,body{width:1280px;height:720px}
  .stage{
    position:relative;width:1280px;height:720px;overflow:hidden;
    font-family:'Outfit',sans-serif;color:#fff;
    background:
      radial-gradient(900px 500px at 12% -8%, rgba(79,172,254,.20), transparent 60%),
      radial-gradient(820px 520px at 102% 6%, rgba(196,113,245,.16), transparent 55%),
      linear-gradient(155deg,#0f2027,#193642 55%,#21505f);
    padding:64px 72px;
  }
  .kicker{display:inline-flex;align-self:flex-start;align-items:center;gap:8px;font-size:15px;font-weight:600;
    letter-spacing:2px;text-transform:uppercase;color:var(--accent);
    background:rgba(0,255,204,.1);border:1px solid rgba(0,255,204,.22);
    padding:7px 16px;border-radius:20px}
  .secnum{font-size:15px;font-weight:600;letter-spacing:3px;text-transform:uppercase;color:var(--faint)}
  h1{font-size:40px;font-weight:800;line-height:1.08;letter-spacing:-.5px;margin-top:14px}
  .grad{background:linear-gradient(120deg,var(--accent),var(--blue),var(--purple));
    -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
  .muted{color:var(--muted)}
  .footer{position:absolute;left:72px;bottom:34px;font-size:14px;color:var(--faint)}
  .pageno{position:absolute;right:72px;bottom:34px;font-size:14px;color:var(--faint)}
  .card{background:var(--card);border:1px solid var(--border);border-radius:18px}
  .row{display:flex}
</style></head><body><div class="stage">${inner}</div></body></html>`;

const slides = [];

// ── 1 · Title ──
slides.push(`
  <div style="position:absolute;inset:0;display:flex;flex-direction:column;justify-content:center;padding:0 72px">
    <span class="kicker">⚡ Track 3 · Economic Empowerment &amp; Education</span>
    <h1 style="font-size:74px;margin-top:26px">Skills Gap <span class="grad">Analyzer</span></h1>
    <p class="muted" style="font-size:24px;line-height:1.5;max-width:880px;margin-top:20px">
      Turn career guesswork into data. Match the skills you <b style="color:#fff">have</b> to your best-fit roles —
      or search a job you <b style="color:#fff">want</b> and see exactly which skills it needs.</p>
    <div style="display:flex;gap:10px;margin-top:34px">
      <span class="card" style="padding:9px 18px;font-size:16px">🎯 Analyze my skills</span>
      <span class="card" style="padding:9px 18px;font-size:16px">🔍 Explore a job</span>
      <span class="card" style="padding:9px 18px;font-size:16px">📚 Free course for every gap</span>
    </div>
  </div>
  <div class="footer"><b style="color:#fff">The Avengers</b> &nbsp;·&nbsp; Prince Sugar · Chrysler Steve · Jedidiah Duku</div>
`);

// ── 2 · Problem ──
slides.push(`
  <span class="secnum">01 · The Problem</span>
  <h1 style="max-width:880px">Opportunity isn't equal.<br><span class="grad">Talent is universal — access to guidance isn't.</span></h1>
  <div class="row" style="gap:34px;margin-top:48px;align-items:stretch">
    <div class="card" style="width:300px;padding:34px;display:flex;flex-direction:column;justify-content:center;text-align:center">
      <div style="font-size:86px;font-weight:800;line-height:1;background:linear-gradient(135deg,#ffd166,#ff8a5c);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">40%</div>
      <div class="muted" style="font-size:16px;margin-top:12px;line-height:1.4">of workers in developing economies are affected by skills mismatch</div>
      <div style="font-size:13px;color:var(--faint);margin-top:14px;font-style:italic">— International Labour Organization</div>
    </div>
    <div style="flex:1;display:flex;flex-direction:column;justify-content:center;gap:22px">
      <div class="row" style="gap:16px;align-items:flex-start"><div style="font-size:26px">🧭</div><p class="muted" style="font-size:21px;line-height:1.5">People make upskilling and career decisions on <b style="color:#fff">word-of-mouth and guesswork</b> — not data.</p></div>
      <div class="row" style="gap:16px;align-items:flex-start"><div style="font-size:26px">⏳</div><p class="muted" style="font-size:21px;line-height:1.5">They spend <b style="color:#fff">months learning the wrong skills</b> — locked out of roles they could already qualify for.</p></div>
      <div class="row" style="gap:16px;align-items:flex-start"><div style="font-size:26px">🚪</div><p class="muted" style="font-size:21px;line-height:1.5">Quality career guidance is <b style="color:#fff">gatekept by geography, wealth, and language</b>.</p></div>
    </div>
  </div>
  <div class="pageno">2</div>
`);

// ── 3 · Who it's for ──
slides.push(`
  <span class="secnum">02 · Who We're Building For</span>
  <h1 style="max-width:900px">Specific people currently <span class="grad">locked out</span> of career guidance</h1>
  <div class="row" style="gap:18px;margin-top:40px">
    ${[
      ['🎓','Students &amp; graduates','Leaving school with no career counselor and no clear line from their skills to a job.'],
      ['🔄','Career switchers','Want to move into a new field but don\'t know which skills carry over or what to learn next.'],
      ['🌍','Returning &amp; informal workers','In underserved communities — across the 12-country Builder Club network — with no paid coaching.'],
    ].map(([i,t,d])=>`<div class="card" style="flex:1;padding:28px"><div style="font-size:34px">${i}</div>
      <div style="font-size:21px;font-weight:700;margin:14px 0 8px">${t}</div>
      <div class="muted" style="font-size:16px;line-height:1.5">${d}</div></div>`).join('')}
  </div>
  <div class="card" style="margin-top:22px;padding:20px 26px;display:flex;gap:14px;align-items:center;border-color:rgba(0,255,204,.25);background:rgba(0,255,204,.06)">
    <div style="font-size:24px">💡</div>
    <p style="font-size:18px;line-height:1.45"><b>Why they need it:</b> <span class="muted">a free, instant second opinion on "what should I learn to get the job I want?" — the kind only the well-connected usually get.</span></p>
  </div>
  <div class="pageno">3</div>
`);

// ── 4 · Solution / two modes ──
slides.push(`
  <span class="secnum">03 · Our Solution</span>
  <h1>One tool, <span class="grad">two ways in</span></h1>
  <p class="muted" style="font-size:19px;margin-top:12px;max-width:900px">A web app that works the way real career questions do — from your skills, or from the job you want.</p>
  <div class="row" style="gap:20px;margin-top:34px">
    <div class="card" style="flex:1;padding:32px">
      <div style="font-size:38px">🎯</div>
      <div style="font-size:25px;font-weight:700;margin:14px 0 4px">Analyze My Skills</div>
      <div style="font-size:15px;color:var(--accent);font-weight:600;margin-bottom:16px">skills → matching jobs</div>
      ${['Type your skills → top 5 roles with a match %','The exact skills you\'re missing for each','Typo-tolerant &amp; case-insensitive matching'].map(x=>`<div class="row" style="gap:10px;margin-bottom:10px"><span style="color:var(--accent);font-weight:700">✓</span><span class="muted" style="font-size:17px;line-height:1.4">${x}</span></div>`).join('')}
    </div>
    <div class="card" style="flex:1;padding:32px">
      <div style="font-size:38px">🔍</div>
      <div style="font-size:25px;font-weight:700;margin:14px 0 4px">Explore a Job</div>
      <div style="font-size:15px;color:var(--accent);font-weight:600;margin-bottom:16px">job → required skills</div>
      ${['Search any job → see the skills it needs','Filter by sector, jump to related roles','One click back to check your personal gap'].map(x=>`<div class="row" style="gap:10px;margin-bottom:10px"><span style="color:var(--accent);font-weight:700">✓</span><span class="muted" style="font-size:17px;line-height:1.4">${x}</span></div>`).join('')}
    </div>
  </div>
  <div class="pageno">4</div>
`);

// ── 5 · How it works + tech ──
slides.push(`
  <span class="secnum">04 · How It Works &amp; What's Built</span>
  <h1>A <span class="grad">working prototype</span>, demo-ready in 30 seconds</h1>
  <div class="row" style="gap:18px;margin-top:34px">
    ${[
      ['1','Input','Type the skills you have — or search a job you want. No login, no setup.'],
      ['2','Matching engine','Scored against 100 roles across 15 sectors, in the browser, with a % match per role.'],
      ['3','Ranked results','Top 5 roles, your exact gaps, and a free course link for every missing skill.'],
    ].map(([n,t,d])=>`<div class="card" style="flex:1;padding:26px">
      <div style="width:46px;height:46px;border-radius:50%;background:linear-gradient(135deg,#4facfe,#00ffcc);color:#0f2027;font-weight:800;font-size:22px;display:flex;align-items:center;justify-content:center">${n}</div>
      <div style="font-size:14px;letter-spacing:1.5px;text-transform:uppercase;font-weight:700;margin:16px 0 8px">${t}</div>
      <div class="muted" style="font-size:16px;line-height:1.5">${d}</div></div>`).join('')}
  </div>
  <div class="row" style="gap:14px;margin-top:24px">
    ${[['100','career roles'],['15','sectors'],['241','unique skills'],['6','free course sites']].map(([n,l])=>`<div class="card" style="flex:1;padding:18px;text-align:center"><div style="font-size:34px;font-weight:800;background:linear-gradient(135deg,#00ffcc,#4facfe);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">${n}</div><div class="muted" style="font-size:13px;text-transform:uppercase;letter-spacing:1px;margin-top:4px">${l}</div></div>`).join('')}
  </div>
  <div class="pageno">5</div>
`);

// ── 6 · Empowerment, not replacement ──
slides.push(`
  <span class="secnum">05 · Ethics — Empower, Don't Decide</span>
  <h1 style="max-width:920px">It hands people <span class="grad">options and a path</span> — never a verdict</h1>
  <div class="row" style="gap:20px;margin-top:40px">
    <div class="card" style="flex:1;padding:30px">
      <div style="font-size:30px">🤝</div>
      <div style="font-size:21px;font-weight:700;margin:12px 0 8px">Informed choices, not choices made for you</div>
      <p class="muted" style="font-size:17px;line-height:1.55">We surface matches, gaps and free resources. <b style="color:#fff">The person decides</b> which role to chase and what "success" means to them.</p>
    </div>
    <div class="card" style="flex:1;padding:30px">
      <div style="font-size:30px">🔎</div>
      <div style="font-size:21px;font-weight:700;margin:12px 0 8px">Transparent, not a black box</div>
      <p class="muted" style="font-size:17px;line-height:1.55">Every match shows <b style="color:#fff">why</b> — which skills counted and which are missing. No hidden scoring; results you can question.</p>
    </div>
    <div class="card" style="flex:1;padding:30px">
      <div style="font-size:30px">📚</div>
      <div style="font-size:21px;font-weight:700;margin:12px 0 8px">Points to free learning</div>
      <p class="muted" style="font-size:17px;line-height:1.55">Every gap links to <b style="color:#fff">free</b> courses (YouTube, freeCodeCamp, Khan Academy…) — not paywalls that re-gatekeep opportunity.</p>
    </div>
  </div>
  <div class="pageno">6</div>
`);

// ── 7 · Risks & safeguards ──
slides.push(`
  <span class="secnum">06 · What Could Go Wrong &amp; Our Safeguards</span>
  <h1>We designed for the people most likely to be <span class="grad">excluded</span></h1>
  <div class="row" style="gap:18px;margin-top:36px">
    <div style="flex:1;display:flex;flex-direction:column;gap:14px">
      ${[
        ['📵','Low bandwidth / no account','Runs entirely in the browser — no login, lightweight, offline build is a small next step.'],
        ['🗣️','Low literacy / non-English','Plain language, short sentences, visual bars; simple strings built to translate.'],
      ].map(([i,t,d])=>`<div class="card" style="padding:22px 24px"><div class="row" style="gap:14px;align-items:flex-start"><div style="font-size:24px">${i}</div><div><div style="font-size:18px;font-weight:700;margin-bottom:4px">${t}</div><div class="muted" style="font-size:16px;line-height:1.45">${d}</div></div></div></div>`).join('')}
    </div>
    <div style="flex:1;display:flex;flex-direction:column;gap:14px">
      ${[
        ['⚠️','Risk of bad career advice','Results are suggestions, not prescriptions — ranked options with visible reasons, never a single "do this".'],
        ['🎯','One idea of "success"','No "best" job is pushed; the user explores every sector and defines their own goal.'],
      ].map(([i,t,d])=>`<div class="card" style="padding:22px 24px"><div class="row" style="gap:14px;align-items:flex-start"><div style="font-size:24px">${i}</div><div><div style="font-size:18px;font-weight:700;margin-bottom:4px">${t}</div><div class="muted" style="font-size:16px;line-height:1.45">${d}</div></div></div></div>`).join('')}
    </div>
  </div>
  <div class="pageno">7</div>
`);

// ── 8 · Impact & what's next ──
slides.push(`
  <span class="secnum">07 · Impact &amp; What's Next</span>
  <h1>Free, instant, and built to <span class="grad">scale &amp; deepen</span></h1>
  <div class="row" style="gap:20px;margin-top:34px;align-items:stretch">
    <div class="card" style="flex:1;padding:30px">
      <div style="font-size:19px;font-weight:700;margin-bottom:14px">📈 Impact</div>
      ${['Works for anyone with a browser — zero cost, zero install','One shared skills map across 100 roles &amp; 15 sectors','Turns "I don\'t know where to start" into a concrete next step'].map(x=>`<div class="row" style="gap:10px;margin-bottom:10px"><span style="color:var(--accent)">▸</span><span class="muted" style="font-size:16px;line-height:1.45">${x}</span></div>`).join('')}
    </div>
    <div class="card" style="flex:1;padding:30px;border-color:rgba(0,255,204,.25);background:rgba(0,255,204,.05)">
      <div style="font-size:19px;font-weight:700;margin-bottom:14px">🚀 What's next</div>
      ${['<b style="color:#fff">Claude-powered</b> personalized learning plans &amp; career Q&amp;A','Localization &amp; full offline build for low-connectivity use','Real-time labour-market data to keep roles current'].map(x=>`<div class="row" style="gap:10px;margin-bottom:10px"><span style="color:var(--accent)">▸</span><span class="muted" style="font-size:16px;line-height:1.45">${x}</span></div>`).join('')}
    </div>
  </div>
  <div style="margin-top:26px;font-size:20px;line-height:1.4"><span class="grad" style="font-weight:700">The Avengers</span> <span class="muted">·&nbsp; Prince Sugar · Chrysler Steve · Jedidiah Duku &nbsp;·&nbsp; try it live: jedidiahduku.github.io/SkillsGapAnalyzer</span></div>
  <div class="pageno">8</div>
`);

slides.forEach((s, i) => {
  fs.writeFileSync(path.join(OUT, `slide${i + 1}.html`), wrap(s));
});
console.log('wrote', slides.length, 'slides to', OUT);
