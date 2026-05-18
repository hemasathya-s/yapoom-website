"use server"

import { PrismaClient } from "@prisma/client"
import { redirect } from "next/navigation"

const prisma = new PrismaClient()

export async function saveBlog(formData: FormData) {
    const id = formData.get("id") as string | null
    const title = formData.get("title") as string
    const slug = formData.get("slug") as string
    const content = formData.get("content") as string
    const category = formData.get("category") as string
    const author = formData.get("author") as string
    const image = formData.get("image") as string || "/hero-modern-team.png"

    const data = {
        title,
        slug,
        content,
        category,
        author,
        image,
        date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    }

    if (id) {
        await prisma.blog.update({
            where: { id },
            data
        })
    } else {
        await prisma.blog.create({
            data
        })
    }

    redirect("/webadmin/blogs")
}
