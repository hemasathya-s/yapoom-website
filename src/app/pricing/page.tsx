import { Navbar } from "@/components/Navbar";
import { PageHero } from "@/components/PageHero";
import { Pricing } from "@/components/Pricing";
import { Footer } from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pricing Plans",
    description: "Transparent pricing parameters for our professional technology consulting and bespoke software builds.",
    alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
    return (
        <main>
            <Navbar />
            <PageHero title="Pricing Plan" currentPage="Pricing" />
            <Pricing />
            <Footer />
        </main>
    );
}
