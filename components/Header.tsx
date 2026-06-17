"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";

const navItems = [
  { href: "/", label: "על הטיפול" },
  { href: "/al-hamtapel", label: "על המטפל" },
  { href: "/shaalot", label: "שאלות ותשובות" },
  { href: "/tzor-kesher", label: "צרו קשר" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-cream/95 backdrop-blur-sm border-b border-subtle">
      {/* Mobile header */}
      <div className="md:hidden flex items-center h-16 px-4 relative">
        <button
          onClick={() => setMenuOpen(true)}
          className="p-2 text-forest hover:text-mint transition-colors"
          aria-label="פתח תפריט"
          aria-expanded={menuOpen}
        >
          <Menu size={24} />
        </button>

        <div className="absolute left-1/2 -translate-x-1/2">
          <Link href="/" aria-label="עמוד הבית">
            <Logo size={64} />
          </Link>
        </div>
      </div>

      {/* Desktop header */}
      <div className="hidden md:flex items-center justify-between max-w-4xl mx-auto px-8 h-20">
        <nav>
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-forest hover:text-mint transition-colors font-medium text-base"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link href="/" aria-label="עמוד הבית">
          <Logo size={72} />
        </Link>
      </div>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
