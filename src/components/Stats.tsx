import React from 'react';
import styles from './Stats.module.css';

const stats = [
    { value: "2425+", label: "Completed Deployments" },
    { value: "98.09%", label: "Customer Satisfied" },
    { value: "99.99%", label: "Uptime Achieved" },
    { value: "67+", label: "Global Awards" },
    { value: "23+", label: "Enterprise Partners" },
];

export const Stats = () => {
    return (
        <section className={styles.section}>
            <div className={`container ${styles.grid}`}>
                {stats.map((stat, index) => (
                    <div key={index} className={styles.statItem}>
                        <div className={styles.value}>{stat.value}</div>
                        <div className={styles.label}>{stat.label}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};
