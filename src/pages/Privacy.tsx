import { Link } from 'react-router-dom';
import { Logo } from '../components/Logo';

export function Privacy() {
  return (
    <div className="min-h-screen bg-warm-linen flex flex-col">
      <header className="py-6 px-6 flex justify-center items-center border-b border-sand/20">
        <Link to="/" className="text-deep-sage hover:opacity-80 transition-opacity">
          <Logo height={39} />
        </Link>
      </header>

      <main className="flex-grow py-16 px-6">
        <div className="max-w-3xl mx-auto font-sans text-soft-black space-y-8">
          <h1 className="font-serif font-semibold text-5xl md:text-6xl text-deep-sage leading-[1.05]">Privacy Policy</h1>
          <p className="font-sans font-medium text-xs uppercase tracking-widest text-sand">Last updated: April 2026</p>

          <section className="space-y-4">
            <h2 className="font-serif font-semibold text-2xl text-deep-sage">Plain-English Summary</h2>
            <p>We collect the information you give us through the quiz, mainly your email address and your quiz answers. We use that information to show your results, email you helpful follow-up content, and improve the experience over time.</p>
            <p>We do not sell your personal information.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif font-semibold text-2xl text-deep-sage">What We Collect</h2>
            <p>When you take the quiz or join the email list, we may collect:</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Your email address</li>
              <li>Your first name, if you choose to provide it</li>
              <li>Your quiz responses, which help determine your result type</li>
            </ul>
            <p>We do not ask for phone numbers through the quiz, and we do not store payment card details on this site.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif font-semibold text-2xl text-deep-sage">How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Show and email your quiz result</li>
              <li>Send practical emails related to emotional eating, cravings, and our digital products</li>
              <li>Improve our quiz, emails, and site experience</li>
            </ul>
            <p>We do not sell or rent your information to other companies for their marketing.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif font-semibold text-2xl text-deep-sage">Email Service</h2>
            <p>We use Emailit to manage our email list and deliver quiz follow-up emails. That means your email and basic subscriber data may be stored on their systems so we can communicate with you.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif font-semibold text-2xl text-deep-sage">Cookies & Analytics</h2>
            <p>We do not currently use heavy tracking or ad-tech style cookies on this site. If that changes, we will update this page.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif font-semibold text-2xl text-deep-sage">Your Choices</h2>
            <p>Every email we send includes an unsubscribe link. You can opt out at any time.</p>
            <p>If you want us to delete your information or have a privacy question, email us and we will help.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif font-semibold text-2xl text-deep-sage">Contact</h2>
            <p>Questions about this privacy policy? Email hello@stopemotionaleating.guide.</p>
          </section>
        </div>
      </main>
    </div>
  );
}
