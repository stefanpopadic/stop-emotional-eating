import { Link } from 'react-router-dom';
import { Logo } from '../components/Logo';

export function Privacy() {
  return (
    <div className="min-h-screen bg-warm-linen flex flex-col">
      <header className="py-6 px-6 flex justify-center items-center border-b border-sand/20">
        <Link to="/" className="text-deep-sage hover:opacity-80 transition-opacity">
          <Logo height={28} />
        </Link>
      </header>

      <main className="flex-grow py-16 px-6">
        <div className="max-w-3xl mx-auto font-sans text-soft-black space-y-8">
          <h1 className="font-serif font-semibold text-5xl md:text-6xl text-deep-sage leading-[1.05]">Privacy Policy</h1>
          <p className="font-sans font-medium text-xs uppercase tracking-widest text-sand">Last updated: April 2026</p>

          <section className="space-y-4">
            <h2 className="font-serif font-semibold text-2xl text-deep-sage">What We Collect</h2>
            <p>When you take the quiz and enter your email address, we collect:</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Your email address</li>
              <li>Your quiz responses (anonymous, used to determine your result type)</li>
            </ul>
            <p>We do not collect names, phone numbers, payment information, or any other personal data through the quiz.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif font-semibold text-2xl text-deep-sage">How We Use Your Information</h2>
            <p>Your email address is used to:</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Deliver your personalized quiz results</li>
              <li>Send you science-backed strategies related to your emotional eating type</li>
              <li>Notify you about the guide and related resources</li>
            </ul>
            <p>We will never sell, rent, or share your email address with third parties for marketing purposes.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif font-semibold text-2xl text-deep-sage">Email Service</h2>
            <p>We use Emailit (emailit.com) to manage our email list. Your email is stored securely on their servers. You can review their privacy practices at emailit.com.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif font-semibold text-2xl text-deep-sage">Cookies & Analytics</h2>
            <p>This website does not use tracking cookies or third-party analytics. We may add privacy-respecting analytics in the future, and will update this policy accordingly.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif font-semibold text-2xl text-deep-sage">Unsubscribe</h2>
            <p>Every email we send includes an unsubscribe link. You can opt out at any time, and we will remove you from our email list within 48 hours.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif font-semibold text-2xl text-deep-sage">Contact</h2>
            <p>Questions about this privacy policy? Email us at hello@stopemotionaleating.guide.</p>
          </section>
        </div>
      </main>
    </div>
  );
}
