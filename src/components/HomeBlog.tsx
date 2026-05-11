import React from 'react';
import { blogs } from '@/data/blogs';
import { BlogCard } from './BlogCard';
import styles from './HomeBlog.module.css';

export const HomeBlog = () => {
    const recentBlogs = blogs.slice(0, 3);

    return (
        <section className={styles.section}>
            <div className={`container ${styles.header}`}>
                <span className={styles.label}>Our Blog</span>
                <h2 className={styles.title}>Latest News & Articles</h2>
            </div>

            <div className={`container ${styles.grid}`}>
                {recentBlogs.map((blog) => (
                    <BlogCard key={blog.id} post={blog} />
                ))}
            </div>
        </section>
    );
};
