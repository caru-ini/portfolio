import { env } from "@/env";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url);

    const pathParts = url.pathname.split("/");

    const imagesIdx = pathParts.findIndex((part) => part === "images");
    if (
      imagesIdx === -1 ||
      !pathParts[imagesIdx + 1] ||
      !pathParts[imagesIdx + 2] ||
      pathParts.length <= imagesIdx + 3
    ) {
      return NextResponse.json({ error: "Invalid image path" }, { status: 400 });
    }
    const owner = pathParts[imagesIdx + 1];
    const repo = pathParts[imagesIdx + 2];
    const imagePath = pathParts.slice(imagesIdx + 3).join("/");

    const githubUrl = `https://raw.githubusercontent.com/${owner}/${repo}/main/${imagePath}`;

    const response = await fetch(githubUrl, {
      headers: {
        Authorization: `Bearer ${env.GITHUB_TOKEN}`,
        "User-Agent": "Portfolio-App",
      },
    });

    if (!response.ok) {
      if (response.status === 404) {
        return NextResponse.json({ error: "Image not found" }, { status: 404 });
      }
      throw new Error(`GitHub API responded with ${response.status}`);
    }

    const contentType = response.headers.get("content-type") || "image/jpeg";
    const imageBuffer = await response.arrayBuffer();

    return new NextResponse(imageBuffer, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=86400, s-maxage=86400",
        "CDN-Cache-Control": "public, max-age=86400",
        "Vercel-CDN-Cache-Control": "public, max-age=86400",
      },
    });
  } catch (error) {
    console.error("Error proxying image:", error);
    return NextResponse.json({ error: "Failed to fetch image" }, { status: 500 });
  }
}
