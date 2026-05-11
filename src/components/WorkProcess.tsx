import React from 'react';
import styles from './WorkProcess.module.css';

const steps = [
    {
        number: '01',
        title: 'Strategy',
        desc: 'Based on the insights gathered, we develop a comprehensive strategy that outlines the goals.'
    },
    {
        number: '02',
        title: 'Planning',
        desc: 'We create a detailed plan including timelines, milestones, and resource allocation.'
    },
    {
        number: '03',
        title: 'Execution',
        desc: 'Our team starts working on the deliverables, ensuring high quality and adherence to deadlines.'
    },
    {
        number: '04',
        title: 'Launch',
        desc: 'We launch the project and monitor its performance to ensure everything runs smoothly.'
    }
];

export const WorkProcess = () => {
    return (
        <section className={styles.section}>
            <div className={`container ${styles.container}`}>
                <div className={styles.leftContent}>
                    <span className={styles.label}>How It Work</span>
                    <h2 className={styles.title}>How Yapoom Solutions Serves Enterprise Growth</h2>
                    <p className={styles.description}>
                        We follow a structured process to ensure successful project delivery and client satisfaction.
                    </p>
                </div>

                <div className={styles.steps}>
                    {steps.map((step, idx) => (
                        <div key={idx} className={styles.step}>
                            <span className={styles.stepNumber}>{step.number}</span>
                            <div className={styles.stepContent}>
                                <h4>{step.title}</h4>
                                <p>{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
