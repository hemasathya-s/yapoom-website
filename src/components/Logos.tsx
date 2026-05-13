// components/Logos/Logos.jsx

import Image from 'next/image';
import styles from './Logos.module.css';




const logos = [
    '/client-logos/akc-logo.svg',
    '/client-logos/bmc-logo.svg',
    '/client-logos/ftdc-logo.svg',
    '/client-logos/itfixer-logo.svg',
    '/client-logos/itfixer199-logo.svg',
    '/client-logos/omsritara-logo.svg',
    '/client-logos/sportims-logo.svg',
    '/client-logos/tnssca-logo.svg',
];

export function Logos() {
    return (
        <section className={styles.section}>
            <div className={styles.marquee}>
                <div className={styles.track}>
                    {[...logos, ...logos].map((logo, index) => (
                        <div key={index} className={styles.logoItem}>
                            <Image
                                src={logo}
                                alt="Client Logo"
                                width={140}
                                height={50}
                                className={styles.logo}
                                loading="lazy"
                                unoptimized={false}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// import React from 'react';
// import styles from './Logos.module.css';

// export const Logos = () => {
//     return (
//         <section className={styles.section}>
//             <div className={`container ${styles.container}`}>
//                 <span className={styles.logoItem}>MINIMAL</span>
//                 <span className={styles.logoItem} style={{ fontFamily: 'serif', fontStyle: 'italic', textTransform: 'none' }}>Family Restaurant</span>
//                 <span className={styles.logoItem}>VINTAGE</span>
//                 <span className={styles.logoItem}>VINTAGE</span>
//                 <span className={styles.logoItem} style={{ border: '1px solid var(--text-main)', padding: '4px 12px' }}>ESTLE VOGEL</span>
//                 <span className={styles.logoItem}>MINIMAL</span>
//             </div>
//         </section>
//     );
// };
