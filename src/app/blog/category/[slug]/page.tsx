import React from 'react';
import Link from 'next/link';
import { Navbar } from "@/components/Navbar";
import { PageHero } from "@/components/PageHero";
import { Footer } from "@/components/Footer";
import { BlogCard } from "@/components/BlogCard";
import { blogs } from "@/data/blogs";
import styles from '../../styles.module.css';

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const decodedCategory = decodeURIComponent(slug).replace(/-/g, ' ');

    const filteredBlogs = blogs.filter(b => b.category.toLowerCase() === decodedCategory.toLowerCase());

    return (
        <main>
            <Navbar />
            <PageHero title={`Category: ${decodedCategory}`} currentPage="Category Archive" />
            <section className={styles.section}>
                <div className="container">
                    <div className={styles.grid}>
                        {filteredBlogs.map((blog) => (
                            <BlogCard key={blog.id} post={blog} />
                        ))}
                        {filteredBlogs.length === 0 && (
                            <p style={{ color: 'var(--text-muted)' }}>No posts found for this category.</p>
                        )}
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
