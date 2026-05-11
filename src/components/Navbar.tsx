"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import styles from './Navbar.module.css';
import { Button } from './Button';

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Projects', href: '/projects' },
        // { name: 'Pricing', href: '/pricing' },
        { name: 'Blog', href: '/blog' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={`container ${styles.container}`}>
                <Link href="/" className={styles.logo}>
                    <Image src="/logo/yapoom-logo-horizontal.webp" alt="Yapoom Solutions" width={250} height={30} priority style={{ objectFit: 'contain' }} />
                </Link>

                {/* Desktop Nav */}
                <div className={styles.navLinks}>
                    {links.map((link) => (
                        <Link key={link.name} href={link.href} className={styles.link}>
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div className={styles.cta}>
                    <Link href="?modal=query" scroll={false}>
                        <Button variant="primary" icon={<ArrowUpRight size={18} />}>
                            Get Started Now
                        </Button>
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className={styles.mobileToggle}
                    onClick={() => setIsMobileOpen(!isMobileOpen)}
                >
                    {isMobileOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Sidebar Overlay */}
            <div
                className={`${styles.sidebarOverlay} ${isMobileOpen ? styles.open : ''}`}
                onClick={() => setIsMobileOpen(false)}
            />

            {/* Sidebar Mobile Menu */}
            <div className={`${styles.sidebar} ${isMobileOpen ? styles.open : ''}`}>
                {links.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={styles.sidebarLink}
                        onClick={() => setIsMobileOpen(false)}
                    >
                        {link.name}
                    </Link>
                ))}
                <div style={{ marginTop: '20px' }}>
                    <Link href="?modal=query" scroll={false} onClick={() => setIsMobileOpen(false)}>
                        <Button variant="primary" icon={<ArrowUpRight size={18} />}>
                            Get Started Now
                        </Button>
                    </Link>
                </div>
            </div>
        </nav>
    );
};
