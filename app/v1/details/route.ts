import { NextResponse } from "next/server";

export async function GET() {

    return NextResponse.json({
        name: 'John Doe',
        email: 'subhrodeep@14ncd',
        password: 'password'
    })
}

export async function PUT() {

    return NextResponse.json({
        name: 'John Doe put',
        email: 'subhrodeep@14ncd'
    })
}
export async function POST() {

    return NextResponse.json({
        name: 'John Doe post',
        email: 'subhrodeep@14ncd'
    })
}
export async function DELETE() {

    return NextResponse.json({
        name: 'John Doe delete',
        email: 'subhrodeep@14ncd'
    })
}
  