import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from "@/components/Navbar";
import { PageHero } from "@/components/PageHero";
import { Footer } from "@/components/Footer";
import { blogs } from "@/data/blogs";
import { notFound } from "next/navigation";
import { User, Calendar, Clock } from 'lucide-react';
import styles from './styles.module.css';

export async function generateStaticParams() {
    return blogs.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = blogs.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    const recentPosts = blogs.filter(p => p.id !== post.id).slice(0, 3);
    const categories = Array.from(new Set(blogs.map(b => b.category)));

    return (
        <main>
            <Navbar />
            <PageHero title="Blog Details" currentPage="Blog Details" />

            <section className={styles.section}>
                <div className={`container ${styles.container}`}>
                    <div className={styles.contentColumn}>
                        <article className={styles.article}>
                            <div className={styles.mainImageWrapper}>
                                <Image src={post.image} alt={post.title} fill className={styles.mainImage} priority />
                            </div>

                            <div className={styles.meta}>
                                <div className={styles.metaItem}>
                                    <User size={16} className={styles.icon} />
                                    <span>{post.author}</span>
                                </div>
                                <div className={styles.metaItem}>
                                    <Calendar size={16} className={styles.icon} />
                                    <span>{post.date}</span>
                                </div>
                            </div>

                            <h2 style={{ fontSize: '32px', marginBottom: '24px', fontWeight: 'bold' }}>{post.title}</h2>

                            <div className={styles.content}>
                                <p>{post.content}</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                        </article>
                    </div>

                    <aside className={styles.sidebar}>
                        <div className={styles.widget}>
                            <h3 className={styles.widgetTitle}>Categories</h3>
                            <ul className={styles.categoryList}>
                                {categories.map(category => (
                                    <li key={category} className={styles.categoryItem}>
                                        <Link href="#" className={styles.categoryLink}>
                                            <span>{category}</span>
                                            <span>({blogs.filter(b => b.category === category).length})</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className={styles.widget}>
                            <h3 className={styles.widgetTitle}>Recent Posts</h3>
                            <div>
                                {recentPosts.map(recent => (
                                    <div key={recent.id} className={styles.recentPost}>
                                        <div className={styles.recentImageWrapper}>
                                            <Image src={recent.image} alt={recent.title} fill style={{ objectFit: 'cover' }} />
                                        </div>
                                        <div className={styles.recentContent}>
                                            <h4><Link href={`/blog/${recent.slug}`}>{recent.title}</Link></h4>
                                            <span className={styles.recentDate}>{recent.date}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </aside>
                </div>
            </section>

            <Footer />
        </main>
    );
}
