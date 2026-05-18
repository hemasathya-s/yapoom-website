import { BlogForm } from "../BlogForm";
import styles from "../../admin.module.css";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NewBlogPage() {
    return (
        <div>
            <div className={styles.header}>
                <h1 className={styles.title}>Compose New Blog</h1>
                <Link href="/webadmin/blogs" style={{ display: 'flex', alignItems: 'center', gap: '5px', color: 'var(--text-secondary)', textDecoration: 'none' }}>
                    <ArrowLeft size={18} /> Back to Blogs
                </Link>
            </div>

            <BlogForm />
        </div>
    )
}
