// Assembles the rendered slide PNGs into a 16:9 .pptx (one full-bleed image per slide).
const pptxgen = require('pptxgenjs');
const path = require('path');
const fs = require('fs');

const SLIDES_DIR = path.join(__dirname, 'slides');
const OUT = path.join(__dirname, '..', 'SkillsGapAnalyzer_Pitch.pptx');

const pptx = new pptxgen();
pptx.defineLayout({ name: 'W16x9', width: 13.333, height: 7.5 });
pptx.layout = 'W16x9';
pptx.author = 'The Avengers';
pptx.company = 'Claude Builder Club Hackathon';
pptx.title = 'Skills Gap Analyzer';

for (let i = 1; i <= 8; i++) {
  const img = path.join(SLIDES_DIR, `slide${i}.png`);
  if (!fs.existsSync(img)) throw new Error('missing ' + img);
  const slide = pptx.addSlide();
  slide.background = { color: '0F2027' };
  slide.addImage({ path: img, x: 0, y: 0, w: 13.333, h: 7.5 });
}

pptx.writeFile({ fileName: OUT }).then(() => console.log('wrote', OUT));
