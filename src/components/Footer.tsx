import React from 'react';
import Image from 'next/image';

export const Footer = () => {
    return (
        <footer style={{
            backgroundColor: 'var(--background-secondary)',
            padding: '80px 0 40px',
            color: 'var(--text-main)',
            borderTop: '1px solid rgba(0, 0, 0,0.05)'
        }}>
            <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px' }}>
                <div>
                    <div style={{ marginBottom: '20px' }}>
                        <Image src="/logo/yapoom-logo-horizontal.webp" alt="Yapoom Solutions" width={220} height={50} style={{ objectFit: 'contain' }} />
                    </div>
                    <p style={{ color: '#B0B0B0', lineHeight: '1.6' }}>
                        We help your business scale securely with customized cloud, telecom, and software solutions.
                    </p>
                </div>

                <div>
                    <h4 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '20px' }}>Quick Links</h4>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', color: '#B0B0B0' }}>
                        <li>About Us</li>
                        <li>Our Services</li>
                        <li>Contact</li>
                        <li>Blog</li>
                    </ul>
                </div>

                <div>
                    <h4 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '20px' }}>Contact</h4>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', color: '#B0B0B0' }}>
                        <li>info@yapoom.in</li>
                        <li>+91 92086 60866 </li>
                        <li>T.Nagar, Chennai</li>
                    </ul>
                </div>
            </div>

            <div className="container" style={{ marginTop: '60px', paddingTop: '20px', borderTop: '1px solid rgba(0, 0, 0,0.05)', textAlign: 'center', color: 'var(--text-main)' }}>
                © 2026 Yapoom Solutions. All rights reserved.
            </div>
        </footer>
    );
};
