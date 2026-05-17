"use client";

import React, { useState, useEffect } from 'react';
import styles from './CookieBanner.module.css';
import Link from 'next/link';

export const CookieBanner = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if cookie consent exists in localStorage
        const consent = localStorage.getItem('yapoom_cookie_consent');
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('yapoom_cookie_consent', 'true');
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem('yapoom_cookie_consent', 'false');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className={styles.banner}>
            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <p>
                        We use cookies to optimize our enterprise solutions website and ensure you get the best experience. By continuing to use our site, you agree to our <Link href="/privacy" className={styles.link}>Privacy Policy</Link>.
                    </p>
                </div>
                <div className={styles.actions}>
                    <button onClick={handleDecline} className={styles.btnSecondary}>Decline</button>
                    <button onClick={handleAccept} className={styles.btnPrimary}>Accept Cookies</button>
                </div>
            </div>
        </div>
    );
};
