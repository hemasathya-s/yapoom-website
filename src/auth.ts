import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const { handlers, auth, signIn, signOut } = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [Google],
    session: {
        strategy: "jwt",
    },
    pages: {
        signIn: '/login',
    },
    callbacks: {
        async signIn({ user }) {
            // Enforce strict CMS restrictions (Allow only explicitly named admins if needed)
            // For demonstration purposes, we will approve the signin.
            return true;
        }
    }
})

//test app