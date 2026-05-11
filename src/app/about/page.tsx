import { Navbar } from "@/components/Navbar";
import { PageHero } from "@/components/PageHero";
import { About } from "@/components/About";
import { Stats } from "@/components/Stats";
import { WorkProcess } from "@/components/WorkProcess";
import { Logos } from "@/components/Logos";
import { Footer } from "@/components/Footer";

export default function AboutPage() {
    return (
        <main>
            <Navbar />
            <PageHero title="About US" currentPage="About US" />
            <About />
            <WorkProcess />
            <Stats />
            <Logos />
            <Footer />
        </main>
    );
}
