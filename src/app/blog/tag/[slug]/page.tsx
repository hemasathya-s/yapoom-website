import React from 'react';
import Link from 'next/link';
import { Navbar } from "@/components/Navbar";
import { PageHero } from "@/components/PageHero";
import { Footer } from "@/components/Footer";
import { BlogCard } from "@/components/BlogCard";
import { blogs } from "@/data/blogs";
import styles from '../../styles.module.css';

export default async function TagPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    // Simulate tag mapping (our current mock has categories, but works the same)
    const decodedTag = decodeURIComponent(slug).replace(/-/g, ' ');

    const filteredBlogs = blogs.filter(b =>
        b.content.toLowerCase().includes(decodedTag.toLowerCase()) ||
        b.title.toLowerCase().includes(decodedTag.toLowerCase())
    );

    return (
        <main>
            <Navbar />
            <PageHero title={`Tag: #${decodedTag}`} currentPage="Tag Archive" />
            <section className={styles.section}>
                <div className="container">
                    <div className={styles.grid}>
                        {filteredBlogs.map((blog) => (
                            <BlogCard key={blog.id} post={blog} />
                        ))}
                        {filteredBlogs.length === 0 && (
                            <p style={{ color: 'var(--text-muted)' }}>No posts found for this tag.</p>
                        )}
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
