import React from 'react';
import Image from 'next/image';
import { BadgeDollarSign, Users, ArrowRight } from 'lucide-react';
import styles from './Hero.module.css';
import { Button } from './Button';

export const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={`container ${styles.container}`}>
                <div className={styles.imageWrapper}>
                    <Image
                        src="/hero-team.png"
                        alt="Professional agency team"
                        width={600}
                        height={450}
                        className={styles.image}
                        priority
                    />
                </div>

                <div className={styles.content}>
                    <div className={styles.label}>About Us</div>

                    <h1 className={styles.title}>
                        Save Your Time And Money With Our Agencies
                    </h1>

                    <p className={styles.description}>
                        Digital marketing agencies often run paid advertising campaigns for themselves.
                        This includes creating compelling content and strategies.
                    </p>

                    <div className={styles.features}>
                        <div className={styles.feature}>
                            <div className={styles.iconWrapper}>
                                <BadgeDollarSign size={24} />
                            </div>
                            <div className={styles.featureContent}>
                                <h3>Experience and Expertise</h3>
                                <p>Digital marketing agencies often run paid advertising campaigns for themselves. This includes creating compelling ad.</p>
                            </div>
                        </div>

                        <div className={styles.feature}>
                            <div className={styles.iconWrapper}>
                                <Users size={24} />
                            </div>
                            <div className={styles.featureContent}>
                                <h3>Customized Solutions</h3>
                                <p>Digital marketing agencies often run paid advertising campaigns for themselves. This includes creating compelling ad.</p>
                            </div>
                        </div>
                    </div>

                    <div style={{ marginTop: '24px' }}>
                        <Button variant="secondary" icon={<ArrowRight size={18} />}>
                            More About Us
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};
