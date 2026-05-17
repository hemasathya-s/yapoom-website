import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Our Enterprise Projects",
    description: "Explore Yapoom Solutions' past deployments covering custom ERPs, VoIP networks, and cloud migrations.",
    alternates: { canonical: "/projects" },
};

export default function ProjectsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
