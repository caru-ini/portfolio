import { env } from "@/env";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { owner: string; repo: string; path: string[] } }
) {
  try {
    const { owner, repo, path } = params;
    const imagePath = path.join("/");

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
        "Cache-Control": "public, max-age=86400, s-maxage=86400", // 24 hours
        "CDN-Cache-Control": "public, max-age=86400",
        "Vercel-CDN-Cache-Control": "public, max-age=86400",
      },
    });
  } catch (error) {
    console.error("Error proxying image:", error);
    return NextResponse.json({ error: "Failed to fetch image" }, { status: 500 });
  }
}
