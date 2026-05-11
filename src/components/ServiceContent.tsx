import React from 'react';
import Image from 'next/image';
import { DollarSign, UserCheck } from 'lucide-react';
import { Service } from '@/data/services';
import styles from './ServiceContent.module.css';

interface ServiceContentProps {
    service: Service;
}

export const ServiceContent: React.FC<ServiceContentProps> = ({ service }) => {
    return (
        <div className={styles.container}>
            <div className={styles.mainImageWrapper}>
                <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className={styles.mainImage}
                    priority
                />
            </div>

            <span className={styles.label}>Service Details</span>

            <p className={styles.description}>
                {service.description}
            </p>

            <p className={styles.description}>
                {service.additionalText || service.description}
            </p>

            <div className={styles.features}>
                <div className={styles.featureItem}>
                    <h4>
                        <span className={styles.featureIcon}><DollarSign size={16} /></span>
                        Experience and Expertise
                    </h4>
                    <p>
                        Digital marketing agencies often run paid advertising campaigns
                        for themselves. This includes creating compelling ad.
                    </p>
                </div>

                <div className={styles.featureItem}>
                    <h4>
                        <span className={styles.featureIcon}><UserCheck size={16} /></span>
                        Customized Solutions
                    </h4>
                    <p>
                        Digital marketing agencies often run paid advertising campaigns
                        for themselves. This includes creating compelling ad.
                    </p>
                </div>
            </div>

            {/* Visual placeholder for the bottom image seen in screenshot */}
            <div className={styles.visualSection}>
                <Image
                    src="/hero-modern-team.png"
                    alt="Team working"
                    fill
                    style={{ objectFit: 'cover' }}
                />
            </div>
        </div>
    );
};
