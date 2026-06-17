import { useEffect, useState } from "react";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-background/90 backdrop-blur-sm transition-colors ${
        scrolled ? "border-b border-rule" : "border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="swiss-container grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-4 md:py-5"
      >
        <a href="#top" className="flex min-w-0 items-baseline gap-3">
          <span className="mono-label text-primary">SP / 2026</span>
          <span className="truncate text-sm font-bold tracking-tight text-primary md:text-base">
            SIDIQ PRAYOGA
          </span>
        </a>
        <div className="flex shrink-0 items-center gap-1 sm:gap-2">
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
            className="ml-2 inline-flex items-center border border-primary px-3 py-2 text-[11px] font-mono uppercase tracking-widest text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Download CV
          </a>
        </div>
      </nav>
    </header>
  );
}
