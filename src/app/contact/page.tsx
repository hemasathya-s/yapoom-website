import { Navbar } from "@/components/Navbar";
import { PageHero } from "@/components/PageHero";
import { ContactInfo } from "@/components/ContactInfo";
import { ContactForm } from "@/components/ContactForm";
import { MapSection } from "@/components/MapSection";
import { Footer } from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Get in touch with Yapoom Solutions to ignite your next big enterprise software project.",
    alternates: { canonical: "/contact" },
};

export default function ContactPage() {
    return (
        <main>
            <Navbar />
            <PageHero title="Contact Us" currentPage="Contact Us" />
            <ContactInfo />
            <ContactForm />
            <MapSection />
            <Footer />
        </main>
    );
}
