import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import styles from "./admin.module.css";
import { signOut } from "@/auth";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
    const session = await auth();

    // Auth Guard - Intercept any requests lacking a Google Session
    if (!session?.user) {
        redirect("/login");
    }

    return (
        <div className={styles.container}>
            <aside className={styles.sidebar}>
                <div className={styles.logo}>Yapoom CMS</div>
                <Link href="/webadmin" className={styles.navLink}>Dashboard</Link>
                <Link href="/webadmin/blogs" className={styles.navLink}>Blogs</Link>
                <Link href="/webadmin/projects" className={styles.navLink}>Case Studies</Link>
                <Link href="/webadmin/services" className={styles.navLink}>Services</Link>
                <Link href="/webadmin/media" className={styles.navLink}>Media Library</Link>
                <Link href="/webadmin/seo" className={styles.navLink}>SEO Config</Link>

                <form action={async () => {
                    "use server"
                    await signOut({ redirectTo: "/" })
                }} style={{ marginTop: 'auto' }}>
                    <button type="submit" className={styles.logoutBtn}>
                        Sign Out ({session.user.name})
                    </button>
                </form>
            </aside>
            <main className={styles.mainContent}>
                {children}
            </main>
        </div>
    );
}
