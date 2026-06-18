import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 bg-background/90 backdrop-blur-sm transition-colors ${
          scrolled || isOpen ? "border-b border-rule" : "border-b border-transparent"
        }`}
      >
        <nav
          aria-label="Primary"
          className="swiss-container flex items-center justify-between py-4 md:py-5"
        >
          <a
            href="#top"
            className="flex min-w-0 items-baseline gap-3"
            onClick={() => setIsOpen(false)}
          >
            <span className="mono-label text-primary">SP / 2026</span>
            <span className="truncate text-sm font-bold tracking-tight text-primary md:text-base">
              SIDIQ PRAYOGA
            </span>
          </a>
          <div className="flex shrink-0 items-center gap-2">
            <ul className="hidden items-center gap-6 md:flex">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="mono-label text-foreground transition-colors hover:text-secondary"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center border border-primary px-3 py-2 text-[11px] font-mono uppercase tracking-widest text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Download CV
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className="inline-flex h-8 w-8 items-center justify-center border border-primary text-primary hover:bg-primary hover:text-primary-foreground md:hidden"
            >
              {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 top-[57px] z-40 bg-background/98 md:hidden">
          <nav className="swiss-container flex flex-col pt-12">
            <span className="mono-label text-secondary mb-6 block">§ Navigation Menu</span>
            <ul className="flex flex-col gap-6">
              {links.map((l, i) => (
                <li key={l.href} className="border-b border-rule pb-4">
                  <a
                    href={l.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-baseline justify-between font-black tracking-[-0.03em] text-primary"
                    style={{ fontSize: "2rem" }}
                  >
                    <span>{l.label}</span>
                    <span className="mono-label text-secondary text-sm">0{i + 1}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}
