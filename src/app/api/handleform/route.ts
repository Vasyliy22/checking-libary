import { NextResponse } from "next/server";

export async function GET(){
    const data = {
        userId: "45",
        userName: "Vasyl",
        email: "vasyl.dev@gmail.com",
        password: "21414134",
        lang: "ua"
    }

    return NextResponse.json({data})
}

export async function POST(req: any) {
  const data = await req.json();

  return NextResponse.json(data)
}
