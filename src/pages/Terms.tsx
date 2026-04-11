import { Link } from 'react-router-dom';
import { Logo } from '../components/Logo';

export function Terms() {
  return (
    <div className="min-h-screen bg-warm-linen flex flex-col">
      <header className="py-6 px-6 flex justify-center items-center border-b border-sand/20">
        <Link to="/" className="text-deep-sage hover:opacity-80 transition-opacity">
          <Logo height={28} />
        </Link>
      </header>

      <main className="flex-grow py-16 px-6">
        <div className="max-w-3xl mx-auto font-sans text-soft-black space-y-8">
          <h1 className="font-serif font-semibold text-5xl md:text-6xl text-deep-sage leading-[1.05]">Terms of Service</h1>
          <p className="font-sans font-medium text-xs uppercase tracking-widest text-sand">Last updated: April 2026</p>

          <section className="space-y-4">
            <h2 className="font-serif font-semibold text-2xl text-deep-sage">Plain-English Summary</h2>
            <p>This website is educational. It is here to help you understand emotional eating patterns and explore practical strategies. It is not medical care, therapy, or a substitute for working with a qualified professional.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif font-semibold text-2xl text-deep-sage">Educational Content Only</h2>
            <p>All content on stopemotionaleating.guide is for educational and informational purposes only. Nothing on this website is medical advice, mental health treatment, or a diagnosis.</p>
            <p>This is not therapy, and it is not a treatment program for eating disorders. If you are dealing with an eating disorder or are in crisis, contact a qualified professional or immediate support service right away.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif font-semibold text-2xl text-deep-sage">Quiz & Results</h2>
            <p>The quiz is an educational tool based on behavioral science and published research. Your result type is not a diagnosis. It is simply a way to help you understand which pattern may be showing up most often for you.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif font-semibold text-2xl text-deep-sage">Digital Products</h2>
            <p>Any digital products sold through this brand, including guides, trackers, or related resources, are delivered electronically. Unless a different policy is clearly stated on the checkout page, purchases are covered by a 30-day money-back guarantee.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif font-semibold text-2xl text-deep-sage">Refunds</h2>
            <p>If you buy a digital product and want a refund within the stated refund window, email us and we will help. Abuse, redistribution, or clearly fraudulent use may void that refund policy.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif font-semibold text-2xl text-deep-sage">Intellectual Property</h2>
            <p>All site content, quiz logic, design elements, and digital products are owned by Stop Emotional Eating unless otherwise stated. You may not copy, redistribute, or resell them without written permission.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif font-semibold text-2xl text-deep-sage">Limitation of Liability</h2>
            <p>Use this website and any related product at your own discretion. We are not responsible for outcomes, losses, or decisions that come from applying the information here. Always use your judgment and consult a qualified professional for medical or psychological concerns.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif font-semibold text-2xl text-deep-sage">Contact</h2>
            <p>Questions about these terms? Email hello@stopemotionaleating.guide.</p>
          </section>
        </div>
      </main>
    </div>
  );
}
