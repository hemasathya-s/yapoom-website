import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    const baseUrl = 'https://www.yapoom.in'; // Replace with the actual production URL

    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/api/'], // Example: disallow api routes from being crawled
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}
