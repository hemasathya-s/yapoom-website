export interface BlogPost {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    author: string;
    image: string;
    category: string;
    content: string;
}

export const blogs: BlogPost[] = [
    {
        id: '1',
        slug: 'scale-with-kubernetes',
        title: 'Scaling Enterprise Software with Kubernetes',
        excerpt: 'Discover how clustering and microservices orchestration with Kubernetes enables zero-downtime scaling...',
        date: 'Jan 23, 2025',
        author: 'Yapoom Solutions',
        image: '/service-code.png',
        category: 'Cloud Engineering',
        content: 'Container orchestration is the core of modern cloud infrastructure. Kubernetes allows businesses to automatically scale depending on real-time traffic requests without manual server provisioning. Our engineering team at Yapoom Solutions ensures that traffic spikes are handled automatically, saving on massive hardware overhead costs.'
    },
    {
        id: '2',
        slug: 'custom-erp-vs-off-the-shelf',
        title: 'Custom ERP vs Off-the-Shelf: Which is Better?',
        excerpt: 'When it comes to operations management, a tailored ERP often pays for itself rapidly compared to generic solutions...',
        date: 'Jan 17, 2025',
        author: 'Yapoom Solutions',
        image: '/service-analysis.png',
        category: 'Enterprise Solutions',
        content: 'Many growing businesses struggle with the rigidness of SaaS ERPs. Building a custom ERP system aligned strictly to internal logic minimizes required training and maximizes operational efficiency. Off-the-shelf options come with unneeded modules, but custom builds by Yapoom Solutions fit like a glove.'
    },
    {
        id: '3',
        slug: 'revolutionizing-telecom',
        title: 'Revolutionizing Telecom: The Power of Cloud SIP',
        excerpt: 'Why replacing legacy PBX systems with Cloud SIP dramatically reduces latency and hardware dependencies...',
        date: 'Oct 24, 2025',
        author: 'Yapoom Solutions',
        image: '/hero-team.png',
        category: 'Telecom',
        content: 'Voice Over IP has evolved from a niche alternative to an absolute requirement. Cloud SIP Trunking allows global businesses to centralize communication logs and scale remote workforce call routing effortlessly. Yapoom Solutions provides robust telecom upgrades that guarantee call clarity and security.'
    },
    {
        id: '4',
        slug: 'embedded-systems-manufacturing',
        title: 'The Future of Embedded Systems in Manufacturing',
        excerpt: 'How deeply integrated microcontrollers are automating factory floors across the globe...',
        date: 'Nov 02, 2025',
        author: 'Yapoom Solutions',
        image: '/hero-modern-team.png',
        category: 'Hardware & IoT',
        content: 'The industrial sector relies heavily on real-time operating systems. From sensor feedback loops to robotic welding, embedded software is replacing manual oversight with 100% precision logic, ensuring rapid QA and speed.'
    },
    {
        id: '5',
        slug: 'hybrid-event-management',
        title: 'Why Hybrid Event Management Requires Solid Architecture',
        excerpt: 'The hidden challenges of scaling bandwidth and attendee data for simultaneous physical and digital events...',
        date: 'Nov 15, 2025',
        author: 'Yapoom Solutions',
        image: '/case-study-1.png',
        category: 'Event Tech',
        content: 'Combining physical attendance data with online DRM-protected live streams is complex. Yapoom Solutions builds the event architecture needed to track user metrics across both domains, processing thousands of simultaneous actions securely.'
    },
    {
        id: '6',
        slug: 'ecommerce-seo-scale',
        title: 'Enterprise SEO: Handling 50K+ Products',
        excerpt: 'Technical SEO strategies designed to ensure maximum indexation and semantic schema structures...',
        date: 'Dec 01, 2025',
        author: 'Yapoom Solutions',
        image: '/case-study-2.png',
        category: 'SEO',
        content: 'When an ecommerce store grows past 50,000 SKUs, crawl budgets and canonical conflicts emerge. Our specialized enterprise SEO engineers ensure that structured data and automated internal linking architecture are implemented correctly to drive massive organic lift.'
    }
];
