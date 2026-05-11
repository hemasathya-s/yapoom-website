import { Navbar } from "@/components/Navbar";
import { PageHero } from "@/components/PageHero";
import { Pricing } from "@/components/Pricing";
import { Footer } from "@/components/Footer";

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
