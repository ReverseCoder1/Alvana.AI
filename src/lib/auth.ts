import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db"; 

import * as schema from "@/db/schema";

export const auth = betterAuth({
    allowedOrigins: [
        "http://localhost:3000", // local dev
        "https://moved-widely-firefly.ngrok-free.app" // your ngrok domain
    ],
    socialProviders: {
        github: { 
            clientId: process.env.GITHUB_CLIENT_ID as string, 
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string, 
        }, 
        google: { 
            clientId: process.env.GOOGLE_CLIENT_ID as string, 
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string, 
        }, 
    },
    emailAndPassword: {
        enabled: true,
    },
    database: drizzleAdapter(db, {
        provider: "pg", // or "mysql", "sqlite"
        schema: {
            ...schema,
        }
    })
});