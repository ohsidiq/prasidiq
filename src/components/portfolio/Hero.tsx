import portrait from "@/assets/portrait.jpg";

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-name" className="relative">
      <div className="swiss-container pt-10 pb-20 md:pt-16 md:pb-28 lg:pt-24 lg:pb-36">
        <div className="swiss-grid items-end">
          {/* Left content - 7 cols */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4">
              <span className="mono-label text-secondary">§ 01 — Introduction</span>
              <span className="h-px w-16 bg-rule" />
            </div>

            <h1
              id="hero-name"
              className="mt-8 font-black tracking-[-0.04em] text-primary"
              style={{ fontSize: "clamp(3.5rem, 10vw, 8.5rem)", lineHeight: 0.88 }}
            >
              SIDIQ
              <br />
              PRAYOGA<span className="text-secondary">.</span>
            </h1>

            <p className="mono-label mt-8 text-foreground">
              HSE System · Risk Management · Compliance · Training · Audit
            </p>

            <p className="mt-8 max-w-2xl text-xl font-medium leading-snug text-primary md:text-2xl lg:text-[1.7rem]">
              Building safer workplaces through systems, data, compliance, and human
              behavior.
            </p>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              Experienced HSE professional with expertise in Safety Management Systems,
              Risk Management, Mining Safety Compliance, Training Development, Internal
              Audit, and Digital Safety Campaigns.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#experience"
                className="inline-flex items-center gap-2 bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-secondary"
              >
                View Experience
                <span aria-hidden>→</span>
              </a>
              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center gap-2 border border-primary px-5 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                Download CV
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-transparent px-5 py-3 text-sm font-medium text-primary underline-offset-4 hover:underline"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Right portrait - 5 cols */}
          <div className="mt-12 lg:col-span-5 lg:mt-0">
            <figure className="relative">
              <div className="overflow-hidden bg-muted">
                <img
                  src={portrait}
                  alt="Portrait of Sidiq Prayoga"
                  width={800}
                  height={1024}
                  className="block w-full grayscale"
                />
              </div>
              <figcaption className="mt-3 flex items-center justify-between">
                <span className="mono-label text-muted-foreground">Fig. 01 / Portrait</span>
                <span className="mono-label text-muted-foreground">Jepara · ID</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>

      {/* Marquee strip */}
      <div className="border-y border-rule bg-muted/60">
        <div className="swiss-container flex items-center justify-between gap-6 py-4 overflow-hidden">
          {["SMKP", "ISO 45001", "ISO 14001", "ISO 9001", "SMK3", "BNSP POP", "TOT L3"].map(
            (t) => (
              <span key={t} className="mono-label whitespace-nowrap text-primary">
                ● {t}
              </span>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
