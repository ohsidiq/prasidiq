import { Reveal } from "./Reveal";

const roles = [
  {
    company: "PT Bukit Makmur Mandiri Utama (BUMA)",
    title: "Jr. Officer — SHE System, Training & Permit",
    period: "2021 — Present",
    highlights: [
      "KPLH evaluation and mentoring for 38 contractors",
      "Training management for 2,800+ employees",
      "Safety Maturity Level development",
      "Digital SHE Campaign implementation",
      "Risk Management Assessment Team",
      "SMKP audit performance improvement",
      "Safety accountability monitoring",
    ],
  },
  {
    company: "PT Nice Resources Teknindo",
    title: "Safety Officer",
    period: "2019 — 2021",
    highlights: [
      "HSE objectives and program implementation",
      "Safety induction and training",
      "Inspection and observation management",
      "HSE reporting and documentation",
    ],
  },
  {
    company: "PT Hwa Seung Indonesia",
    title: "HSE Staff — Social Environment Affairs",
    period: "2016 — 2018",
    highlights: [
      "Risk assessments",
      "Procedure development",
      "P2K3 implementation",
      "Competency and certification management",
      "Internal safety audits",
    ],
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="exp-title"
      className="border-t border-rule py-20 md:py-28"
    >
      <div className="swiss-container">
        <header className="swiss-grid mb-14 items-end">
          <div className="lg:col-span-6">
            <span className="mono-label text-secondary">§ 04 — Career</span>
            <h2
              id="exp-title"
              className="mt-4 text-4xl font-black tracking-[-0.03em] text-primary md:text-5xl"
            >
              Professional
              <br />
              Experience.
            </h2>
          </div>
          <p className="mono-label lg:col-span-3 lg:col-start-10 text-muted-foreground">
            2016 — Present · 3 Companies
          </p>
        </header>

        <ol className="border-t border-rule">
          {roles.map((r, i) => (
            <Reveal
              as="li"
              key={r.company}
              delay={i * 80}
              className="grid grid-cols-1 gap-6 border-b border-rule py-10 md:grid-cols-12 md:gap-8 md:py-14"
            >
              <div className="md:col-span-4">
                <span className="mono-label text-secondary">{r.period}</span>
                <p className="mt-3 text-sm font-semibold uppercase tracking-wider text-primary">
                  {String(i + 1).padStart(2, "0")} / {r.company}
                </p>
              </div>
              <div className="md:col-span-8">
                <h3 className="text-2xl font-bold tracking-tight text-primary md:text-3xl">
                  {r.title}
                </h3>
                <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
                  {r.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-2 h-px w-3 shrink-0 bg-secondary" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
