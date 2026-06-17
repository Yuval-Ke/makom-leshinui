"use client";

import { useState } from "react";
import { ChevronLeft } from "lucide-react";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export default function Accordion({ title, children, icon }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-subtle rounded-2xl overflow-hidden bg-cream">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className="w-full flex items-center gap-3 px-5 py-4 text-right hover:bg-sage/10 transition-colors cursor-pointer"
      >
        {/* Icon — right side in RTL (start) */}
        {icon && (
          <span className="text-mint flex-shrink-0" aria-hidden="true">
            {icon}
          </span>
        )}

        <span className="flex-1 text-base font-semibold text-forest text-right">
          {title}
        </span>

        {/* Chevron — left side in RTL (end) */}
        <ChevronLeft
          size={18}
          className={`flex-shrink-0 text-mint transition-transform duration-300 ${
            isOpen ? "-rotate-90" : ""
          }`}
          aria-hidden="true"
        />
      </button>

      {/* Animated content area */}
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-5 pb-5 pt-1 text-charcoal leading-relaxed text-base border-t border-subtle">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
