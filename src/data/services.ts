export interface Service {
    id: string;
    slug: string;
    subtitle: string;
    title: string;
    image: string;
    description: string;
    additionalText?: string;
    features?: string[];
}

export const services: Service[] = [
    {
        id: '01',
        slug: 'specialised-ecommerce-development',
        subtitle: 'SOFTWARE ENGINEERING',
        title: 'Specialised Ecommerce Development',
        image: '/service-code.png',
        description: 'Our specialised Ecommerce development solutions deliver highly engaging and conversion-optimized storefronts tailored specifically to your audience. We focus on creating unique shopping experiences that keep customers returning.',
        additionalText: 'We build headless and monolithic ecommerce platforms that integrate seamlessly with your CRM and ERP, ensuring speed, security, and scalability for handling high traffic without downtime.',
        features: [
            'Custom Storefront Design',
            'Headless Commerce Architectures',
            'Payment Gateway Integrations',
        ]
    },
    {
        id: '02',
        slug: 'app-web-development',
        subtitle: 'SOFTWARE ENGINEERING',
        title: 'App & Web Development',
        image: '/hero-team.png',
        description: 'We craft high-performance web and mobile applications using modern frameworks that provide a smooth, interactive experience across devices.',
        additionalText: 'From progressive web applications to cross-platform mobile environments, our dedicated developers bring your boldest ideas to life matching industry-best standards.',
        features: [
            'iOS & Android App Development',
            'Progressive Web Apps (PWAs)',
            'React & Next.js Development',
        ]
    },
    {
        id: '03',
        slug: 'scalable-secured-custom-software',
        subtitle: 'SOFTWARE ENGINEERING',
        title: 'Scalable Secured Custom Software',
        image: '/service-code.png',
        description: 'Off-the-shelf software doesn’t always fit your processes. We develop secure, tailored software solutions designed to integrate perfectly with your proprietary workflows.',
        additionalText: 'Security is paramount to our architecture. We implement zero-trust methodologies and rigorous compliance checks to keep your business data private and safe.',
        features: [
            'Enterprise Architecture Design',
            'Zero-trust Security Modeling',
            'Automated Microservices',
        ]
    },
    {
        id: '04',
        slug: 'billing-erp-crm',
        subtitle: 'ENTERPRISE SOLUTIONS',
        title: 'Billing, ERP & CRM Solutions',
        image: '/service-analysis.png',
        description: 'Streamline your operations with our robust billing, Enterprise Resource Planning (ERP), and Customer Relationship Management (CRM) solutions tailored for multi-channel success.',
        additionalText: 'Manage your finances, human resources, and customer interactions from centralized, unified systems that communicate data across departments seamlessly.',
        features: [
            'Custom ERP Implementations',
            'Advanced CRM Configurations',
            'Automated Billing Pipelines',
        ]
    },
    {
        id: '05',
        slug: 'event-management',
        subtitle: 'ENTERPRISE SOLUTIONS',
        title: 'Event Management Solutions',
        image: '/hero-modern-team.png',
        description: 'Host, manage, and execute flawless digital and hybrid events with our comprehensive event management software infrastructure.',
        additionalText: 'From ticketing and attendee management to live engagement tools and post-event analytics, we build platforms that elevate your organizational capabilities.',
        features: [
            'Ticket sales and RSVP systems',
            'Attendee Data Tracking',
            'Real-time Engagement Analytics',
        ]
    },
    {
        id: '06',
        slug: 'sip-trunk-cloud-sip-voip',
        subtitle: 'TELECOM & INFRA',
        title: 'SIP Trunk, Cloud SIP & VOIP Solutions',
        image: '/case-study-2.png',
        description: 'Upgrade your communication infrastructure with advanced SIP Trunking and comprehensive VOIP solutions designed to cut costs and improve audio clarity.',
        additionalText: 'Our cloud SIP and VOIP platforms integrate easily with existing enterprise PBX setups, facilitating secure internal collaboration and global reach.',
        features: [
            'Secure SIP Trunk Provisioning',
            'Cloud PBX Management',
            'Global VOIP Deployment',
        ]
    },
    {
        id: '07',
        slug: 'inhouse-native-cloud-development',
        subtitle: 'TELECOM & INFRA',
        title: 'Inhouse Native Cloud Solutions',
        image: '/service-analysis.png',
        description: 'An aggressive alternative to AWS and GCP. We engineer and provision specialized inhouse native cloud development solutions tailored for absolute autonomy and reduced long-term vendor lock-in.',
        additionalText: 'Take back control over your infrastructure with tailored cloud architecture that maintains global standards for redundancy, load balancing, and computing capabilities.',
        features: [
            'Private Cloud Architectures',
            'Kubernetes Orchestration',
            'No-vendor-lock Infrastructure',
        ]
    },
    {
        id: '08',
        slug: 'video-hosting-solutions',
        subtitle: 'TELECOM & INFRA',
        title: 'Video Hosting Solutions',
        image: '/service-code.png',
        description: 'High availability video hosting solutions that ensure adaptive bitrate streaming, DRM protection, and low-latency playback delivery on any device around the globe.',
        additionalText: 'Perfect for extensive media libraries and high-traffic streaming services looking to scale without massive infrastructural overheads.',
        features: [
            'Adaptive Bitrate Streaming',
            'Advanced DRM Implementations',
            'Global CDN Video Delivery',
        ]
    },
    {
        id: '09',
        slug: 'embedded-system-development',
        subtitle: 'HARDWARE & IOT',
        title: 'Embedded System Development',
        image: '/case-study-1.png',
        description: 'From microcontrollers to full-blown embedded operating systems, we bridge the gap between powerful hardware operations and smart logical computing.',
        additionalText: 'We program and architect the low-level functions required to keep smart appliances, industrial controllers, and medical instruments operating in real-time constraint environments.',
        features: [
            'Microcontroller Programming',
            'RTOS Implementations',
            'Low-level Driver Creation',
        ]
    },
    {
        id: '10',
        slug: 'hardware-automation',
        subtitle: 'HARDWARE & IOT',
        title: 'Hardware Automation',
        image: '/hero-team.png',
        description: 'Optimize manufacturing and facility operations by leveraging precision hardware automation integrations.',
        additionalText: 'Our IoT engineers create sensor feedback loops and robotic integrations capable of reducing human error to zero, accelerating production speed securely.',
        features: [
            'Industrial IoT Pipelines',
            'Robotic Process Setup',
            'Custom Sensor Dashboards',
        ]
    },
    {
        id: '11',
        slug: 'ecommerce-specialised-seo',
        subtitle: 'DIGITAL GROWTH',
        title: 'Ecommerce Specialised SEO Solutions',
        image: '/service-analysis.png',
        description: 'Boost organic visibility designed exclusively for large-scale ecommerce stores. Drive converting traffic directly to your product arrays.',
        additionalText: 'We focus on technical SEO indexing, structured data, canonical tags logic, and robust content strategies crafted specifically to navigate ecommerce algorithms.',
        features: [
            'Technical Store Indexing',
            'Schema Markup Optimization',
            'Core Web Vitals Boost',
        ]
    }
];
