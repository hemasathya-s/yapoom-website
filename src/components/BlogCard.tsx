import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';
import { BlogPost } from '@/data/blogs';
import styles from './BlogCard.module.css';

interface BlogCardProps {
    post: BlogPost;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
    return (
        <article className={styles.card}>
            <div className={styles.imageWrapper}>
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className={styles.image}
                />
            </div>
            <div className={styles.content}>
                <div className={styles.meta}>
                    <span className={styles.category}>{post.category}</span>
                    <span className={styles.date}>{post.date}</span>
                </div>
                <h3 className={styles.title}>{post.title}</h3>
                <p className={styles.excerpt}>{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className={styles.link}>
                    Read More <span className="sr-only">about {post.title}</span> <ArrowRight size={16} />
                </Link>
            </div>
        </article>
    );
};
