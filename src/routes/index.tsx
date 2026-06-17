import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { Achievements } from "@/components/portfolio/Achievements";
import { About } from "@/components/portfolio/About";
import { Experience } from "@/components/portfolio/Experience";
import { Certifications } from "@/components/portfolio/Certifications";
import { Skills } from "@/components/portfolio/Skills";
import { Community } from "@/components/portfolio/Community";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sidiq Prayoga — HSE • Risk • Compliance" },
      {
        name: "description",
        content:
          "Portfolio of Sidiq Prayoga — HSE professional specializing in Safety Management Systems, Risk Management, Mining Safety Compliance, Audit, and Digital Safety Campaigns.",
      },
      { property: "og:title", content: "Sidiq Prayoga — HSE • Risk • Compliance" },
      {
        property: "og:description",
        content:
          "Building safer workplaces through systems, data, compliance, and human behavior.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Sidiq Prayoga",
          jobTitle: "HSE System, Training & Permit Officer",
          email: "mailto:prayogasidiq@gmail.com",
          telephone: "+62-821-9013-4979",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Jepara",
            addressRegion: "Central Java",
            addressCountry: "ID",
          },
          worksFor: { "@type": "Organization", name: "PT Bukit Makmur Mandiri Utama" },
          knowsAbout: [
            "HSE Management Systems",
            "SMKP",
            "ISO 45001",
            "Risk Assessment",
            "Internal Audit",
            "Safety Training",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Achievements />
        <About />
        <Experience />
        <Certifications />
        <Skills />
        <Community />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
