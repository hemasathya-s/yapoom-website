import { PrismaClient } from "@prisma/client";
import Link from "next/link";
import styles from "../admin.module.css";
import { PlusCircle, Edit, Trash2 } from "lucide-react";

const prisma = new PrismaClient();

export default async function AdminBlogsPage() {
    const blogs = await prisma.blog.findMany({
        orderBy: { createdAt: 'desc' }
    });

    return (
        <div>
            <div className={styles.header}>
                <h1 className={styles.title}>Blog Engine Management</h1>
                <Link href="/webadmin/blogs/new" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 20px', background: 'var(--primary)', color: 'white', borderRadius: '8px', textDecoration: 'none' }}>
                    <PlusCircle size={18} /> Compose New Article
                </Link>
            </div>

            <div style={{ background: 'white', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border)' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                    <thead>
                        <tr style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border)' }}>
                            <th style={{ padding: '16px', fontWeight: '600' }}>Title</th>
                            <th style={{ padding: '16px', fontWeight: '600' }}>Category</th>
                            <th style={{ padding: '16px', fontWeight: '600' }}>Author</th>
                            <th style={{ padding: '16px', fontWeight: '600' }}>Date Published</th>
                            <th style={{ padding: '16px', fontWeight: '600' }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {blogs.length === 0 ? (
                            <tr><td colSpan={5} style={{ padding: '24px', textAlign: 'center', color: 'var(--text-secondary)' }}>No blogs found in Database.</td></tr>
                        ) : blogs.map((blog: any) => (
                            <tr key={blog.id} style={{ borderBottom: '1px solid var(--border)' }}>
                                <td style={{ padding: '16px', fontWeight: '500' }}>{blog.title}</td>
                                <td style={{ padding: '16px' }}>
                                    <span style={{ padding: '4px 12px', background: '#e3f2fd', color: '#1976d2', borderRadius: '20px', fontSize: '13px' }}>
                                        {blog.category}
                                    </span>
                                </td>
                                <td style={{ padding: '16px', color: 'var(--text-secondary)' }}>{blog.author}</td>
                                <td style={{ padding: '16px', color: 'var(--text-secondary)' }}>{blog.date}</td>
                                <td style={{ padding: '16px', display: 'flex', gap: '12px' }}>
                                    <Link href={`/webadmin/blogs/${blog.id}`} style={{ color: 'var(--primary)' }} title="Edit"><Edit size={18} /></Link>
                                    <form action={async () => {
                                        "use server"
                                        const db = new PrismaClient();
                                        await db.blog.delete({ where: { id: blog.id } })
                                    }}>
                                        <button type="submit" style={{ background: 'none', border: 'none', color: '#d32f2f', cursor: 'pointer' }} title="Delete">
                                            <Trash2 size={18} />
                                        </button>
                                    </form>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
