import { Navbar } from "@/components/Navbar";
import { PageHero } from "@/components/PageHero";
import { Services } from "@/components/Services";
import { WorkProcess } from "@/components/WorkProcess";
import { Stats } from "@/components/Stats";
import { Logos } from "@/components/Logos";
import { Footer } from "@/components/Footer";

export default function ServicesPage() {
    return (
        <main>
            <Navbar />
            <PageHero title="Services" currentPage="Services" />
            <Services />
            <WorkProcess />
            <Stats />
            <Logos />
            <Footer />
        </main>
    );
}
