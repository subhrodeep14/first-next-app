import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma=new PrismaClient();

export async function POST(req:NextRequest,res:NextResponse) {
  
  
    const data=await req.json();
    console.log(data);
    const user=await prisma.user.create({
        data:{
            name:data.username,
            password:data.password,
            email:data.email
        }
    });

    return NextResponse.json({ message: "Sign up" });
}