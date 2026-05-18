import React from 'react';
import Link from 'next/link';
import { Navbar } from "@/components/Navbar";
import { PageHero } from "@/components/PageHero";
import { Footer } from "@/components/Footer";
import { BlogCard } from "@/components/BlogCard";
import { PrismaClient } from '@prisma/client';
import styles from './styles.module.css';

const ITEMS_PER_PAGE = 6;

export default async function BlogPage({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
    const params = await searchParams;
    const page = typeof params.page === 'string' ? parseInt(params.page) : 1;
    const itemsPerPage = 6;
    const query = typeof params.q === 'string' ? params.q.toLowerCase() : '';

    const prisma = new PrismaClient();

    // Fetch total matching records
    const totalBlogs = await prisma.blog.count({
        where: query ? {
            OR: [
                { title: { contains: query } },
                { content: { contains: query } }
            ]
        } : undefined
    });

    const totalPages = Math.ceil(totalBlogs / itemsPerPage);

    const filteredBlogs = await prisma.blog.findMany({
        where: query ? {
            OR: [
                { title: { contains: query } },
                { content: { contains: query } }
            ]
        } : undefined,
        skip: (page - 1) * itemsPerPage,
        take: itemsPerPage,
        orderBy: { createdAt: 'desc' }
    });

    const validPage = isNaN(page) || page < 1 ? 1 : page > totalPages ? totalPages : page;

    return (
        <main>
            <Navbar />
            <PageHero title="Our Blog" currentPage="Blog" />

            <section className={styles.section}>
                <div className="container">
                    <div className={styles.grid}>
                        {filteredBlogs.map((blog: any) => (
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
