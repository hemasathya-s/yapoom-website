import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Check } from 'lucide-react';
import Script from 'next/script';
import styles from './Pricing.module.css';

const plans = [
    {
        id: 'basic',
        title: 'Basic Plan',
        price: 'Custom',
        description: 'Ideal for initial technology assessments and pilot software builds.',
        features: [
            'Initial Architecture Review',
            'Cloud Deployment Framework',
            'Custom Software Prototypes',
            'Standard API Integrations',
            'Email support'
        ],
        buttonText: 'Get Quote',
        isPopular: false
    },
    {
        id: 'business',
        title: 'Business Plan',
        price: 'Custom',
        description: 'Our most popular setup for growing enterprises needing scalable infrastructure.',
        features: [
            'Dedicated Cloud Infrastructure',
            'Kubernetes & Microservices',
            'ERP & CRM Integrations',
            'Zero-Downtime Deployments',
            '24/7 Priority support'
        ],
        buttonText: 'Get Quote',
        isPopular: true
    },
    {
        id: 'premium',
        title: 'Enterprise Plan',
        price: 'Custom',
        description: 'Comprehensive transformation covering custom hardware, automation, and complete control.',
        features: [
            'Full Infrastructure Ownership',
            'Embedded Systems & IoT Integration',
            'On-premise Deployment Options',
            'Automated Data Migration',
            'Direct Dedicated Engineers'
        ],
        buttonText: 'Get Quote',
        isPopular: false
    }
];

export const Pricing = () => {
    const schemas = plans.map(plan => ({
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": plan.title,
        "description": plan.description,
        "brand": {
            "@type": "Brand",
            "name": "Yapoom Solutions"
        },
        "offers": {
            "@type": "Offer",
            "price": "Contact for pricing",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock"
        }
    }));

    return (
        <section className={styles.section}>
            <Script
                id="pricing-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
            />
            <div className={`container`}>
                <div className={styles.header}>
                    <span className={styles.label}>View Plan</span>
                    <h2 className={styles.title}>View Our Pricing Plan And Start Your Project</h2>
                </div>

                <div className={styles.grid}>
                    {plans.map((plan) => (
                        <div
                            key={plan.id}
                            className={`${styles.card} ${plan.isPopular ? styles.businessCard : ''}`}
                        >
                            <div className={styles.cardHeader}>
                                <h3>{plan.title}</h3>
                                <p className={`${styles.description} ${plan.isPopular ? styles.businessDescription : ''}`}>
                                    {plan.description}
                                </p>
                            </div>

                            <div className={styles.priceWrapper}>
                                <span className={styles.price}>{plan.price}</span>
                                <span className={styles.period}>/Month</span>
                            </div>

                            <Link href="?modal=query" scroll={false} style={{ width: '100%', textDecoration: 'none' }}>
                                <button
                                    className={`${styles.button} ${plan.isPopular ? styles.businessButton : styles.basicButton}`}
                                >
                                    {plan.buttonText} <ArrowUpRight size={18} />
                                </button>
                            </Link>

                            <span className={styles.featuresLabel}>What's Included In Plan:</span>
                            <ul className={styles.featureList}>
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className={styles.featureItem}>
                                        <Check className={styles.checkIcon} />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
