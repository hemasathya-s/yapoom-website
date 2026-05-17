import Link from 'next/link';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import styles from "@/components/HeroModern.module.css";

export default function NotFound() {
    return (
        <main>
            <Navbar />
            <section style={{ height: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', backgroundColor: 'var(--background)' }}>
                <div>
                    <h1 style={{ fontSize: '120px', color: 'var(--primary)', marginBottom: '10px' }}>404</h1>
                    <h2 style={{ fontSize: '32px', marginBottom: '20px' }}>Page Not Found</h2>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '40px', maxWidth: '500px', margin: '0 auto 40px' }}>
                        The enterprise logic loop you were looking for doesn't seem to exist. It might have been moved or deleted.
                    </p>
                    <Link href="/">
                        <button className={styles.ctaButton} style={{ margin: '0 auto' }}>
                            Return to Homepage
                            <ArrowRight size={18} />
                        </button>
                    </Link>
                </div>
            </section>
            <Footer />
        </main>
    );
}
