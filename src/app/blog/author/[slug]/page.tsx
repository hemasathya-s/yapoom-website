import React from 'react';
import Link from 'next/link';
import { Navbar } from "@/components/Navbar";
import { PageHero } from "@/components/PageHero";
import { Footer } from "@/components/Footer";
import { BlogCard } from "@/components/BlogCard";
import { blogs } from "@/data/blogs";
import styles from '../../styles.module.css';

export default async function AuthorPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const decodedAuthor = decodeURIComponent(slug).replace(/-/g, ' '); // simple slug decoder

    const filteredBlogs = blogs.filter(b => b.author.toLowerCase() === decodedAuthor.toLowerCase());

    return (
        <main>
            <Navbar />
            <PageHero title={`Posts by ${decodedAuthor}`} currentPage="Author Archive" />
            <section className={styles.section}>
                <div className="container">
                    <div className={styles.grid}>
                        {filteredBlogs.map((blog) => (
                            <BlogCard key={blog.id} post={blog} />
                        ))}
                        {filteredBlogs.length === 0 && (
                            <p style={{ color: 'var(--text-muted)' }}>No posts found for this author.</p>
                        )}
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
