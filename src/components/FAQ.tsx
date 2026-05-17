"use client";

import React, { useState } from 'react';
import Script from 'next/script';
import { Plus, Minus } from 'lucide-react';
import styles from './FAQ.module.css';

const faqs = [
    {
        question: "How long does a custom enterprise software build typically take?",
        answer: "Depending on the complexity, a custom software solution built by Yapoom Solutions takes anywhere from 3 to 9 months, including architecture planning, development, and rigorous QA testing."
    },
    {
        question: "What are the benefits of Cloud SIP over legacy PBX?",
        answer: "Cloud SIP dramatically reduces hardware maintenance costs, provides global scalability without physical lines, and ensures significantly higher uptime and call clarity via centralized digital routing."
    },
    {
        question: "Can you manage our existing AWS or GCP infrastructure?",
        answer: "Yes, our certified cloud engineers can audit, optimize, and manage your current public cloud infrastructure, or help you migrate to a more cost-effective native private cloud architecture."
    },
    {
        question: "Do you offer post-deployment support and monitoring?",
        answer: "Absolutely. We offer customized 24/7 Service Level Agreements (SLAs) for all our enterprise deployments to guarantee 99.99% uptime and immediate incident response."
    }
];

export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map((faq) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <section className={styles.section}>
            {/* FAQ Schema for SEO Rich Snippets */}
            <Script
                id="faq-schema"
                type="application/ld+json"
                strategy="beforeInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />

            <div className={`container ${styles.container}`}>
                <div className={styles.header}>
                    <span className={styles.label}>Frequently Asked Questions</span>
                    <h2 className={styles.title}>Answers To Common Queries</h2>
                </div>

                <div className={styles.accordion}>
                    {faqs.map((faq, idx) => (
                        <div
                            key={idx}
                            className={`${styles.item} ${openIndex === idx ? styles.active : ''}`}
                            onClick={() => setOpenIndex(idx === openIndex ? null : idx)}
                        >
                            <div className={styles.questionWrapper}>
                                <h3>{faq.question}</h3>
                                {openIndex === idx ? <Minus className={styles.icon} /> : <Plus className={styles.icon} />}
                            </div>
                            <div className={styles.answerWrapper}>
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
