import { PrismaClient } from "@prisma/client";
import { BlogForm } from "../BlogForm";
import styles from "../../admin.module.css";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

export default async function EditBlogPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const prisma = new PrismaClient();

    const blog = await prisma.blog.findUnique({
        where: { id }
    });

    if (!blog) return notFound();

    return (
        <div>
            <div className={styles.header}>
                <h1 className={styles.title}>Edit Post: {blog.title}</h1>
                <Link href="/webadmin/blogs" style={{ display: 'flex', alignItems: 'center', gap: '5px', color: 'var(--text-secondary)', textDecoration: 'none' }}>
                    <ArrowLeft size={18} /> Back to Blogs
                </Link>
            </div>

            <BlogForm initialData={blog} />
        </div>
    )
}
