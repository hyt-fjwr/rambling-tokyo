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
        await main();
        const test = await prisma.test.findMany();
        return NextResponse.json({message : "succeed", test }, {status : 200});
    } catch (error) {
        return NextResponse.json({message : "error", error }, {status : 500});
    } finally {
        await prisma.$disconnect();
    }
};