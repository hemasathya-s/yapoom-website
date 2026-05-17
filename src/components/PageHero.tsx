import React from 'react';
import styles from './PageHero.module.css';

import Link from 'next/link';
import Script from 'next/script';

interface PageHeroProps {
    title: string;
    currentPage: string;
}

export const PageHero: React.FC<PageHeroProps> = ({ title, currentPage }) => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "yapoom.in"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": currentPage,
                "item": `yapoom.in${currentPage.toLowerCase().replace(/\s+/g, '-')}`
            }
        ]
    };

    return (
        <section className={styles.hero}>
            <Script
                id={`breadcrumb-${currentPage.replace(/\s+/g, '-')}`}
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <div className={`container ${styles.container}`}>
                <div className={styles.breadcrumb}>
                    <Link href="/">Home</Link>
                    <span>/</span>
                    <span className={styles.active}>{currentPage}</span>
                </div>
                <h1 className={styles.title}>{title}</h1>
            </div>
        </section>
    );
};
