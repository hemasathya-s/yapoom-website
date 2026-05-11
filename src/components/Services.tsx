import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { services } from '@/data/services';
import styles from './Services.module.css';

export const Services = () => {
    return (
        <section className={styles.section} id="services">
            <div className={`container ${styles.header}`}>
                <h2 className={styles.title}>What Services We Provide For Your Business</h2>
            </div>

            <div className={`container ${styles.grid}`}>
                {services.map((service) => (
                    <Link href={`/services/${service.slug}`} key={service.id} className={styles.cardLink}>
                        <div className={styles.card}>
                            <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                className={styles.cardImage}
                            />
                            <div className={styles.overlay}>
                                <span className={styles.number}>{service.id} {service.subtitle}</span>
                                <h3 className={styles.cardTitle}>{service.title}</h3>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};
