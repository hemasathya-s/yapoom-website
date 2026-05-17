import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from "@/components/Navbar";
import { PageHero } from "@/components/PageHero";
import { Footer } from "@/components/Footer";
import { blogs } from "@/data/blogs";
import { notFound } from "next/navigation";
import Script from "next/script";
import { User, Calendar, Share2, Twitter, Linkedin, Facebook } from 'lucide-react';
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

    const schema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `yapoom.inblog/${slug}`
        },
        "headline": post.title,
        "image": `https://www.yapoom.in${post.image}`,
        "author": {
            "@type": "Person",
            "name": post.author
        },
        "publisher": {
            "@type": "Organization",
            "name": "Yapoom Solutions",
            "logo": {
                "@type": "ImageObject",
                "url": "yapoom.inlogo/yapoom-logo-horizontal.webp"
            }
        },
        "datePublished": "2026-05-10T08:00:00+00:00"
    };

    return (
        <main>
            <Navbar />
            <Script
                id="article-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
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

                            <div style={{ padding: '20px', backgroundColor: 'var(--bg-secondary)', borderRadius: '8px', marginBottom: '30px' }}>
                                <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>Table of Contents</h3>
                                <ul style={{ listStyle: 'disc', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <li><a href="#introduction" style={{ color: 'var(--primary)' }}>Introduction</a></li>
                                    <li><a href="#core-concepts" style={{ color: 'var(--text-main)' }}>Core Concepts & Strategy</a></li>
                                    <li><a href="#execution" style={{ color: 'var(--text-main)' }}>Execution & Delivery</a></li>
                                    <li><a href="#conclusion" style={{ color: 'var(--text-main)' }}>Conclusion</a></li>
                                </ul>
                            </div>

                            <div className={styles.content}>
                                <h3 id="introduction" style={{ fontSize: '24px', marginTop: '30px', marginBottom: '15px' }}>Introduction</h3>
                                <p>{post.content}</p>

                                <h3 id="core-concepts" style={{ fontSize: '24px', marginTop: '30px', marginBottom: '15px' }}>Core Concepts & Strategy</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                                <h3 id="execution" style={{ fontSize: '24px', marginTop: '30px', marginBottom: '15px' }}>Execution & Delivery</h3>
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                                <h3 id="conclusion" style={{ fontSize: '24px', marginTop: '30px', marginBottom: '15px' }}>Conclusion</h3>
                                <p>Implementing these enterprise systems correctly drastically reduces hardware overheads and manual intervention logic.</p>
                            </div>

                            <div style={{ marginTop: '50px', paddingTop: '20px', borderTop: '1px solid rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', gap: '15px' }}>
                                <span style={{ fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '5px' }}><Share2 size={18} /> Share this article:</span>
                                <a href={`https://twitter.com/intent/tweet?url=yapoom.inblog/${slug}&text=${post.title}`} target="_blank" rel="noopener noreferrer" style={{ color: '#1DA1F2' }}><Twitter size={24} /></a>
                                <a href={`https://www.linkedin.com/shareArticle?mini=true&url=yapoom.inblog/${slug}&title=${post.title}`} target="_blank" rel="noopener noreferrer" style={{ color: '#0077B5' }}><Linkedin size={24} /></a>
                                <a href={`https://www.facebook.com/sharer/sharer.php?u=yapoom.inblog/${slug}`} target="_blank" rel="noopener noreferrer" style={{ color: '#4267B2' }}><Facebook size={24} /></a>
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
