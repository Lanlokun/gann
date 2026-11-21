
import type { Metadata } from "next";

import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactInformation from "@/components/contact/ContactInformation";
import CollaborationSection from "@/components/contact/CollaborationSection";
import ContactAreas from "@/components/contact/ContactAreas";

export const metadata: Metadata = {
  title: "Contact | GANN",
  description:
    "Get in touch with The Gambia Neuroscience Network. Connect with us about research, training, collaborations, partnerships, and community involvement.",
};

export default function ContactPage() {
  return (
    <main>
      <ContactHero />

      <section className="bg-white py-20 lg:py-28">
        <div className="container-main">
          <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <ContactForm />

            <div className="lg:border-l lg:border-slate-200 lg:pl-14">
              <ContactInformation />
            </div>
          </div>
        </div>
      </section>

      <CollaborationSection />
      <ContactAreas />
    </main>
  );
}
