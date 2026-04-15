import { Link } from 'react-router-dom';
import { Logo } from '../components/Logo';

const sections = [
  {
    title: 'Plain-English Summary',
    body: [
      'We collect the information you give us through the quiz, mainly your email address and your quiz answers. We use that information to show your results, email you helpful follow-up content, and improve the experience over time.',
      'We do not sell your personal information.',
    ],
  },
  {
    title: 'What We Collect',
    body: [
      'When you take the quiz or join the email list, we may collect:',
      'bullets:Your email address|Your first name, if you choose to provide it|Your quiz responses, which help determine your result type',
      'We do not ask for phone numbers through the quiz, and we do not store payment card details on this site.',
    ],
  },
  {
    title: 'How We Use Your Information',
    body: [
      'We use your information to:',
      'bullets:Show and email your quiz result|Send practical emails related to emotional eating, cravings, and our digital products|Improve our quiz, emails, and site experience',
      'We do not sell or rent your information to other companies for their marketing.',
    ],
  },
  {
    title: 'Email Service',
    body: [
      'We use Emailit to manage our email list and deliver quiz follow-up emails. That means your email and basic subscriber data may be stored on their systems so we can communicate with you.',
    ],
  },
  {
    title: 'Cookies & Analytics',
    body: ['We do not currently use heavy tracking or ad-tech style cookies on this site. If that changes, we will update this page.'],
  },
  {
    title: 'Your Choices',
    body: [
      'Every email we send includes an unsubscribe link. You can opt out at any time.',
      'If you want us to delete your information or have a privacy question, email us and we will help.',
    ],
  },
  {
    title: 'Contact',
    body: ['Questions about this privacy policy? Email hello@stopemotionaleating.guide.'],
  },
];

export function Privacy() {
  return (
    <div className="min-h-screen bg-warm-linen flex flex-col">
      <header className="px-6 py-5 flex justify-center items-center border-b border-soft-black/10">
        <Link to="/" className="text-deep-sage hover:opacity-70 transition-opacity">
          <Logo height={34} />
        </Link>
      </header>

      <main className="flex-grow py-16 sm:py-24 px-4 sm:px-6">
        <article className="max-w-[62ch] mx-auto">
          <span className="eyebrow block mb-6">Last updated · April 2026</span>
          <h1 className="font-serif font-medium text-5xl sm:text-6xl md:text-7xl text-deep-sage leading-[0.98] tracking-tight mb-14">
            Privacy
          </h1>

          <div className="divide-y divide-soft-black/15 border-t border-b border-soft-black/15">
            {sections.map((s) => (
              <section key={s.title} className="py-8 sm:py-10">
                <h2 className="font-serif font-medium text-2xl md:text-3xl text-deep-sage mb-5 tracking-tight">
                  {s.title}
                </h2>
                <div className="space-y-4 font-sans text-base md:text-[17px] text-soft-black/85 leading-[1.7]">
                  {s.body.map((b, i) => {
                    if (b.startsWith('bullets:')) {
                      const items = b.replace('bullets:', '').split('|');
                      return (
                        <ul key={i} className="pl-0 space-y-1.5">
                          {items.map((it) => (
                            <li key={it} className="flex gap-3">
                              <span className="text-sand">—</span>
                              <span>{it}</span>
                            </li>
                          ))}
                        </ul>
                      );
                    }
                    return <p key={i}>{b}</p>;
                  })}
                </div>
              </section>
            ))}
          </div>

          <p className="eyebrow mt-10">
            <Link to="/" className="hover:text-deep-sage transition-colors">← Back to the quiz</Link>
          </p>
        </article>
      </main>
    </div>
  );
}
