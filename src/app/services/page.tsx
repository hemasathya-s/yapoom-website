import { Navbar } from "@/components/Navbar";
import { PageHero } from "@/components/PageHero";
import { Services } from "@/components/Services";
import { WorkProcess } from "@/components/WorkProcess";
import { Stats } from "@/components/Stats";
import { Logos } from "@/components/Logos";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Services",
    description: "Expert engineering in cloud, telecom, IoT, and custom enterprise software development.",
    alternates: { canonical: "/services" },
};

export default function ServicesPage() {
    return (
        <main>
            <Navbar />
            <article>
                <PageHero title="Services" currentPage="Services" />
                <Services />
                <WorkProcess />
                <Stats />
                <FAQ />
                <Logos />
            </article>
            <Footer />
        </main>
    );
}
