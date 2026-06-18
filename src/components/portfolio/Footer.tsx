export function Footer() {
  return (
    <footer className="border-t border-rule bg-primary text-primary-foreground">
      <div className="swiss-container grid grid-cols-1 gap-6 py-10 md:grid-cols-3 md:items-center">
        <div>
          <p className="text-sm font-bold tracking-tight">SIDIQ PRAYOGA</p>
          <p className="mono-label mt-2 text-white/60">HSE · Risk · Compliance · Audit</p>
        </div>
        <p className="mono-label text-white/60 md:text-center">Building safer workplaces.</p>
        <p className="mono-label text-white/60 md:text-right">© 2026 All Rights Reserved.</p>
      </div>
    </footer>
  );
}
