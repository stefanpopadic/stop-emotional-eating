import { FadeIn } from './FadeIn';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "I've tried every diet for 10 years. This is the first thing that actually explained WHY I eat — not just told me to stop. I cried because someone finally got it.",
    name: "Sarah, 32"
  },
  {
    quote: "By the time the kids are in bed, food was my only comfort. I didn't even realize it was emotional until I saw my pattern. Now I catch myself before I open the pantry on autopilot.",
    name: "Michelle, 38"
  },
  {
    quote: "My doctor told me to lose weight but never told me how to stop eating my stress. Understanding the science behind it was the missing piece nobody gave me.",
    name: "Diana, 44"
  },
  {
    quote: "I thought I was broken. Turns out my brain was doing exactly what it was designed to do under stress — and there's actual science behind it. That changed everything.",
    name: "Jess, 28"
  }
];

export function Testimonials() {
  return (
    <section className="bg-oat py-20 md:py-32 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <FadeIn className="text-center">
          <span className="inline-block font-sans font-medium text-sm uppercase tracking-widest text-sand mb-6">
            The Breakthrough
          </span>
          <h2 className="font-serif font-semibold text-4xl md:text-5xl text-deep-sage mb-10 text-balance leading-tight mx-auto">
            The Moment It Finally Makes Sense
          </h2>
          <p className="font-sans text-xl md:text-2xl leading-relaxed text-soft-black mb-16 max-w-2xl mx-auto">
            When you stop blaming yourself and start understanding your biology, everything changes. These are the words of people who finally saw their pattern clearly.
          </p>
        </FadeIn>

        <div className="space-y-12 mb-16">
          {testimonials.map((t, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="bg-warm-linen border-t-4 border-t-terracotta rounded-b-2xl rounded-t-sm p-8 md:p-10 shadow-sm relative text-center">
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="fill-terracotta text-terracotta" />
                  ))}
                </div>
                <p className="font-serif italic text-2xl md:text-3xl leading-relaxed text-soft-black mb-8">
                  "{t.quote}"
                </p>
                <div className="flex justify-center items-center gap-4">
                  <p className="font-sans text-lg text-sand font-medium uppercase tracking-wider">
                    — {t.name}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <p className="font-sans italic text-base text-sand text-center">
            Names represent common experiences shared in our community.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
