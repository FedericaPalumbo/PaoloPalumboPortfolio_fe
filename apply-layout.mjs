// Applica margini laterali uniformi (--page-gutter) e proporzione foto unica (--photo-ratio).
// Uso, dalla radice del progetto:   node apply-layout.mjs
// È sicuro rilanciarlo: salta ciò che è già applicato e segnala ciò che non trova.
import { readFileSync, writeFileSync, existsSync } from 'node:fs';

const A = 'src/app/';
const report = [];

function read(path) {
  const raw = readFileSync(path, 'utf8');
  return { raw, nl: raw.includes('\r\n') ? '\r\n' : '\n' };
}

// sostituisce `oldStr` con `newStr` rispettando i fine riga del file (LF o CRLF)
function edit(path, label, oldStr, newStr) {
  if (!existsSync(path)) return report.push(`✗ ${path} — file non trovato`);
  const { raw, nl } = read(path);
  const o = oldStr.replaceAll('\n', nl);
  const n = newStr.replaceAll('\n', nl);
  if (raw.includes(o)) {
    writeFileSync(path, raw.replace(o, n));
    report.push(`✓ ${path} — ${label}`);
  } else if (!newStr || raw.includes(n)) {
    report.push(`= ${path} — ${label} (già applicato)`);
  } else {
    report.push(`✗ ${path} — ${label}: testo non trovato, da fare a mano`);
  }
}

// ---------- variabili globali ----------
edit('src/styles.css', 'variabili --page-gutter e --photo-ratio',
`    --font-logo: 'Cormorant Garamond', serif;
}`,
`    --font-logo: 'Cormorant Garamond', serif;

    /* margine laterale di tutte le pagine: 1.5rem su mobile, cresce con lo schermo fino a ~213px a 1916px */
    --page-gutter: clamp(1.5rem, calc(14.1vw - 3.5rem), 18rem);
    /* proporzioni di tutte le foto (605 x 314 px nel riferimento) */
    --photo-ratio: 27 / 14;
}`);

// ---------- navbar / footer / quote banner ----------
edit(A + 'components/navbar/navbar.component.css', 'padding laterale',
  'padding: 0 3.25rem;', 'padding: 0 var(--page-gutter);');
edit(A + 'components/footer/footer.component.css', 'padding laterale',
  'padding: 2.5rem 6.25% 2rem;', 'padding: 2.5rem var(--page-gutter) 2rem;');
edit(A + 'components/quote-banner/quote-banner.component.css', 'padding mobile',
  'padding: 4rem 1.5rem;', 'padding: 4rem var(--page-gutter);');
edit(A + 'components/quote-banner/quote-banner.component.css', 'padding desktop',
  'padding: 6rem 3.25rem;', 'padding-block: 6rem;');

// ---------- home ----------
const home = A + 'pages/home/home.component.css';
edit(home, 'padding mobile',
  'padding: calc(84px + 3rem) 1.5rem 3rem;', 'padding: calc(84px + 3rem) var(--page-gutter) 3rem;');
edit(home, 'padding desktop',
`    .hero {
        padding-right: clamp(1.5rem, 7.6vw, 7rem);
        padding-bottom: 4rem;
        padding-left: clamp(1.5rem, 7.6vw, 7rem);
    }`,
`    .hero {
        padding-bottom: 4rem;
    }`);
edit(home, 'testo verticale al centro del margine',
  'right: 1rem;', 'right: calc(var(--page-gutter) / 2 - 0.3rem);');

// ---------- about ----------
const about = A + 'pages/about-me/about-me.component.css';
edit(about, 'padding mobile', 'padding: 3rem 1.5rem 0;', 'padding: 3rem var(--page-gutter) 0;');
edit(about, 'padding desktop',
`    .about {
        padding: 4rem 3.25rem 0;
    }`,
`    .about {
        padding-top: 4rem;
    }`);
edit(about, 'testo verticale al centro del margine',
  'left: 1.25rem;', 'left: calc(var(--page-gutter) / 2 - 0.3rem);');
edit(about, 'repertorio: padding mobile', 'padding: 4rem 1.5rem 5rem;', 'padding: 4rem var(--page-gutter) 5rem;');
// la regola desktop di .repertoire stava prima di quella base e veniva sovrascritta
if (existsSync(about)) {
  const { raw, nl } = read(about);
  const oldBlock = `
    .repertoire {
        grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
        gap: 4rem;
        align-items: start;
        padding: 6rem 3.25rem 7rem;
    }
}`.replaceAll('\n', nl);
  if (raw.includes(oldBlock)) {
    const tail = `
@media (min-width: 992px) {
    .repertoire {
        grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
        gap: 4rem;
        align-items: start;
        padding-block: 6rem 7rem;
    }
}
`.replaceAll('\n', nl);
    writeFileSync(about, raw.replace(oldBlock, '}').trimEnd() + nl + tail);
    report.push(`✓ ${about} — regola .repertoire desktop spostata dopo quella base`);
  } else {
    report.push(`= ${about} — regola .repertoire desktop (già sistemata o diversa: controlla a mano)`);
  }
}

// ---------- experience / contacts / gallery / showreel ----------
const exp = A + 'pages/experience/experience.component.css';
edit(exp, 'padding mobile', 'padding: 3rem 1.5rem 5rem;', 'padding: 3rem var(--page-gutter) 5rem;');
edit(exp, 'padding desktop',
  'padding: 4rem clamp(1.5rem, 7.6vw, 7rem) 6rem;', 'padding-block: 4rem 6rem;');

const contacts = A + 'pages/contacts/contacts.component.css';
edit(contacts, 'padding mobile', 'padding: 3rem 1.5rem 5rem;', 'padding: 3rem var(--page-gutter) 5rem;');
edit(contacts, 'padding desktop',
  'padding: 4rem clamp(1.5rem, 7.6vw, 7rem) 6rem;', 'padding-block: 4rem 6rem;');

edit(A + 'pages/gallery/gallery.component.css', 'padding laterale',
  'padding: 3rem clamp(1.5rem, 3.4vw, 3.75rem) 6rem;', 'padding: 3rem var(--page-gutter) 6rem;');
edit(A + 'pages/showreel/showreel.component.css', 'padding laterale',
  'padding: 3rem clamp(1.5rem, 3.4vw, 3.75rem) 6rem;', 'padding: 3rem var(--page-gutter) 6rem;');

// ---------- foto tutte uguali (gallery) ----------
edit(A + 'pages/gallery/gallery.component.css', 'griglia con righe allineate',
`/* align-items: start lascia a ogni foto la sua altezza: è questo che rende la griglia "sfalsata" */
.photo-grid {
    display: grid;
    gap: 3rem 1.75rem;
    align-items: start;
    margin-top: 3rem;`,
`/* le foto hanno tutte le stesse proporzioni (--photo-ratio), quindi le righe sono allineate */
.photo-grid {
    display: grid;
    gap: 3rem 1.75rem;
    margin-top: 3rem;`);

edit(A + 'components/photo-card/photo-card.component.css', 'proporzione unica',
`/* la forma decide solo le proporzioni: la foto si adatta con object-fit */
.photo[data-shape='tall'] {
    --photo-ratio: 5 / 6;
}

.photo[data-shape='square'] {
    --photo-ratio: 1;
}

.photo[data-shape='wide'] {
    --photo-ratio: 3 / 2;
}

/* ---------- foto ---------- */
.photo-frame {`,
`/* ---------- foto ---------- */
/* le proporzioni sono uguali per tutte (--photo-ratio in styles.css): la foto si adatta con object-fit */
.photo-frame {`);
edit(A + 'components/photo-card/photo-card.component.html', 'senza data-shape',
  '<figure class="photo" [attr.data-shape]="photo().shape">', '<figure class="photo">');
edit(A + 'entities.ts', 'tolto PhotoShape',
`// proporzioni della foto nella griglia: alta, quadrata o larga (le definisce il css della card)
export type PhotoShape = 'tall' | 'square' | 'wide'

`, '');
edit(A + 'entities.ts', 'tolto shape da Photo',
`    credit: string,
    shape: PhotoShape
}`,
`    credit: string
}`);

const galleryTs = A + 'pages/gallery/gallery.component.ts';
if (existsSync(galleryTs)) {
  const { raw } = read(galleryTs);
  const out = raw
    .replace(/\r?\n\s*shape: '(tall|square|wide)',/g, '')
    .replace('basta cambiare image (e shape se serve)', 'basta cambiare image');
  if (out !== raw) {
    writeFileSync(galleryTs, out);
    report.push(`✓ ${galleryTs} — tolto shape dalle foto`);
  } else {
    report.push(`= ${galleryTs} — shape già tolto`);
  }
}

console.log(report.join('\n'));
console.log('\nLegenda: ✓ applicato · = già a posto · ✗ da fare a mano');
