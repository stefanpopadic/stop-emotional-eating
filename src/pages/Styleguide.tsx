import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, BookOpen, Lock, AlertTriangle, Brain, Check } from 'lucide-react';
import { Logo } from '../components/Logo';

/* ─────────────────────────────────────────────────────────────
   Design tokens — mirror of src/index.css @theme
   Keep this page in sync with the real tokens so it stays
   a single source of truth you can reference while building.
   ───────────────────────────────────────────────────────────── */

const colors = [
  { name: 'Deep Sage', var: '--color-deep-sage', hex: '#728C7B', usage: 'Primary brand. Headlines, logo, dark sections, primary text accents.' },
  { name: 'Warm Linen', var: '--color-warm-linen', hex: '#F7F3EE', usage: 'Default page background. Warm off-white, feels like paper.' },
  { name: 'Soft Black', var: '--color-soft-black', hex: '#3A3A3A', usage: 'Body copy. Never pure black — keeps things warm and editorial.' },
  { name: 'Sand', var: '--color-sand', hex: '#C4A882', usage: 'Dividers, muted labels, borders, eyebrow text, metadata.' },
  { name: 'Muted Teal', var: '--color-muted-teal', hex: '#8AABA7', usage: 'Progress bars, accent borders, secondary highlights, pull quotes.' },
  { name: 'Oat', var: '--color-oat', hex: '#EDE6DB', usage: 'Alt section background. Cards. Quiz option backgrounds.' },
  { name: 'Terracotta', var: '--color-terracotta', hex: '#D4856A', usage: 'Primary CTA. Action buttons. Chapter title underlines. Never decorative.' },
  { name: 'Sage Mist', var: '--color-sage-mist', hex: '#A8B88F', usage: 'Subtle accent. Use sparingly for secondary badges or illustrations.' },
  { name: 'Dusty Blush', var: '--color-dusty-blush', hex: '#D6C5B0', usage: 'Soft secondary. Disclaimer boxes, tertiary backgrounds.' },
];

function Section({ id, title, eyebrow, children }: { id: string; title: string; eyebrow: string; children: React.ReactNode }) {
  return (
    <section id={id} className="py-16 md:py-20 px-6 md:px-12 border-b border-sand/20 scroll-mt-24">
      <div className="max-w-5xl mx-auto">
        <span className="inline-block font-sans font-medium text-xs uppercase tracking-widest text-sand mb-4">
          {eyebrow}
        </span>
        <h2 className="font-serif font-semibold text-3xl md:text-4xl text-deep-sage mb-10">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}

function Swatch({ name, hex, varName, usage, text = 'dark' }: { name: string; hex: string; varName: string; usage: string; text?: 'dark' | 'light' }) {
  return (
    <div className="rounded-2xl overflow-hidden border border-sand/30 bg-white">
      <div
        className="h-28 flex items-end p-4"
        style={{ backgroundColor: hex }}
      >
        <span className={`font-sans text-xs uppercase tracking-widest ${text === 'dark' ? 'text-soft-black/70' : 'text-white/80'}`}>
          {hex}
        </span>
      </div>
      <div className="p-5">
        <p className="font-serif font-semibold text-xl text-deep-sage mb-1">{name}</p>
        <code className="block font-sans text-xs text-sand mb-3">{varName}</code>
        <p className="font-sans text-sm text-soft-black/70 leading-relaxed">{usage}</p>
      </div>
    </div>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 border border-sand/30">
      <h3 className="font-sans font-semibold text-sm uppercase tracking-widest text-sand mb-5">{title}</h3>
      {children}
    </div>
  );
}

function CodeLabel({ children }: { children: React.ReactNode }) {
  return (
    <code className="inline-block font-sans text-[11px] text-soft-black/50 bg-oat px-2 py-1 rounded mt-3">
      {children}
    </code>
  );
}

export function Styleguide() {
  return (
    <div className="min-h-screen bg-warm-linen">
      {/* Header */}
      <header className="py-5 px-6 flex items-center justify-between bg-warm-linen/92 backdrop-blur-md border-b border-sand/20 sticky top-0 z-50">
        <Link to="/" className="text-deep-sage hover:opacity-80 transition-opacity">
          <Logo height={28} />
        </Link>
        <span className="font-sans text-xs uppercase tracking-widest text-sand">Design System v1</span>
      </header>

      {/* Hero */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block bg-oat font-sans font-medium text-xs uppercase tracking-widest text-deep-sage px-4 py-2 rounded-full mb-6">
            Stop Emotional Eating · Style Guide
          </span>
          <h1 className="font-serif font-semibold text-5xl md:text-6xl text-deep-sage mb-6 leading-[1.05]">
            The system that runs the whole site.
          </h1>
          <p className="font-sans text-xl text-soft-black/80 leading-relaxed max-w-2xl">
            Every color, every font, every button, every spacing decision — in one place. If it isn't on this page, it doesn't belong on the site.
          </p>

          {/* Quick nav */}
          <nav className="mt-12 flex flex-wrap gap-2">
            {[
              ['Foundations', '#foundations'],
              ['Color', '#color'],
              ['Typography', '#typography'],
              ['Buttons', '#buttons'],
              ['Forms', '#forms'],
              ['Cards', '#cards'],
              ['Callouts', '#callouts'],
              ['Badges', '#badges'],
              ['Sections', '#sections'],
              ['Iconography', '#icons'],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="font-sans text-sm text-deep-sage bg-oat hover:bg-oat/60 border border-sand/30 px-4 py-2 rounded-full transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* ═══ FOUNDATIONS ═══ */}
      <Section id="foundations" eyebrow="01 · Foundations" title="What the brand feels like">
        <div className="grid md:grid-cols-3 gap-6">
          <Card title="Voice">
            <p className="font-serif text-2xl text-deep-sage leading-snug mb-3">Warm, plain, science-backed.</p>
            <p className="font-sans text-soft-black/70 leading-relaxed">
              Never preachy, never clinical, never cutesy. Talk like a smart friend who has read the research.
            </p>
          </Card>
          <Card title="Tone">
            <p className="font-serif text-2xl text-deep-sage leading-snug mb-3">Editorial, not marketing.</p>
            <p className="font-sans text-soft-black/70 leading-relaxed">
              Think longform magazine. Serif headlines, generous whitespace, no exclamation marks.
            </p>
          </Card>
          <Card title="Feel">
            <p className="font-serif text-2xl text-deep-sage leading-snug mb-3">Paper, not pixels.</p>
            <p className="font-sans text-soft-black/70 leading-relaxed">
              Warm linen backgrounds, subtle paper texture, sand-colored rules. Screens should feel like a book.
            </p>
          </Card>
        </div>
      </Section>

      {/* ═══ COLOR ═══ */}
      <Section id="color" eyebrow="02 · Color" title="The palette">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {colors.map((c) => (
            <Swatch
              key={c.var}
              name={c.name}
              hex={c.hex}
              varName={c.var}
              usage={c.usage}
              text={['Deep Sage', 'Soft Black', 'Terracotta'].includes(c.name) ? 'light' : 'dark'}
            />
          ))}
        </div>

        <div className="mt-10 p-6 md:p-8 rounded-2xl bg-deep-sage text-warm-linen">
          <h3 className="font-serif font-semibold text-2xl mb-3">Usage rules</h3>
          <ul className="font-sans space-y-2 text-warm-linen/90 leading-relaxed">
            <li className="flex gap-3"><Check size={18} className="flex-shrink-0 mt-1 text-muted-teal" /> Terracotta is reserved for action. If it's not clickable, it shouldn't be terracotta.</li>
            <li className="flex gap-3"><Check size={18} className="flex-shrink-0 mt-1 text-muted-teal" /> Deep sage is the brand. Use it for the logo, hero headlines, and any dark-background section.</li>
            <li className="flex gap-3"><Check size={18} className="flex-shrink-0 mt-1 text-muted-teal" /> Warm linen is always the default page background. Oat is the alternate.</li>
            <li className="flex gap-3"><Check size={18} className="flex-shrink-0 mt-1 text-muted-teal" /> Sand is for dividers and metadata — never for body copy.</li>
            <li className="flex gap-3"><Check size={18} className="flex-shrink-0 mt-1 text-muted-teal" /> Never use pure black (#000) or pure white (#FFF) for text. Soft black and warm linen only.</li>
          </ul>
        </div>
      </Section>

      {/* ═══ TYPOGRAPHY ═══ */}
      <Section id="typography" eyebrow="03 · Typography" title="Type system">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card title="Serif — Cormorant Garamond">
            <p className="font-serif text-5xl text-deep-sage leading-none mb-2">Aa</p>
            <p className="font-sans text-soft-black/70 leading-relaxed mb-3">
              Used for h1 and h2 only. Editorial, literary, feels like a book jacket.
            </p>
            <CodeLabel>font-serif</CodeLabel>
          </Card>
          <Card title="Sans — Karla">
            <p className="font-sans text-5xl text-deep-sage leading-none mb-2">Aa</p>
            <p className="font-sans text-soft-black/70 leading-relaxed mb-3">
              Used for body, h3-h6, UI, labels, buttons. Clean, humanist, easy on the eyes.
            </p>
            <CodeLabel>font-sans</CodeLabel>
          </Card>
        </div>

        <div className="space-y-8 bg-white rounded-2xl p-8 md:p-12 border border-sand/30">
          <div>
            <h1 className="font-serif font-semibold text-5xl md:text-6xl text-deep-sage leading-[1.05] mb-2">
              Headline · H1
            </h1>
            <CodeLabel>font-serif font-semibold text-5xl md:text-6xl text-deep-sage leading-[1.05]</CodeLabel>
          </div>
          <div>
            <h2 className="font-serif font-semibold text-3xl md:text-4xl text-deep-sage mb-2">
              Section title · H2
            </h2>
            <CodeLabel>font-serif font-semibold text-3xl md:text-4xl text-deep-sage</CodeLabel>
          </div>
          <div>
            <h3 className="font-sans font-semibold text-xl text-deep-sage mb-2">
              Subsection title · H3
            </h3>
            <CodeLabel>font-sans font-semibold text-xl text-deep-sage</CodeLabel>
          </div>
          <div>
            <p className="font-sans text-lg md:text-xl text-soft-black leading-relaxed mb-2">
              Body large — used for intro paragraphs and result-page text. Generous leading for a magazine feel. This is how readable copy should look and breathe.
            </p>
            <CodeLabel>font-sans text-lg md:text-xl text-soft-black leading-relaxed</CodeLabel>
          </div>
          <div>
            <p className="font-sans text-base text-soft-black leading-relaxed mb-2">
              Body default — for regular paragraphs, cards, and most UI copy. Comfortable reading rhythm.
            </p>
            <CodeLabel>font-sans text-base text-soft-black leading-relaxed</CodeLabel>
          </div>
          <div>
            <p className="font-sans text-sm text-soft-black/60 mb-2">
              Meta — sub-labels, captions, below-CTA text, footnotes.
            </p>
            <CodeLabel>font-sans text-sm text-soft-black/60</CodeLabel>
          </div>
          <div>
            <span className="font-sans font-medium text-xs uppercase tracking-widest text-sand">
              Eyebrow label
            </span>
            <CodeLabel>font-sans font-medium text-xs uppercase tracking-widest text-sand</CodeLabel>
          </div>
        </div>
      </Section>

      {/* ═══ BUTTONS ═══ */}
      <Section id="buttons" eyebrow="04 · Buttons" title="Actions">
        <div className="grid md:grid-cols-2 gap-6">
          <Card title="Primary · Terracotta">
            <button className="w-full inline-flex items-center justify-center gap-3 bg-terracotta text-white font-sans font-semibold text-xl px-10 py-5 rounded-xl hover:bg-terracotta/90 transition-colors shadow-xl cursor-pointer">
              Get the 21-Day Guide
              <ArrowRight size={22} />
            </button>
            <p className="font-sans text-sm text-soft-black/60 mt-4">
              The only button that should appear on a page's main CTA. One per screen, ideally.
            </p>
            <CodeLabel>bg-terracotta text-white rounded-xl px-10 py-5 shadow-xl</CodeLabel>
          </Card>

          <Card title="Primary · Compact">
            <button className="inline-flex items-center gap-2 bg-terracotta text-white font-sans font-medium text-base px-6 py-3 rounded-lg hover:bg-terracotta/90 transition-colors cursor-pointer">
              Start the quiz
              <ArrowRight size={16} />
            </button>
            <p className="font-sans text-sm text-soft-black/60 mt-4">
              Inline CTAs, secondary placements, sticky bars.
            </p>
            <CodeLabel>bg-terracotta text-white rounded-lg px-6 py-3</CodeLabel>
          </Card>

          <Card title="Secondary · Deep Sage">
            <button className="inline-flex items-center gap-2 bg-deep-sage text-warm-linen font-sans font-medium text-base px-6 py-3 rounded-lg hover:bg-deep-sage/90 transition-colors cursor-pointer">
              Learn more
            </button>
            <p className="font-sans text-sm text-soft-black/60 mt-4">
              Use when terracotta would be too loud — on light sections, or for tertiary actions.
            </p>
            <CodeLabel>bg-deep-sage text-warm-linen rounded-lg px-6 py-3</CodeLabel>
          </Card>

          <Card title="Ghost">
            <button className="inline-flex items-center gap-2 bg-transparent text-deep-sage border border-deep-sage/30 font-sans font-medium text-base px-6 py-3 rounded-lg hover:bg-deep-sage hover:text-warm-linen transition-colors cursor-pointer">
              Maybe later
            </button>
            <p className="font-sans text-sm text-soft-black/60 mt-4">
              Dismissive or low-emphasis actions. Almost never the first choice on a page.
            </p>
            <CodeLabel>bg-transparent border border-deep-sage/30 text-deep-sage</CodeLabel>
          </Card>
        </div>
      </Section>

      {/* ═══ FORMS ═══ */}
      <Section id="forms" eyebrow="05 · Forms" title="Inputs">
        <div className="grid md:grid-cols-2 gap-6">
          <Card title="Text input">
            <input
              type="text"
              placeholder="Your first name"
              className="w-full bg-white border-2 border-sand rounded-xl px-6 py-4 text-lg font-sans text-soft-black placeholder:text-soft-black/40 focus:outline-none focus:border-deep-sage focus:ring-1 focus:ring-deep-sage transition-colors"
            />
            <CodeLabel>border-2 border-sand rounded-xl focus:border-deep-sage</CodeLabel>
          </Card>

          <Card title="Email input">
            <input
              type="email"
              placeholder="you@domain.com"
              className="w-full bg-white border-2 border-sand rounded-xl px-6 py-4 text-lg font-sans text-soft-black placeholder:text-soft-black/40 focus:outline-none focus:border-deep-sage focus:ring-1 focus:ring-deep-sage transition-colors"
            />
            <CodeLabel>type="email" required</CodeLabel>
          </Card>

          <Card title="Quiz option — default">
            <button className="w-full text-left p-6 rounded-xl border border-sand bg-oat hover:border-deep-sage hover:shadow-sm transition-all cursor-pointer">
              <span className="font-sans text-lg text-soft-black leading-relaxed">
                I eat when I'm stressed or overwhelmed.
              </span>
            </button>
            <CodeLabel>bg-oat border-sand rounded-xl p-6</CodeLabel>
          </Card>

          <Card title="Quiz option — selected">
            <button className="w-full text-left p-6 rounded-xl border-2 border-deep-sage bg-deep-sage/10 cursor-pointer">
              <span className="font-sans text-lg text-soft-black leading-relaxed">
                I eat when I'm stressed or overwhelmed.
              </span>
            </button>
            <CodeLabel>bg-deep-sage/10 border-2 border-deep-sage</CodeLabel>
          </Card>
        </div>
      </Section>

      {/* ═══ CARDS ═══ */}
      <Section id="cards" eyebrow="06 · Cards" title="Content containers">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-8 border border-sand/30">
            <BookOpen className="text-terracotta mb-4" size={28} />
            <h3 className="font-serif font-semibold text-2xl text-deep-sage mb-2">Light card</h3>
            <p className="font-sans text-soft-black/70 leading-relaxed">
              Default white card on warm-linen sections. Soft sand border, generous padding, no shadow.
            </p>
            <CodeLabel>bg-white rounded-2xl p-8 border border-sand/30</CodeLabel>
          </div>

          <div className="bg-oat rounded-2xl p-8 border border-sand/30">
            <CalendarDaysIcon />
            <h3 className="font-serif font-semibold text-2xl text-deep-sage mb-2 mt-4">Oat card</h3>
            <p className="font-sans text-soft-black/70 leading-relaxed">
              Alternative background for pages already on warm-linen. Used inside sections that need layering.
            </p>
            <CodeLabel>bg-oat rounded-2xl p-8 border border-sand/30</CodeLabel>
          </div>

          <div className="bg-deep-sage text-warm-linen rounded-2xl p-8">
            <Brain className="text-warm-linen mb-4" size={28} strokeWidth={1.5} />
            <h3 className="font-serif font-semibold text-2xl mb-2">Dark card</h3>
            <p className="font-sans text-warm-linen/80 leading-relaxed">
              For value-drops, insights, and "pay attention" moments inside a flow. Feels heavy on purpose.
            </p>
            <CodeLabel>bg-deep-sage text-warm-linen rounded-2xl p-8</CodeLabel>
          </div>

          <div className="bg-warm-linen rounded-xl p-6 border-l-4 border-muted-teal">
            <p className="font-sans font-medium text-deep-sage leading-relaxed">
              "The craving isn't the enemy. The craving is the signal."
            </p>
            <CodeLabel>border-l-4 border-muted-teal bg-warm-linen</CodeLabel>
          </div>
        </div>
      </Section>

      {/* ═══ CALLOUTS ═══ */}
      <Section id="callouts" eyebrow="07 · Callouts" title="Pay attention to this">
        <div className="space-y-6">
          <div className="bg-deep-sage text-warm-linen rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-4">
              <AlertTriangle className="text-terracotta flex-shrink-0 mt-1" size={28} />
              <span className="font-sans font-medium text-sm uppercase tracking-widest text-sand pt-1">
                Watch out for this
              </span>
            </div>
            <p className="font-sans text-lg leading-relaxed opacity-90">
              Warning callout. Used for cautions, counter-intuitive insights, and "most people get this wrong" moments.
            </p>
            <CodeLabel>bg-deep-sage + AlertTriangle terracotta icon</CodeLabel>
          </div>

          <div className="flex items-center gap-4 bg-warm-linen border border-sand/30 rounded-xl p-6">
            <ShieldCheck className="text-muted-teal flex-shrink-0" size={32} />
            <div>
              <p className="font-sans font-semibold text-soft-black">30-Day Money-Back Guarantee</p>
              <p className="font-sans text-sm text-soft-black/60">Trust builder. Inline with body, low visual weight, muted-teal icon.</p>
            </div>
          </div>
          <CodeLabel>ShieldCheck · muted-teal · bordered rounded-xl</CodeLabel>

          <div className="bg-muted-teal/5 border-t-4 border-deep-sage p-8 rounded-xl">
            <span className="font-sans font-bold text-xs uppercase tracking-widest text-deep-sage block mb-3 pb-2 border-b border-deep-sage/10">
              Science box
            </span>
            <p className="font-sans text-soft-black leading-relaxed">
              For research citations, studies, and "the data says" moments. Calm, credible, not shouty.
            </p>
          </div>
          <CodeLabel>bg-muted-teal/5 border-t-4 border-deep-sage</CodeLabel>
        </div>
      </Section>

      {/* ═══ BADGES ═══ */}
      <Section id="badges" eyebrow="08 · Badges" title="Labels and tags">
        <div className="flex flex-wrap gap-3 mb-6">
          <span className="inline-block bg-oat font-sans font-medium text-xs uppercase tracking-widest text-deep-sage px-4 py-2 rounded-full">
            Eyebrow badge
          </span>
          <span className="inline-block bg-deep-sage font-sans font-bold text-xs uppercase tracking-widest text-warm-linen px-4 py-2 rounded-full">
            Dark badge
          </span>
          <span className="inline-block bg-terracotta font-sans font-bold text-xs uppercase tracking-widest text-white px-4 py-2 rounded-full">
            Accent badge
          </span>
          <span className="inline-block bg-warm-linen border border-sand/40 font-sans font-medium text-xs uppercase tracking-widest text-soft-black/70 px-4 py-2 rounded-full">
            Ghost badge
          </span>
        </div>
        <CodeLabel>rounded-full · uppercase · tracking-widest · text-xs</CodeLabel>

        <div className="mt-8 flex items-center gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-terracotta text-white rounded-full flex items-center justify-center font-sans font-bold">
            1
          </div>
          <p className="font-sans text-soft-black">Numbered step — used in how-to lists inside results pages.</p>
        </div>
      </Section>

      {/* ═══ SECTIONS ═══ */}
      <Section id="sections" eyebrow="09 · Sections" title="Layout & spacing">
        <div className="space-y-8">
          <Card title="Section container">
            <p className="font-sans text-soft-black/70 leading-relaxed mb-3">
              Every content section uses the same shell: generous vertical padding, max-width 3xl (48rem), horizontal padding 6/12.
            </p>
            <CodeLabel>py-16 md:py-24 px-6 md:px-12 · max-w-3xl mx-auto</CodeLabel>
          </Card>

          <Card title="Page backgrounds — alternate">
            <div className="grid grid-cols-4 gap-2 mb-3">
              <div className="h-16 rounded-lg bg-warm-linen border border-sand/30 flex items-center justify-center text-[10px] font-sans text-soft-black/60">warm-linen</div>
              <div className="h-16 rounded-lg bg-oat border border-sand/30 flex items-center justify-center text-[10px] font-sans text-soft-black/60">oat</div>
              <div className="h-16 rounded-lg bg-deep-sage flex items-center justify-center text-[10px] font-sans text-warm-linen/80">deep-sage</div>
              <div className="h-16 rounded-lg bg-soft-black flex items-center justify-center text-[10px] font-sans text-white/60">soft-black</div>
            </div>
            <p className="font-sans text-soft-black/70 leading-relaxed">
              Alternate warm-linen → oat → warm-linen → deep-sage as you scroll. Break rhythm only for hero/footer.
            </p>
          </Card>

          <Card title="Radius scale">
            <div className="flex gap-3 items-end">
              <div className="w-16 h-16 bg-deep-sage rounded-lg" />
              <div className="w-16 h-16 bg-deep-sage rounded-xl" />
              <div className="w-16 h-16 bg-deep-sage rounded-2xl" />
              <div className="w-16 h-16 bg-deep-sage rounded-full" />
            </div>
            <p className="font-sans text-sm text-soft-black/60 mt-3">
              lg (0.5rem) · xl (0.75rem) · 2xl (1rem) · full — used respectively for chips, inputs, cards, badges.
            </p>
          </Card>
        </div>
      </Section>

      {/* ═══ ICONS ═══ */}
      <Section id="icons" eyebrow="10 · Iconography" title="Lucide, line weight 1.5">
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
          {[
            { Icon: Brain, label: 'Brain' },
            { Icon: BookOpen, label: 'BookOpen' },
            { Icon: Lock, label: 'Lock' },
            { Icon: ShieldCheck, label: 'ShieldCheck' },
            { Icon: AlertTriangle, label: 'Alert' },
            { Icon: ArrowRight, label: 'ArrowRight' },
          ].map(({ Icon, label }) => (
            <div key={label} className="bg-white rounded-xl p-5 border border-sand/30 flex flex-col items-center gap-3">
              <Icon className="text-deep-sage" size={28} strokeWidth={1.5} />
              <span className="font-sans text-xs text-soft-black/60">{label}</span>
            </div>
          ))}
        </div>
        <p className="font-sans text-sm text-soft-black/60 mt-6">
          Use lucide-react. Always <strong>strokeWidth=1.5</strong>. Size 22–32 for inline icons, 16–18 inside buttons. Color: deep-sage on light, warm-linen on dark, terracotta only when the icon itself is the action.
        </p>
      </Section>

      {/* Footer */}
      <footer className="bg-soft-black text-white/60 py-10 px-6 font-sans text-[13px]">
        <div className="max-w-3xl mx-auto text-center space-y-2">
          <p>Stop Emotional Eating · Style Guide · v1</p>
          <p>
            <Link to="/" className="underline hover:text-white">Home</Link>
            {' · '}
            <Link to="/privacy" className="underline hover:text-white">Privacy</Link>
            {' · '}
            <Link to="/terms" className="underline hover:text-white">Terms</Link>
          </p>
        </div>
      </footer>
    </div>
  );
}

/* Tiny helper so we don't need to import an extra icon */
function CalendarDaysIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-terracotta">
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
      <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01" />
    </svg>
  );
}
