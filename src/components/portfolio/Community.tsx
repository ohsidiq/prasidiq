const items = [
  { role: "Content Creator & Campaign", org: "B'Exposure — BUMA Adaro News" },
  { role: "Volunteer Illustrator", org: "Amal Bergambar" },
  { role: "Former Treasurer", org: "HSE Jepara" },
  { role: "Former Secretary", org: "Forum Penyuluh Pertanian Parigi Moutong" },
];

export function Community() {
  return (
    <section
      id="community"
      aria-labelledby="comm-title"
      className="border-t border-rule bg-muted/40 py-20 md:py-28"
    >
      <div className="swiss-container">
        <header className="swiss-grid mb-14">
          <div className="col-span-full lg:col-span-6">
            <span className="mono-label text-secondary">§ 07 — Community</span>
            <h2
              id="comm-title"
              className="mt-4 text-4xl font-black tracking-[-0.03em] text-primary md:text-5xl"
            >
              Leadership &
              <br />
              Community.
            </h2>
          </div>
        </header>

        <ul className="grid grid-cols-1 border-t border-rule sm:grid-cols-2">
          {items.map((i, idx) => (
            <li
              key={i.org}
              className="flex flex-col justify-between gap-4 border-b border-rule p-6 md:p-8 sm:[&:nth-child(odd)]:border-r min-h-[160px]"
            >
              <span className="mono-label text-secondary">{String(idx + 1).padStart(2, "0")}</span>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  {i.role}
                </p>
                <p className="mt-2 text-lg font-medium text-foreground">{i.org}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
