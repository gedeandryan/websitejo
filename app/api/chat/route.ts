import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { message, history } = body;

    // Ganti dengan URL API Endpoint dari Flowise Anda
    const FLOWISE_URL = "http://linux-tip-covered-murphy.trycloudflare.com/api/v1/prediction/8965e597-2bdb-4042-a8a2-51a2a5a56d91";

    const response = await fetch(FLOWISE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        question: message,
        streaming: false,
      }),
    });

    const data = await response.json();

    return NextResponse.json({
      text: data.text, // "text" adalah key default balasan dari Flowise
    });
  } catch (error) {
    console.error("Error calling Flowise:", error);
    return NextResponse.json(
      { error: "Gagal terhubung ke NATHBot" },
      { status: 500 }
    );
  }
}