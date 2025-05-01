import { NextResponse } from 'next/server';


export async function GET() {
    const response = await fetch (`${process.env.API}/categories`);
    const payload:APIResponse<PaginatedResponse<{categories:Category[]}>> = await response.json()

    return NextResponse.json(payload,{status:response.status})
}
