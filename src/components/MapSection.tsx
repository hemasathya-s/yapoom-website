import React from 'react';
import styles from './MapSection.module.css';

export const MapSection = () => {
    return (
        <div className={styles.section}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8274506563986!2d80.23028827484283!3d13.04230988727786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526754f6666663%3A0x400df7c39ab77600!2sT.%20Nagar%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1711431000000!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className={styles.mapFrame}
                title="Google Map Location"
            ></iframe>
        </div>
    );
};
