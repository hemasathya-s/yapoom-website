"use client";
import React, { useEffect, Suspense } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { X } from 'lucide-react';
import styles from './QueryModal.module.css';

const ModalBase = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();
    const isOpen = searchParams.get('modal') === 'query';

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    if (!isOpen) return null;

    const close = () => {
        const params = new URLSearchParams(searchParams.toString());
        params.delete('modal');
        const newSearch = params.toString();
        const query = newSearch ? `?${newSearch}` : '';
        router.push(`${pathname}${query}`, { scroll: false });
    };

    return (
        <div className={styles.overlay} onClick={close}>
            <div className={styles.modal} onClick={e => e.stopPropagation()}>
                <button className={styles.closeBtn} onClick={close}><X /></button>
                <h2>Send Your Query</h2>
                <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                    <input type="text" placeholder="Your Name" className={styles.input} />
                    <input type="email" placeholder="Your Email" className={styles.input} />
                    <input type="tel" placeholder="Your Phone" className={styles.input} />
                    <textarea placeholder="Your Requirement" className={styles.textarea}></textarea>
                    <button type="submit" className={styles.submitBtn}>Submit</button>
                </form>
            </div>
        </div>
    );
};

export const QueryModal = () => (
    <Suspense fallback={null}>
        <ModalBase />
    </Suspense>
);
