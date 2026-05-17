import Link from 'next/link';
import { Navbar } from "@/components/Navbar";
import { PageHero } from "@/components/PageHero";
import { Footer } from "@/components/Footer";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "HTML Sitemap",
    description: "Navigate through the entire Yapoom Solutions enterprise architecture visually.",
    alternates: { canonical: "/sitemap" },
};

export default function HTMLSitemap() {
    return (
        <main>
            <Navbar />
            <article>
                <PageHero title="Website Sitemap" currentPage="Sitemap" />
                <section style={{ padding: '80px 0', backgroundColor: 'var(--background)' }}>
                    <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '28px', marginBottom: '20px', color: 'var(--primary)' }}>Core Pages</h2>
                        <ul style={{ listStyle: 'disc', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '18px', color: 'var(--text-main)', marginBottom: '40px' }}>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/services">Technical Services</Link></li>
                            <li><Link href="/projects">Enterprise Case Studies</Link></li>
                            <li><Link href="/pricing">Consultation Pricing</Link></li>
                            <li><Link href="/blog">Engineering Blog</Link></li>
                            <li><Link href="/contact">Contact Support</Link></li>
                        </ul>

                        <h2 style={{ fontSize: '28px', marginBottom: '20px', color: 'var(--primary)' }}>Legal & Trust</h2>
                        <ul style={{ listStyle: 'disc', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '18px', color: 'var(--text-main)' }}>
                            <li><Link href="/privacy">Privacy Policy</Link></li>
                            <li><Link href="/terms">Terms & Conditions</Link></li>
                        </ul>
                    </div>
                </section>
            </article>
            <Footer />
        </main>
    );
}
