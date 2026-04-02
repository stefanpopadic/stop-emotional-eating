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
          <h1 className="font-serif font-semibold text-4xl text-deep-sage">Terms of Service</h1>
          <p className="text-sm text-sand">Last updated: April 2026</p>

          <section className="space-y-4">
            <h2 className="font-semibold text-xl text-deep-sage">Educational Content Only</h2>
            <p>All content on stopemotionaleating.guide is for educational and informational purposes only. Nothing on this website constitutes medical advice, psychological treatment, or a substitute for professional help.</p>
            <p>This is not therapy. This is not a treatment program for eating disorders. If you are struggling with an eating disorder, please contact the NEDA Helpline at 1-800-931-2237 or text "NEDA" to 741741.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-semibold text-xl text-deep-sage">Quiz & Results</h2>
            <p>The emotional eating quiz is an educational tool based on published peer-reviewed research. Your result type is not a diagnosis. It is meant to help you understand patterns and explore strategies based on behavioral science.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-semibold text-xl text-deep-sage">Digital Products</h2>
            <p>Digital products purchased through this website (guides, trackers, audio content) are delivered electronically. All sales are processed through Gumroad. Refund requests are handled according to Gumroad's refund policy, with a 30-day money-back guarantee on all products.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-semibold text-xl text-deep-sage">Intellectual Property</h2>
            <p>All content on this website — including text, design, quiz logic, and digital products — is owned by Stop Emotional Eating and protected by copyright. You may not reproduce, distribute, or resell any content without written permission.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-semibold text-xl text-deep-sage">Limitation of Liability</h2>
            <p>We are not responsible for any outcomes resulting from using the information on this website or in our digital products. Use all content at your own discretion and always consult a qualified professional for medical or psychological concerns.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-semibold text-xl text-deep-sage">Contact</h2>
            <p>Questions about these terms? Email us at hello@stopemotionaleating.guide.</p>
          </section>
        </div>
      </main>
    </div>
  );
}
