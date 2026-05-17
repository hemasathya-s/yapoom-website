import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Tech Insights Blog",
    description: "In-depth articles spanning cloud engineering, SEO technicalities, enterprise system administration, and IoT solutions.",
    alternates: { canonical: "/blog" },
};

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
