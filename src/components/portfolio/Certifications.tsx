import { Reveal } from "./Reveal";

const certs = [
  { name: "First Operational Supervisor (POP)", issuer: "BNSP" },
  { name: "Training of Trainer Level 3", issuer: "BNSP" },
  { name: "Mining Safety Management System Implementation", issuer: "SMKP" },
  {
    name: "Internal Audit Integrated Management System",
    issuer: "ISO 9001 · 14001 · 45001",
  },
  { name: "Health & Safety Management System", issuer: "SMK3" },
  { name: "First Aid Officer Certification", issuer: "Kemnaker RI" },
  { name: "Occupational Health and Safety Expert", issuer: "AK3 Umum" },
];

export function Certifications() {
  return (
    <section
      id="certifications"
      aria-labelledby="cert-title"
      className="border-t border-rule bg-primary py-20 text-primary-foreground md:py-28"
    >
      <div className="swiss-container">
        <header className="mb-14">
          <span className="mono-label text-accent">§ 05 — Credentials</span>
          <h2
            id="cert-title"
            className="mt-4 text-4xl font-black tracking-[-0.03em] md:text-5xl"
          >
            Professional
            <br />
            Certifications.
          </h2>
        </header>

        <ul className="grid grid-cols-1 border-l border-t border-white/15 sm:grid-cols-2 lg:grid-cols-3">
          {certs.map((c, i) => (
            <Reveal
              as="li"
              key={c.name}
              delay={i * 50}
              className="flex flex-col justify-between gap-6 border-b border-r border-white/15 p-6 transition-colors hover:bg-white/5 md:p-8 min-h-[200px]"
            >
              <span className="mono-label text-accent">
                CERT / {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-lg font-semibold leading-snug md:text-xl">{c.name}</h3>
                <p className="mono-label mt-3 text-white/60">{c.issuer}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
