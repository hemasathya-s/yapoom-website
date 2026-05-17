import { Navbar } from "@/components/Navbar";
import { PageHero } from "@/components/PageHero";
import { Footer } from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description: "Read Yapoom Solutions' official privacy policy and data collection protocols.",
    alternates: { canonical: "/privacy" },
    robots: {
        index: false,
        follow: false
    }
};

export default function PrivacyPage() {
    return (
        <main>
            <Navbar />
            <article>
                <PageHero title="Privacy Policy" currentPage="Privacy Policy" />
                <section style={{ padding: '80px 0', backgroundColor: 'var(--background)' }}>
                    <div className="container" style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--text-main)', lineHeight: '1.8' }}>
                        <h2 style={{ fontSize: '28px', marginBottom: '20px', color: 'var(--primary)' }}>1. Information We Collect</h2>
                        <p style={{ marginBottom: '30px' }}>At Yapoom Solutions, we are committed to enterprise-grade data security. We collect standard telemetry data, cookie preferences, and direct inputs through our query models for the exclusive purpose of enhancing our cloud and software solutions.</p>

                        <h2 style={{ fontSize: '28px', marginBottom: '20px', color: 'var(--primary)' }}>2. How We Use Your Data</h2>
                        <p style={{ marginBottom: '30px' }}>Your data is never sold to third-party ad brokers. Telemetry and analytic inputs are strictly utilized for infrastructure optimization, load balancing on our bespoke Cloud architectures, and generating tailored enterprise software quotes.</p>

                        <h2 style={{ fontSize: '28px', marginBottom: '20px', color: 'var(--primary)' }}>3. GDPR & Cookie Compliance</h2>
                        <p>We respect international privacy laws including GDPR. You have the right to request deletion of any personally identifiable information submitted via our forms by contacting our systems administrators.</p>
                    </div>
                </section>
            </article>
            <Footer />
        </main>
    );
}
