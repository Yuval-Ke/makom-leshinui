import Logo from "./Logo";

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden py-16 md:py-24"
      aria-label="כותרת ראשית"
    >
      {/* Soft background gradient */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, #A8C5B520 0%, transparent 70%)",
        }}
      />

      {/* Decorative soft circles */}
      <div
        className="absolute top-4 left-4 w-48 h-48 rounded-full opacity-10 -z-10"
        style={{ background: "#6B9E8F" }}
      />
      <div
        className="absolute bottom-0 right-8 w-64 h-64 rounded-full opacity-5 -z-10"
        style={{ background: "#2D4A3E" }}
      />

      <div className="max-w-2xl mx-auto px-5 md:px-8 text-center">
        <div className="flex justify-center mb-6">
          <Logo size={120} />
        </div>

        <p className="text-lg md:text-xl text-charcoal leading-relaxed max-w-md mx-auto">
          גישה מקצועית, חמה ומבוססת מחקר לטיפול בהיפנוזה
        </p>
      </div>
    </section>
  );
}
