import React from 'react';
import Link from 'next/link';
import { Mail, Phone, Calendar, MapPin } from 'lucide-react';
import { services } from '@/data/services';
import styles from './ServiceSidebar.module.css';

export const ServiceSidebar = () => {
    return (
        <aside className={styles.sidebar}>
            <h3 className={styles.sectionTitle}>More Services</h3>
            <ul className={styles.list}>
                {services.map((s) => (
                    <li key={s.id}>
                        <Link href={`/services/${s.slug}`} className={styles.link}>
                            <span className={styles.dot}></span>
                            {s.title}
                        </Link>
                    </li>
                ))}
            </ul>

            <div className={styles.contactWidget}>
                <h3 className={styles.contactTitle}>Need Your Help?</h3>
                <div className={styles.contactItem}>
                    <Mail size={18} className={styles.icon} />
                    <span>kulan.info@gmail.com</span>
                </div>
                <div className={styles.contactItem}>
                    <Phone size={18} className={styles.icon} />
                    <span>+48 93939 0239</span>
                </div>
                <div className={styles.contactItem}>
                    <Phone size={18} className={styles.icon} />
                    <span>+84 83939 0237</span>
                </div>
                <div className={styles.contactItem}>
                    <Calendar size={18} className={styles.icon} />
                    <span>Mon - Fri 10:00 - 18:00</span>
                </div>
                <div className={styles.contactItem}>
                    <MapPin size={18} className={styles.icon} />
                    <span>Jiksons, TP06/90 NY, USA</span>
                </div>
            </div>
        </aside>
    );
};
