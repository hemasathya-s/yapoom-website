import React from 'react';
import Link from 'next/link';
import { Navbar } from "@/components/Navbar";
import { PageHero } from "@/components/PageHero";
import { Footer } from "@/components/Footer";
import { BlogCard } from "@/components/BlogCard";
import { blogs } from "@/data/blogs";
import styles from './styles.module.css';

const ITEMS_PER_PAGE = 6;

export default async function BlogPage({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
    const params = await searchParams;

    // Pagination params
    const pageParam = params.page;
    const currentPage = typeof pageParam === 'string' ? parseInt(pageParam, 10) : 1;

    // Search Params
    const searchQuery = typeof params.q === 'string' ? params.q.toLowerCase() : '';

    // Filter logic
    let filteredBlogs = blogs;
    if (searchQuery) {
        filteredBlogs = blogs.filter(b =>
            b.title.toLowerCase().includes(searchQuery) ||
            b.category.toLowerCase().includes(searchQuery) ||
            b.author.toLowerCase().includes(searchQuery) ||
            b.content.toLowerCase().includes(searchQuery)
        );
    }

    const totalPages = Math.ceil(filteredBlogs.length / ITEMS_PER_PAGE);
    const validPage = isNaN(currentPage) || currentPage < 1 ? 1 : currentPage > totalPages ? totalPages : currentPage;

    const startIndex = (validPage - 1) * ITEMS_PER_PAGE;
    const currentBlogs = filteredBlogs.slice(startIndex, startIndex + ITEMS_PER_PAGE);

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
                                <Link
                                    key={page}
                                    href={`/blog?page=${page}`}
                                    className={`${styles.pageButton} ${validPage === page ? styles.activePage : ''}`}
                                >
                                    {page}
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </main>
    );
}
