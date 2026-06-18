const details = [
  { label: "Phone", value: "0821-9013-4979", href: "tel:+6282190134979" },
  { label: "Email", value: "prayogasidiq@gmail.com", href: "mailto:prayogasidiq@gmail.com" },
  { label: "Location", value: "Jepara, Central Java, Indonesia" },
];

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
  { label: "Email", href: "mailto:prayogasidiq@gmail.com" },
  { label: "WhatsApp", href: "https://wa.me/6282190134979" },
];

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="border-t border-rule py-20 md:py-32"
    >
      <div className="swiss-container">
        <div className="swiss-grid items-start">
          <div className="col-span-full lg:col-span-8">
            <span className="mono-label text-secondary">§ 08 — Contact</span>
            <h2
              id="contact-title"
              className="mt-6 font-black tracking-[-0.04em] text-primary"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)", lineHeight: 0.95 }}
            >
              Let's build safer
              <br />
              workplaces<span className="text-secondary">.</span>
            </h2>
          </div>
        </div>

        <div className="swiss-grid mt-16">
          <dl className="col-span-full lg:col-span-7 border-t border-rule">
            {details.map((d) => (
              <div
                key={d.label}
                className="grid grid-cols-[120px_1fr] items-baseline gap-4 border-b border-rule py-5"
              >
                <dt className="mono-label text-muted-foreground">{d.label}</dt>
                <dd className="text-lg font-medium text-primary md:text-xl">
                  {d.href ? (
                    <a href={d.href} className="underline-offset-4 hover:underline">
                      {d.value}
                    </a>
                  ) : (
                    d.value
                  )}
                </dd>
              </div>
            ))}
          </dl>

          <div className="col-span-full mt-10 lg:col-span-4 lg:col-start-9 lg:mt-0">
            <span className="mono-label text-muted-foreground">Connect</span>
            <ul className="mt-4 border-t border-rule">
              {socials.map((s) => (
                <li key={s.label} className="border-b border-rule">
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between py-5 text-lg font-medium text-primary"
                  >
                    <span>{s.label}</span>
                    <span
                      aria-hidden
                      className="text-secondary transition-transform group-hover:translate-x-1"
                    >
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
