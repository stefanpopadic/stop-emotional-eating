import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-soft-black text-white/60 py-16 px-6 md:px-12 font-sans text-[14px] leading-[1.6]">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Crisis Resources */}
        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
          <p className="text-white/80 font-medium mb-2">Need support?</p>
          <p className="mb-1">
            If you or someone you know is struggling with an eating disorder, help is available.
          </p>
          <p className="space-y-1">
            <span className="block"><strong className="text-white/80">NEDA Helpline:</strong> <a href="tel:1-800-931-2237" className="text-white/70 underline underline-offset-4 decoration-white/20 hover:text-white">1-800-931-2237</a> | <a href="sms:741741&body=NEDA" className="text-white/70 underline underline-offset-4 decoration-white/20 hover:text-white">Text "NEDA" to 741741</a></span>
            <span className="block"><strong className="text-white/80">988 Suicide & Crisis Lifeline:</strong> <a href="tel:988" className="text-white/70 underline underline-offset-4 decoration-white/20 hover:text-white">Call or text 988</a></span>
            <span className="block"><strong className="text-white/80">Crisis Text Line:</strong> <a href="sms:741741&body=HELLO" className="text-white/70 underline underline-offset-4 decoration-white/20 hover:text-white">Text HOME to 741741</a></span>
          </p>
        </div>

        <div>
          <p className="mb-4">
            <strong className="text-white/80">Disclaimer:</strong> This website and its content are for educational and informational purposes only. Nothing on this site is intended as a substitute for professional medical advice, diagnosis, or treatment. Always consult your physician, therapist, or other qualified health provider with questions about a medical or mental health condition. This is not therapy. This is not a treatment program for eating disorders. The information presented is based on published peer-reviewed research in nutritional psychology, neuroscience, and behavioral science.
          </p>
        </div>

        <div>
          <p>
            <strong className="text-white/80">Research Sources:</strong> All statistics and claims on this page are sourced from peer-reviewed research including: NIH National Study on Emotional Eating in U.S. Adults (PMC, 2021), British Journal of Psychology global meta-analysis (2025, n=21,237), Psychoneuroendocrinology HPA-axis study (2021), International Journal of Eating Disorders (2023), Journal of Psychosomatic Research time-of-day analysis (2023), Appetite EMA meta-analysis (2025), NICE Clinical Guidelines for Eating Disorders (NG69), and Emotion Regulation meta-analysis across eating pathology (Psychological Medicine, 2019). Full citations available upon request.
          </p>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; 2026 Stop Emotional Eating. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-white transition-colors cursor-pointer">Privacy Policy</Link>
            <span>|</span>
            <Link to="/terms" className="hover:text-white transition-colors cursor-pointer">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
