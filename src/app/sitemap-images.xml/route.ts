import { blogs } from "@/data/blogs";
import { projects } from "@/data/projects";

// Next.js convention for returning raw responses instead of React Nodes
export async function GET() {
    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n`;

    // Static mapping
    xml += `  <url>\n`;
    xml += `    <loc>https://www.yapoomsolutions.com/</loc>\n`;
    xml += `    <image:image>\n`;
    xml += `      <image:loc>https://www.yapoomsolutions.com/hero-modern-team.png</image:loc>\n`;
    xml += `      <image:title>Yapoom Solutions Enterprise Architecture</image:title>\n`;
    xml += `    </image:image>\n`;
    xml += `  </url>\n`;

    // Dynamic Projects rendering
    projects.forEach(proj => {
        xml += `  <url>\n`;
        xml += `    <loc>https://www.yapoomsolutions.com/projects</loc>\n`;
        xml += `    <image:image>\n`;
        xml += `      <image:loc>https://www.yapoomsolutions.com${proj.image}</image:loc>\n`;
        xml += `      <image:title>${proj.title}</image:title>\n`;
        xml += `    </image:image>\n`;
        xml += `  </url>\n`;
    });

    // Dynamic Blogs mapping
    blogs.forEach(blog => {
        xml += `  <url>\n`;
        xml += `    <loc>https://www.yapoomsolutions.com/blog/${blog.slug}</loc>\n`;
        xml += `    <image:image>\n`;
        xml += `      <image:loc>https://www.yapoomsolutions.com${blog.image}</image:loc>\n`;
        xml += `      <image:title>${blog.title}</image:title>\n`;
        xml += `    </image:image>\n`;
        xml += `  </url>\n`;
    });

    xml += `</urlset>`;

    return new Response(xml, {
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 's-maxage=86400, stale-while-revalidate'
        },
    });
}
