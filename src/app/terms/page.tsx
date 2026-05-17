import { Navbar } from "@/components/Navbar";
import { PageHero } from "@/components/PageHero";
import { Footer } from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms & Conditions",
    description: "Official terms of service for Yapoom Solutions' enterprise technology engagements.",
    alternates: { canonical: "/terms" },
    robots: {
        index: false,
        follow: false
    }
};

export default function TermsPage() {
    return (
        <main>
            <Navbar />
            <article>
                <PageHero title="Terms & Conditions" currentPage="Terms" />
                <section style={{ padding: '80px 0', backgroundColor: 'var(--background)' }}>
                    <div className="container" style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--text-main)', lineHeight: '1.8' }}>
                        <h2 style={{ fontSize: '28px', marginBottom: '20px', color: 'var(--primary)' }}>1. Client Engagements</h2>
                        <p style={{ marginBottom: '30px' }}>By engaging Yapoom Solutions for custom software, telecom integrations, or hardware automations, you agree to the binding scope of work generated during our consultative period.</p>

                        <h2 style={{ fontSize: '28px', marginBottom: '20px', color: 'var(--primary)' }}>2. Infrastructure Liabilities</h2>
                        <p style={{ marginBottom: '30px' }}>While Yapoom Solutions guarantees up to 99.99% uptime on managed cloud systems, we are not directly liable for cascading structural failures caused by third-party legacy APIs intersecting our custom CRM builds unless explicitly covered in your SLA.</p>

                        <h2 style={{ fontSize: '28px', marginBottom: '20px', color: 'var(--primary)' }}>3. Intellectual Property</h2>
                        <p>Upon final delivery and total balance completion, the bespoke Codebase intellectual property is strictly transferred to the purchasing client, retaining zero licensing fees thereafter.</p>
                    </div>
                </section>
            </article>
            <Footer />
        </main>
    );
}
