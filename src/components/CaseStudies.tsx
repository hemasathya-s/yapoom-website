import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { projects } from '@/data/projects';
import { ProjectCard } from './ProjectCard';
import Script from 'next/script';
import styles from './CaseStudies.module.css';

export const CaseStudies = () => {
    // Show first 3 projects
    const recentProjects = projects.slice(0, 3);

    const schema = {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": "Yapoom Enterprise Solutions",
        "image": "https://www.yapoomsolutions.com/hero-modern-team.png",
        "description": "Enterprise-grade cloud architecture, custom software development, and specialized telecom VoIP builds.",
        "brand": {
            "@type": "Brand",
            "name": "Yapoom Solutions"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "ratingCount": "124"
        }
    };

    return (
        <section className={styles.section} id="casestudies">
            <Script
                id="aggregate-rating-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <div className={`container ${styles.header}`}>
                <span className={styles.label}>View Our Latest Project</span>
                <h2 className={styles.title}>Our Latest Case Studies For Our Marketing Clients</h2>
            </div>

            <div className={`container`}>
                <div className={styles.grid}>
                    {recentProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

                <div className={styles.viewAllWrapper}>
                    <Link href="/projects" className={styles.viewAllButton}>
                        View All Projects <ArrowRight size={18} />
                    </Link>
                </div>
            </div>
        </section>
    );
};
