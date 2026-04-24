import { Link } from 'react-router-dom';
import { Logo } from '../components/Logo';

const sections = [
  {
    title: 'Plain-English Summary',
    body: [
      'This website is educational. It is here to help you understand emotional eating patterns and explore practical strategies. It is not medical care, therapy, or a substitute for working with a qualified professional.',
    ],
  },
  {
    title: 'Educational Content Only',
    body: [
      'All content on stopemotionaleating.guide is for educational and informational purposes only. Nothing on this website is medical advice, mental health treatment, or a diagnosis.',
      'This is not therapy, and it is not a treatment program for eating disorders. If you are dealing with an eating disorder or are in crisis, contact a qualified professional or immediate support service right away.',
    ],
  },
  {
    title: 'Quiz & Results',
    body: [
      'The quiz is an educational tool based on behavioral science and published research. Your result type is not a diagnosis. It is simply a way to help you understand which pattern may be showing up most often for you.',
    ],
  },
  {
    title: 'Digital Products',
    body: [
      'Any digital products sold through this brand, including guides, trackers, or related resources, are delivered electronically. Unless a different policy is clearly stated on the checkout page, purchases are covered by a 30-day money-back guarantee.',
    ],
  },
  {
    title: 'Refunds',
    body: [
      'If you buy a digital product and want a refund within the stated refund window, email us and we will help. Abuse, redistribution, or clearly fraudulent use may void that refund policy.',
    ],
  },
  {
    title: 'Intellectual Property',
    body: [
      'All site content, quiz logic, design elements, and digital products are owned by Stop Emotional Eating unless otherwise stated. You may not copy, redistribute, or resell them without written permission.',
    ],
  },
  {
    title: 'Limitation of Liability',
    body: [
      'Use this website and any related product at your own discretion. We are not responsible for outcomes, losses, or decisions that come from applying the information here. Always use your judgment and consult a qualified professional for medical or psychological concerns.',
    ],
  },
  {
    title: 'Contact',
    body: ['Questions about these terms? Email hello@stopemotionaleating.guide.'],
  },
];

export function Terms() {
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
          <h1 className="font-sans font-bold text-5xl sm:text-6xl md:text-7xl text-deep-sage leading-[0.98] tracking-tight mb-14">
            Terms
          </h1>

          <div className="divide-y divide-soft-black/15 border-t border-b border-soft-black/15">
            {sections.map((s) => (
              <section key={s.title} className="py-8 sm:py-10">
                <h2 className="font-sans font-bold text-2xl md:text-3xl text-deep-sage mb-5 tracking-tight">
                  {s.title}
                </h2>
                <div className="space-y-4 font-sans text-base md:text-[17px] text-soft-black/85 leading-[1.7]">
                  {s.body.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
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
