import React from 'react';
import Link from 'next/link';
import { Navbar } from "@/components/Navbar";
import { PageHero } from "@/components/PageHero";
import { Footer } from "@/components/Footer";
import { Services } from "@/components/Services";
import { FAQ } from "@/components/FAQ";

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }) {
    const { city } = await params;
    const decodedCity = decodeURIComponent(city).replace(/-/g, ' ');
    const capitalCity = decodedCity.charAt(0).toUpperCase() + decodedCity.slice(1);

    return {
        title: `Enterprise Cloud & Software Solutions in ${capitalCity} | Yapoom`,
        description: `Top-rated software engineering, ERP integrations, and cloud migration services located near ${capitalCity}. Deploy custom IT frameworks natively with Yapoom Solutions.`,
        alternates: { canonical: `/locations/${city}` }
    };
}

export default async function LocationPage({ params }: { params: Promise<{ city: string }> }) {
    const { city } = await params;
    const decodedCity = decodeURIComponent(city).replace(/-/g, ' ');
    const capitalCity = decodedCity.charAt(0).toUpperCase() + decodedCity.slice(1);

    return (
        <main>
            <Navbar />
            <article>
                <PageHero title={`Serving Enterprises In ${capitalCity}`} currentPage="Local Engineering" />

                <section style={{ padding: '80px 0', backgroundColor: 'var(--background)' }}>
                    <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                        <h2 style={{ fontSize: '32px', marginBottom: '20px', color: 'var(--primary)' }}>
                            Accelerating Business Growth In {capitalCity}
                        </h2>
                        <p style={{ fontSize: '18px', color: 'var(--text-main)', lineHeight: '1.8' }}>
                            Yapoom Solutions brings silicon-valley tier custom software development, VoIP telecom bridging, and localized hardware automation to the heart of {capitalCity}. Whether you are migrating core databases into a localized Kubernetes cluster or rolling out thousands of Cloud SIP endpoints across the region, our systems architects are standing by to audit your technical debt and formulate localized migration trajectories.
                        </p>
                    </div>
                </section>

                <Services />
                <FAQ />
            </article>
            <Footer />
        </main>
    );
}
