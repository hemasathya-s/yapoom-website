export interface Project {
    id: string;
    slug: string;
    title: string;
    category: string;
    image: string;
    client: string;
    date: string;
    description: string;
    challenge: string;
    solution: string;
}

export const projects: Project[] = [
    {
        id: '1',
        slug: 'corporate-website-redesign',
        title: 'Corporate Website Redesign',
        category: 'Web Development',
        image: '/case-study-1.png',
        client: 'Manufacturing Firm, Chennai',
        date: 'October 2024',
        description: 'A complete website redesign for an established manufacturing company based in Chennai. The project focused on creating a modern, responsive, and SEO-optimized site that reflects their industry expertise.',
        challenge: 'The existing website was outdated, non-responsive, and poorly ranked on search engines, resulting in low online inquiries and poor user experience on mobile devices.',
        solution: 'FT Digital Solutions rebuilt the site from scratch using modern web technologies, ensured mobile-first responsiveness, and integrated on-page SEO best practices. The result was a 40% increase in organic traffic within three months of launch.'
    },
    {
        id: '2',
        slug: 'ecommerce-platform-launch',
        title: 'E-Commerce Platform Launch',
        category: 'Web Development',
        image: '/case-study-2.png',
        client: 'Retail Brand, Tamil Nadu',
        date: 'November 2024',
        description: 'A custom-built e-commerce platform for a retail brand expanding its online presence. The site features a seamless checkout process, product catalog management, and mobile-optimized shopping experience.',
        challenge: 'The client needed a scalable online store that could handle growing inventory and traffic, while providing customers with a smooth and trustworthy shopping experience.',
        solution: 'We developed a fully custom e-commerce solution with secure payment gateway integration, inventory management, and a responsive design. The platform saw a 35% increase in online sales in the first quarter.'
    },
    {
        id: '3',
        slug: 'brand-identity-development',
        title: 'Brand Identity Development',
        category: 'Branding',
        image: '/case-study-3.png',
        client: 'Startup, Chennai',
        date: 'September 2024',
        description: 'A complete brand identity project for a tech startup entering the Chennai market. The engagement covered logo design, color palette, typography, brand guidelines, and marketing collateral.',
        challenge: 'The startup had no visual identity and needed to establish credibility quickly to attract early customers and investors in a competitive market.',
        solution: 'FT Digital Solutions developed a professional, modern brand identity aligned with the startup\'s vision. The new brand helped them secure their first 50 clients within two months of launch.'
    },
    {
        id: '4',
        slug: 'social-media-campaign',
        title: 'Social Media Growth Campaign',
        category: 'Social Media Marketing',
        image: '/hero-team.png',
        client: 'F&B Brand, Chennai',
        date: 'August 2024',
        description: 'A multi-platform social media marketing campaign for a food & beverage brand looking to grow its digital audience and increase footfall to physical locations.',
        challenge: 'The brand had minimal social media presence and struggled to engage its target audience of young, urban consumers across Instagram and Facebook.',
        solution: 'We crafted a consistent content strategy, ran targeted paid campaigns, and collaborated with local food influencers. The brand grew its Instagram following by 300% and saw a measurable increase in weekend footfall.'
    },
    {
        id: '5',
        slug: 'google-ads-lead-generation',
        title: 'Google Ads Lead Generation',
        category: 'Digital Marketing',
        image: '/service-analysis.png',
        client: 'Real Estate Company, Tamil Nadu',
        date: 'July 2024',
        description: 'A targeted Google Ads campaign for a real estate developer looking to generate qualified leads for a new residential project launch in Chennai.',
        challenge: 'Previous ad campaigns had high spend but low-quality leads, resulting in poor conversion rates for the sales team.',
        solution: 'FT Digital Solutions restructured the campaign with refined keyword targeting, improved ad copy, and optimized landing pages. The cost-per-lead dropped by 50% while lead quality improved significantly.'
    },
    {
        id: '6',
        slug: 'mobile-app-development',
        title: 'Mobile App Development',
        category: 'App Development',
        image: '/service-code.png',
        client: 'Healthcare Provider, Chennai',
        date: 'June 2024',
        description: 'A custom mobile application for a healthcare provider enabling patients to book appointments, access medical records, and consult with doctors via video call.',
        challenge: 'The provider relied entirely on phone-based bookings, leading to long wait times and patient dissatisfaction. They needed a digital-first solution to modernize operations.',
        solution: 'FT Digital Solutions developed a cross-platform Flutter app for both Android and iOS. The app reduced patient wait times by 60% and received a 4.7/5 rating on the Play Store within the first month.'
    }
];
