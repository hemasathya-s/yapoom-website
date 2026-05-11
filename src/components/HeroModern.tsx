import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import styles from './HeroModern.module.css';

export const HeroModern = () => {
    return (
        <section className={styles.hero}>
            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <div className={styles.badge}>Enterprise Solutions</div>

                    <h1 className={styles.title}>
                        Innovative Tech & Cloud Solutions For Your Business
                    </h1>

                    <p className={styles.description}>
                        We specialize in delivering scalable custom software, native cloud infrastructures, and advanced telecom solutions tailored to elevate your business operations and fuel digital growth.
                    </p>

                    <div>
                        <Link href="?modal=query" scroll={false}>
                            <button className={styles.ctaButton}>
                                Schedule a Free Consultation
                                <ArrowRight size={18} />
                            </button>
                        </Link>
                    </div>
                </div>

                <div className={styles.imageWrapper}>
                    <Image
                        src="/hero-modern-team.png"
                        alt="Creative team brainstorming"
                        fill
                        className={styles.image}
                        priority
                        fetchPriority="high"
                    />
                </div>
            </div>
        </section>
    );
};
