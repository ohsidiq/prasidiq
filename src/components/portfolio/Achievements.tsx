import { Reveal } from "./Reveal";

const items = [
  "Managed and delivered HSE training programs for more than 2,800 employees.",
  "Led KPLH mentoring and evaluation program for 38 contractor companies.",
  "Member of Safety Maturity Level development team achieving score 0.76 (Planned Level).",
  "Initiated SHE Digital Campaign Project with 95% employee understanding achievement.",
  "Contributed to SMKP audit improvement from 74.56% to 85.6%.",
  "Risk Assessment Team Member for project engineering and design initiatives.",
  "1st Place Poster Competition — Adaro Partner Companies (2022).",
  "Finalist Poster Competition — Indonesian Mining Safety Professional Association (2023 & 2024).",
];

export function Achievements() {
  return (
    <section id="work" aria-labelledby="ach-title" className="border-t border-rule py-20 md:py-28">
      <div className="swiss-container">
        <header className="swiss-grid mb-14 items-end">
          <div className="col-span-full lg:col-span-4">
            <span className="mono-label text-secondary">§ 02 — Work</span>
            <h2
              id="ach-title"
              className="mt-4 text-4xl font-black tracking-[-0.03em] text-primary md:text-5xl"
            >
              Selected
              <br />
              Achievements
            </h2>
          </div>
          <p className="col-span-full text-base leading-relaxed text-muted-foreground lg:col-span-5 lg:col-start-8">
            Measurable outcomes across mining, manufacturing, and power-plant operations — spanning
            training delivery, audit performance, and behavioral safety programs.
          </p>
        </header>

        <ul className="grid grid-cols-1 border-l border-t border-rule sm:grid-cols-2 lg:grid-cols-4">
          {items.map((text, i) => (
            <Reveal
              key={i}
              as="li"
              delay={i * 60}
              className="group relative flex flex-col justify-between border-b border-r border-rule p-6 transition-colors hover:bg-muted/60 md:p-8 min-h-[220px]"
            >
              <span className="mono-label text-secondary">{String(i + 1).padStart(2, "0")}</span>
              <p className="mt-10 text-base font-medium leading-snug text-primary md:text-[17px]">
                {text}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
