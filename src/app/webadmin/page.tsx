import { PrismaClient } from "@prisma/client";
import styles from "./admin.module.css";
import Link from "next/link";
import { PlusCircle, FileText, Settings, Database } from "lucide-react";

const prisma = new PrismaClient();

export default async function AdminDashboard() {
    const blogCount = await prisma.blog.count();
    const serviceCount = await prisma.service.count();
    const projectCount = await prisma.project.count();

    return (
        <div>
            <div className={styles.header}>
                <h1 className={styles.title}>System Overview</h1>
                <Link href="/webadmin/blogs/new" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 20px', background: 'var(--primary)', color: 'white', borderRadius: '8px', textDecoration: 'none' }}>
                    <PlusCircle size={18} /> New Blog
                </Link>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
                <div style={{ background: 'white', padding: '24px', borderRadius: '12px', border: '1px solid var(--border)' }}>
                    <FileText size={24} style={{ color: 'var(--primary)', marginBottom: '16px' }} />
                    <h3 style={{ fontSize: '18px', color: 'var(--text-secondary)' }}>Total Blogs</h3>
                    <p style={{ fontSize: '36px', fontWeight: 'bold' }}>{blogCount}</p>
                </div>

                <div style={{ background: 'white', padding: '24px', borderRadius: '12px', border: '1px solid var(--border)' }}>
                    <Database size={24} style={{ color: 'var(--primary)', marginBottom: '16px' }} />
                    <h3 style={{ fontSize: '18px', color: 'var(--text-secondary)' }}>Active Case Studies</h3>
                    <p style={{ fontSize: '36px', fontWeight: 'bold' }}>{projectCount}</p>
                </div>

                <div style={{ background: 'white', padding: '24px', borderRadius: '12px', border: '1px solid var(--border)' }}>
                    <Settings size={24} style={{ color: 'var(--primary)', marginBottom: '16px' }} />
                    <h3 style={{ fontSize: '18px', color: 'var(--text-secondary)' }}>Enterprise Services</h3>
                    <p style={{ fontSize: '36px', fontWeight: 'bold' }}>{serviceCount}</p>
                </div>
            </div>
        </div>
    )
}
