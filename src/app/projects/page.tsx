import React from 'react';
import Link from 'next/link';
import { Navbar } from "@/components/Navbar";
import { PageHero } from "@/components/PageHero";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import styles from './styles.module.css';

const ITEMS_PER_PAGE = 6;

export default async function ProjectsPage({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
    const params = await searchParams;
    const pageParam = params.page;
    const currentPage = typeof pageParam === 'string' ? parseInt(pageParam, 10) : 1;

    const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);
    const validPage = isNaN(currentPage) || currentPage < 1 ? 1 : currentPage > totalPages ? totalPages : currentPage;

    const startIndex = (validPage - 1) * ITEMS_PER_PAGE;
    const currentProjects = projects.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    return (
        <main>
            <Navbar />
            <PageHero title="Our Projects" currentPage="Projects" />

            <section className={styles.section}>
                <div className="container">
                    <div className={styles.grid}>
                        {currentProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>

                    {totalPages > 1 && (
                        <div className={styles.pagination}>
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                <Link
                                    key={page}
                                    href={`/projects?page=${page}`}
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
