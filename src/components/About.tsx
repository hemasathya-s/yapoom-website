import React from 'react';
import Image from 'next/image';
import { Check, Trophy } from 'lucide-react';
import styles from './About.module.css';

export const About = () => {
    return (
        <section className={styles.section} id="about">
            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <span className={styles.label}>Why Choose Yapoom Solutions</span>
                    <h2 className={styles.title}>Empowering Your Business With Robust Custom Technology</h2>
                    <p className={styles.description}>
                        We provide specialized software engineering, enterprise CRM solutions, and high-performance cloud infrastructure to help modern organizations scale efficiently.
                    </p>

                    <div className={styles.awardBox}>
                        <Trophy size={40} color="var(--white)" />
                        <div className={styles.awardText}>
                            <h4>Enterprise Excellence</h4>
                            <span>Delivering Impact</span>
                        </div>
                        {/* Duplicate for visual match if needed, or stick to one clean one */}
                    </div>

                    <div className={styles.checklist}>
                        <div className={styles.checkItem}>
                            <Check size={18} className={styles.checkIcon} />
                            <p className={styles.checkText}>
                                Scalable custom software development built to match your unique business logic and expansion trajectory.
                            </p>
                        </div>
                        <div className={styles.checkItem}>
                            <Check size={18} className={styles.checkIcon} />
                            <p className={styles.checkText}>
                                Comprehensive cloud architecture and specialized enterprise integrations that drive efficiency and absolute data security.
                            </p>
                        </div>
                    </div>
                </div>

                <div className={styles.imageWrapper}>
                    <div className={styles.imageInner}>
                        <Image
                            src="/about-team.png"
                            alt="Team collaboration"
                            fill
                            className={styles.image}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
