import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const baseUrl = "https://api.vworld.kr/req/wfs"; // ← 수정 필요
  const urlParams = req.nextUrl.searchParams.toString();
  const fullUrl = `${baseUrl}?${urlParams}`;

  try {
    const response = await fetch(fullUrl);

    const contentType =
      response.headers.get("content-type") || "application/json";
    const body = await response.text();

    return new Response(body, {
      status: response.status,
      headers: {
        "Content-Type": contentType,
        "Access-Control-Allow-Origin": "*", // (선택) CORS 허용
      },
    });
  } catch (error: any) {
    return new Response(
      JSON.stringify({
        error: "WFS fetch failed",
        message: error.message,
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }
}
