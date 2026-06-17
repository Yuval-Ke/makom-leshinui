"use client";

import { useState } from "react";

interface FormState {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl bg-sage/20 border border-sage/40 p-8 text-center">
        <p className="text-forest font-semibold text-lg mb-1">תודה רבה!</p>
        <p className="text-charcoal">הודעתך התקבלה. נחזור אליך בהקדם.</p>
      </div>
    );
  }

  const fieldClass =
    "w-full rounded-xl border border-subtle bg-white/60 px-4 py-3 text-forest placeholder-charcoal/40 focus:outline-none focus:ring-2 focus:ring-mint/40 focus:border-mint transition text-base";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-forest mb-1.5">
            שם
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="שם מלא"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-forest mb-1.5">
            טלפון
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="050-0000000"
            dir="ltr"
            className={fieldClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-forest mb-1.5">
          אימייל
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="your@email.com"
          dir="ltr"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-forest mb-1.5">
          נושא
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          value={form.subject}
          onChange={handleChange}
          placeholder="במה נוכל לעזור?"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-forest mb-1.5">
          ההודעה שלך
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="כתבו כאן את פנייתכם..."
          className={`${fieldClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="w-full sm:w-auto px-10 py-3 bg-forest text-cream font-semibold rounded-xl hover:bg-forest-mid transition-colors focus:outline-none focus:ring-2 focus:ring-forest/40 text-base"
      >
        שליחה
      </button>
    </form>
  );
}
