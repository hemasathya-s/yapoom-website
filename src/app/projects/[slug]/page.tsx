import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from "@/components/Navbar";
import { PageHero } from "@/components/PageHero";
import { Footer } from "@/components/Footer";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import styles from './styles.module.css';

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <main>
            <Navbar />
            <PageHero title="Project Details" currentPage="Project Details" />

            <section className={styles.section}>
                <div className={`container ${styles.container}`}>

                    <div className={styles.header}>
                        <span className={styles.category}>{project.category}</span>
                        <h1 className={styles.title}>{project.title}</h1>

                        <div className={styles.meta}>
                            <div className={styles.metaItem}>
                                <span className={styles.metaLabel}>Client:</span>
                                <span>{project.client}</span>
                            </div>
                            <div className={styles.metaItem}>
                                <span className={styles.metaLabel}>Date:</span>
                                <span>{project.date}</span>
                            </div>
                            <div className={styles.metaItem}>
                                <span className={styles.metaLabel}>Category:</span>
                                <span>{project.category}</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.mainImageWrapper}>
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className={styles.mainImage}
                            priority
                        />
                    </div>

                    <div className={styles.content}>
                        <div className={styles.contentBlock}>
                            <h3>Project Overview</h3>
                            <p>{project.description}</p>
                        </div>
                        <div>
                            <div className={styles.contentBlock}>
                                <h3>The Challenge</h3>
                                <p>{project.challenge}</p>
                            </div>
                            <div className={styles.contentBlock}>
                                <h3>The Solution</h3>
                                <p>{project.solution}</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.navigation}>
                        <Link href="/projects" className={styles.backLink}>Back to Projects</Link>
                    </div>

                </div>
            </section>

            <Footer />
        </main>
    );
}
