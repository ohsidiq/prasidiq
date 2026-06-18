const expertise = [
  "HSE Management Systems",
  "Mining Safety Management System (SMKP)",
  "Risk Assessment",
  "Compliance Monitoring",
  "Internal Audit",
  "Training Development",
  "Document Control",
  "Digital Safety Campaign",
  "Operational Safety Performance Analysis",
];

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="border-t border-rule bg-muted/40 py-20 md:py-28"
    >
      <div className="swiss-container">
        <div className="swiss-grid">
          <div className="col-span-full lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <span className="mono-label text-secondary">§ 03 — Profile</span>
              <h2
                id="about-title"
                className="mt-4 text-4xl font-black tracking-[-0.03em] text-primary md:text-5xl"
              >
                About.
              </h2>
            </div>
          </div>

          <div className="col-span-full mt-10 lg:col-span-7 lg:col-start-6 lg:mt-0">
            <p className="text-2xl font-medium leading-snug text-primary md:text-3xl md:leading-[1.2]">
              I am an HSE professional with practical experience in mining, power plant
              construction, and manufacturing industries.
            </p>

            <p className="mt-8 mono-label text-muted-foreground">Areas of Expertise</p>
            <ul className="mt-4 grid grid-cols-1 border-t border-rule sm:grid-cols-2">
              {expertise.map((e) => (
                <li
                  key={e}
                  className="flex items-center gap-3 border-b border-rule py-3 text-sm text-primary"
                >
                  <span className="mono-label text-secondary">+</span>
                  {e}
                </li>
              ))}
            </ul>

            <p className="mt-10 max-w-2xl border-l-2 border-secondary pl-5 text-base leading-relaxed text-muted-foreground">
              I believe sustainable safety performance is built through strong systems, competent
              people, and measurable accountability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
