import { Navbar } from "@/components/Navbar";
import { PageHero } from "@/components/PageHero";
import { About } from "@/components/About";
import { Stats } from "@/components/Stats";
import { WorkProcess } from "@/components/WorkProcess";
import { Logos } from "@/components/Logos";
import { Footer } from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us",
    description: "Learn more about Yapoom Solutions and our mission to provide scalable enterprise tech architectures.",
    alternates: { canonical: "/about" },
};

export default function AboutPage() {
    return (
        <main>
            <Navbar />
            <article>
                <PageHero title="About US" currentPage="About US" />
                <About />
                <WorkProcess />
                <Stats />
                <Logos />
            </article>
            <Footer />
        </main>
    );
}
