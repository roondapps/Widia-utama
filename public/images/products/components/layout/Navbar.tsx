"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { MobileNav } from "@/components/layout/MobileNav";
import { cn } from "@/lib/utils";

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/custom-order", label: "Custom Order" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/factory", label: "Factory" },
  { href: "/catalog", label: "Catalog" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b backdrop-blur transition-colors duration-300",
        scrolled
          ? "border-ink-700 bg-ink-900/95"
          : "border-transparent bg-ink-900/70"
      )}
    >
      <Container
        className={cn(
          "flex items-center justify-between transition-[height] duration-300",
          scrolled ? "h-16" : "h-20"
        )}
      >
        <Link
          href="/"
          className="font-display text-lg font-medium tracking-tight text-paper"
        >
          Widia Utama
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-paper-muted transition-colors hover:text-paper"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex">
          <ButtonLink href="/custom-order" variant="primary" size="md">
            Request a Quote
          </ButtonLink>
        </div>

        <MobileNav links={navLinks} />
      </Container>
    </header>
  );
}
