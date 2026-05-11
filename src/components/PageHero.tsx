import React from 'react';
import styles from './PageHero.module.css';

interface PageHeroProps {
    title: string;
    currentPage: string;
}

export const PageHero: React.FC<PageHeroProps> = ({ title, currentPage }) => {
    return (
        <section className={styles.hero}>
            <div className={`container ${styles.container}`}>
                <div className={styles.breadcrumb}>
                    <span>Home</span>
                    <span>/</span>
                    <span className={styles.active}>{currentPage}</span>
                </div>
                <h1 className={styles.title}>{title}</h1>
            </div>
        </section>
    );
};
