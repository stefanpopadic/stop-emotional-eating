import { Link } from 'react-router-dom';
import { FadeIn } from './FadeIn';

const stats = [
  {
    number: "53M",
    text: "Americans emotionally eat on a regular basis. That's 1 in 5 adults. Not occasionally. Regularly. Most will never tell another person — because shame keeps it hidden.",
    source: "NIH National Study"
  },
  {
    number: "44.9%",
    text: "of adults who struggle with their weight are emotional eaters. Nearly half. Across 18 studies and 21,237 people. It was never just about calories in, calories out. There's always been something deeper.",
    source: "British Journal of Psychology, 2025"
  },
  {
    number: "70%",
    text: "of emotional eaters are women. Not because women are weaker. Because women are socialized to suppress, to caretake, to hold it together — and food becomes the one place where they let go.",
    source: "NIH National Study"
  },
  {
    number: "5:30 PM",
    text: "The exact time binge eating risk peaks. Not midnight. Not after dessert. Right after work, right when the day's cortisol is highest and your self-regulation is lowest. The second peak? 11 PM.",
    source: "Journal of Psychosomatic Research, 2023"
  }
];

export function Stats() {
  return (
    <section className="bg-deep-sage py-20 md:py-32 px-6 md:px-12 text-warm-linen">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <span className="inline-block font-sans font-medium text-sm uppercase tracking-widest text-sand mb-6">
            The Epidemic
          </span>
          <h2 className="font-serif font-semibold text-4xl md:text-5xl mb-10 text-balance leading-tight">
            You Are Not the Only One
          </h2>
          <p className="font-sans text-xl md:text-2xl leading-relaxed opacity-90 mb-16">
            This isn't a character flaw. It's one of the most common human responses to stress, emotions, and brain chemistry. The only reason it feels like your secret is because everyone else is keeping the same one.
          </p>
        </FadeIn>

        <div className="space-y-12 mb-16">
          {stats.map((stat, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start border-t border-white/20 pt-8">
                <div className="font-serif font-bold text-7xl md:text-8xl lg:text-9xl text-oat md:w-1/3 flex-shrink-0">
                  {stat.number}
                </div>
                <div className="md:w-2/3 md:pt-4 lg:pt-6">
                  <p className="font-sans text-xl leading-relaxed opacity-90 mb-4">
                    {stat.text}
                  </p>
                  <p className="font-sans text-sm uppercase tracking-wider text-sand">
                    Source: {stat.source}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4} className="text-center mt-20">
          <Link to="/quiz" className="inline-flex bg-sand text-deep-sage font-sans font-medium text-xl px-10 py-5 rounded-lg hover:bg-white hover:-translate-y-1 transition-all duration-300 shadow-lg">
            Join 100,000+ Who Took the Quiz
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
