import Logo from "./Logo";

export default function HeroSection() {
  return (
    <section className="py-20 md:py-28 border-b border-border" aria-label="כותרת ראשית">
      <div className="max-w-2xl mx-auto px-6 md:px-8 text-center">
        <div className="flex justify-center mb-8">
          <Logo size={110} />
        </div>
        <p className="text-base md:text-lg text-muted-fg leading-relaxed max-w-sm mx-auto">
          גישה מקצועית ומבוססת מחקר לטיפול בהיפנוזה
        </p>
      </div>
    </section>
  );
}
