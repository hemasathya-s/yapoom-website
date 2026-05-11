import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import styles from './ContactInfo.module.css';

export const ContactInfo = () => {
    return (
        <section className={styles.section}>
            <div className={`container ${styles.grid}`}>
                <div className={styles.card}>
                    <div className={styles.iconWrapper}>
                        <Mail size={24} />
                    </div>
                    <div className={styles.content}>
                        <h4>Email Address</h4>
                        <p>info@yapoom.in</p>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.iconWrapper}>
                        <MapPin size={24} />
                    </div>
                    <div className={styles.content}>
                        <h4>Our Location</h4>
                        <p>T.Nagar,</p>
                        <p>Chennai, Tamil Nadu</p>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.iconWrapper}>
                        <Phone size={24} />
                    </div>
                    <div className={styles.content}>
                        <h4>Phone Number</h4>
                        <p>+91 92086 60866 </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
