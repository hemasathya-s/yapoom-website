import { PrismaClient } from '@prisma/client'
import { blogs } from './src/data/blogs'
import { projects } from './src/data/projects'
import { services } from './src/data/services'

const prisma = new PrismaClient()

async function main() {
    console.log("Seeding Database from Static Repositories...")

    // 1. Seed Blogs
    for (const blog of blogs) {
        await prisma.blog.upsert({
            where: { slug: blog.slug },
            update: {},
            create: {
                title: blog.title,
                slug: blog.slug,
                content: blog.content,
                image: blog.image,
                author: blog.author,
                category: blog.category,
                date: blog.date
            }
        })
    }

    // 2. Seed Projects
    for (const proj of projects) {
        await prisma.project.upsert({
            where: { slug: proj.slug },
            update: {},
            create: {
                title: proj.title,
                slug: proj.slug,
                client: proj.client,
                category: proj.category,
                image: proj.image,
                challenge: proj.challenge,
                solution: proj.solution,
                description: proj.description,
                date: proj.date,
                results: ""
            }
        })
    }

    // 3. Seed Services
    for (const srv of services) {
        await prisma.service.upsert({
            where: { slug: srv.slug },
            update: {},
            create: {
                title: srv.title,
                slug: srv.slug,
                subtitle: srv.subtitle,
                image: srv.image,
                description: srv.description,
                additionalText: srv.additionalText || "",
                features: srv.features ? JSON.stringify(srv.features) : "[]"
            }
        })
    }

    console.log("Database seeded successfully!")
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
