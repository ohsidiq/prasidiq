const categories = [
  {
    title: "Safety & Compliance",
    items: [
      "SMKP",
      "SMK3",
      "ISO 45001",
      "ISO 14001",
      "ISO 9001",
      "Compliance Monitoring",
      "Internal Audit",
    ],
  },
  {
    title: "Risk Management",
    items: [
      "Risk Assessment",
      "Risk Analysis",
      "Safety Performance Evaluation",
      "Incident Prevention",
    ],
  },
  {
    title: "Training & Development",
    items: [
      "Training Design",
      "Safety Campaign",
      "Public Speaking",
      "Facilitation",
      "Competency Development",
    ],
  },
  {
    title: "Digital & Creative",
    items: [
      "Microsoft Office",
      "Google Workspace",
      "Canva",
      "Adobe Creative Suite",
      "CorelDraw",
      "Krita",
      "Video Editing",
    ],
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="border-t border-rule py-20 md:py-28"
    >
      <div className="swiss-container">
        <header className="swiss-grid mb-14 items-end">
          <div className="col-span-full lg:col-span-6">
            <span className="mono-label text-secondary">§ 06 — Capabilities</span>
            <h2
              id="skills-title"
              className="mt-4 text-4xl font-black tracking-[-0.03em] text-primary md:text-5xl"
            >
              Core
              <br />
              Competencies.
            </h2>
          </div>
        </header>

        <div className="grid grid-cols-1 gap-px bg-rule sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat, i) => (
            <div key={cat.title} className="flex flex-col bg-background p-6 md:p-8">
              <div className="flex items-baseline justify-between">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
                  {cat.title}
                </h3>
                <span className="mono-label text-muted-foreground">0{i + 1}</span>
              </div>
              <ul className="mt-6 border-t border-rule">
                {cat.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center justify-between border-b border-rule py-3 text-sm text-foreground"
                  >
                    <span>{item}</span>
                    <span aria-hidden className="text-secondary">
                      ›
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
