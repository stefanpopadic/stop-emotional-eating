export function Footer() {
  return (
    <footer className="bg-soft-black text-white/60 py-16 px-6 md:px-12 font-sans text-[14px] leading-[1.6]">
      <div className="max-w-5xl mx-auto space-y-10">
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
            <a href="#" className="hover:text-white transition-colors cursor-pointer">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors cursor-pointer">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
