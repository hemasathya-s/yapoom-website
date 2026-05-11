import { Navbar } from "@/components/Navbar";
import { PageHero } from "@/components/PageHero";
import { ServiceSidebar } from "@/components/ServiceSidebar";
import { ServiceContent } from "@/components/ServiceContent";
import { WorkProcess } from "@/components/WorkProcess";
import { Footer } from "@/components/Footer";
import { services } from "@/data/services";
import { notFound } from "next/navigation";
import styles from './styles.module.css';

// Generate static params for all services
export async function generateStaticParams() {
    return services.map((service) => ({
        slug: service.slug,
    }));
}

export default async function ServiceDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = services.find((s) => s.slug === slug);

    if (!service) {
        notFound();
    }

    return (
        <main>
            <Navbar />
            <PageHero title={service.title} currentPage={service.title} />

            <div className={styles.section}>
                <div className={`container ${styles.container}`}>
                    <div className={styles.sidebarColumn}>
                        <ServiceSidebar />
                    </div>
                    <div className={styles.contentColumn}>
                        <ServiceContent service={service} />
                    </div>
                </div>
            </div>

            <WorkProcess />
            <Footer />
        </main>
    );
}
