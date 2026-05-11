import React from 'react';
import styles from './ContactForm.module.css';

export const ContactForm = () => {
    return (
        <section className={styles.section}>
            <div className={`container ${styles.container}`}>
                <div className={styles.header}>
                    <span className={styles.label}>Contact Me</span>
                    <h2 className={styles.title}>Send Your Message</h2>
                </div>

                <form className={styles.form}>
                    <input type="text" placeholder="Your Name" className={styles.input} />
                    <input type="email" placeholder="Your Email" className={styles.input} />
                    <input type="text" placeholder="Your Subject" className={styles.input} />
                    <input type="tel" placeholder="Your Phone" className={styles.input} />
                    <textarea placeholder="Your Message" className={`${styles.textarea} ${styles.fullWidth}`}></textarea>

                    <div className={styles.buttonWrapper}>
                        <button type="submit" className={styles.button}>Send Your Message</button>
                    </div>
                </form>
            </div>
        </section>
    );
};
