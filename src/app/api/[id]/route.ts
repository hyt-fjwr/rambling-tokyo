import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function main() {
    try {
        await prisma.$connect();
    } catch (error) {
        return Error("Failed to connect tp database");
    }
}

export const GET = async (req: Request, res: NextResponse) => {
    try {
        const id : number = parseInt(req.url.split("/api/")[1]);
        await main();
        const test = await prisma.test.findFirst({ where: { id }});
        return NextResponse.json({message : "succeed", test }, {status : 200});
    } catch (error) {
        return NextResponse.json({message : "error", error }, {status : 500});
    } finally {
        await prisma.$disconnect();
    } 
};

export const PUT = async (req: Request, res: NextResponse) => {
    try {
        const id : number = parseInt(req.url.split("/api/")[1]);
        
        const { text } = await req.json();
        
        await main();
        const test = await prisma.test.update({
            data: { text }, 
            where: { id } 
        });
        return NextResponse.json({message : "succeed", test }, {status : 200});
    } catch (error) {
        return NextResponse.json({message : "error", error }, {status : 500});
    } finally {
        await prisma.$disconnect();
    } 
};