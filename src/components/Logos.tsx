import React from 'react';
import styles from './Logos.module.css';

export const Logos = () => {
    return (
        <section className={styles.section}>
            <div className={`container ${styles.container}`}>
                <span className={styles.logoItem}>MINIMAL</span>
                <span className={styles.logoItem} style={{ fontFamily: 'serif', fontStyle: 'italic', textTransform: 'none' }}>Family Restaurant</span>
                <span className={styles.logoItem}>VINTAGE</span>
                <span className={styles.logoItem}>VINTAGE</span>
                <span className={styles.logoItem} style={{ border: '1px solid var(--text-main)', padding: '4px 12px' }}>ESTLE VOGEL</span>
                <span className={styles.logoItem}>MINIMAL</span>
            </div>
        </section>
    );
};
