'use client';

import React, { useState } from 'react';
import { Navbar } from "@/components/Navbar";
import { PageHero } from "@/components/PageHero";
import { Footer } from "@/components/Footer";
import { BlogCard } from "@/components/BlogCard";
import { blogs } from "@/data/blogs";
import styles from './styles.module.css';

const ITEMS_PER_PAGE = 6;

export default function BlogPage() {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(blogs.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentBlogs = blogs.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <main>
            <Navbar />
            <PageHero title="Our Blog" currentPage="Blog" />

            <section className={styles.section}>
                <div className="container">
                    <div className={styles.grid}>
                        {currentBlogs.map((blog) => (
                            <BlogCard key={blog.id} post={blog} />
                        ))}
                    </div>

                    {totalPages > 1 && (
                        <div className={styles.pagination}>
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                <button
                                    key={page}
                                    className={`${styles.pageButton} ${currentPage === page ? styles.activePage : ''}`}
                                    onClick={() => handlePageChange(page)}
                                >
                                    {page}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </main>
    );
}
