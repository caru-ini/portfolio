import { env } from "@/env/server";
import { BLOG_CONFIG } from "@/lib/config";
import { getArticle } from "@/lib/github-blog";
import { ImageResponse } from "next/og";
import { cache } from "react";

export const alt = "Caru's Blog";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

interface ImageProps {
  params: Promise<{ slug: string }>;
}

const getFont = async (params: { query: string; weight: string }) => {
  const endpoint = new URL("https://www.googleapis.com/webfonts/v1/webfonts");
  endpoint.searchParams.set("family", params.query);
  endpoint.searchParams.set("key", env.GOOGLE_FONTS_API_KEY);

  const fontInfo = await fetch(endpoint).then((res) => res.json());
  const fontResponse = await fetch(fontInfo.items[0].files[params.weight]);
  const fontBuffer = await fontResponse.arrayBuffer();

  return fontBuffer;
};

export default async function Image({ params }: ImageProps) {
  const { slug } = await params;

  const mPlus1p = await getFont({ query: "M PLUS 1p", weight: "700" });
  const poppins = await getFont({ query: "Poppins", weight: "700" });

  const cachedArticle = cache(async (slug: string) => {
    return await getArticle({
      owner: BLOG_CONFIG.OWNER,
      repo: BLOG_CONFIG.REPO,
      slug,
      githubToken: env.GITHUB_TOKEN,
    });
  });

  const article = await cachedArticle(slug);

  if (!article) {
    return new ImageResponse(<div style={{ display: "flex" }}>Article not found</div>, { ...size });
  }

  return new ImageResponse(
    (
      <div
        style={{
          backgroundColor: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        {/* タグ - 右上 */}
        <div
          style={{
            position: "absolute",
            top: "32px",
            right: "32px",
            display: "flex",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "16px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXRhZy1pY29uIGx1Y2lkZS10YWciPjxwYXRoIGQ9Ik0xMi41ODYgMi41ODZBMiAyIDAgMCAwIDExLjE3MiAySDRhMiAyIDAgMCAwLTIgMnY3LjE3MmEyIDIgMCAwIDAgLjU4NiAxLjQxNGw4LjcwNCA4LjcwNGEyLjQyNiAyLjQyNiAwIDAgMCAzLjQyIDBsNi41OC02LjU4YTIuNDI2IDIuNDI2IDAgMCAwIDAtMy40MnoiLz48Y2lyY2xlIGN4PSI3LjUiIGN5PSI3LjUiIHI9Ii41IiBmaWxsPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4="
              height={36}
              width={36}
              alt="Tag"
            />
            {article.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  backgroundColor: "#e5e7eb",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  paddingTop: "12px",
                  paddingBottom: "12px",
                  borderRadius: "8px",
                  fontSize: "28px",
                  color: "#374151",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* タイトル - 中央左寄せ */}
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            paddingLeft: "48px",
            marginTop: "50px",
          }}
        >
          <div
            style={{
              fontSize: "70px",
              color: "#1f2937",
              fontWeight: "bold",
              maxWidth: "1024px",
            }}
          >
            {article.title}
          </div>
        </div>

        {/* 底部のコンテンツ */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            padding: "32px",
          }}
        >
          {/* 左下: アバター + Caru */}
          <div style={{ display: "flex", alignItems: "center" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://avatars.githubusercontent.com/u/166897461?s=1000&v=4`}
              alt="Caru Avatar"
              width={100}
              height={100}
              style={{ borderRadius: "50%", marginRight: "16px" }}
            />
            <div
              style={{
                fontSize: "60px",
                color: "#374151",
                fontWeight: "bold",
                fontFamily: "Poppins",
              }}
            >
              Caru
            </div>
          </div>

          {/* 右下: Caru.moe */}
          <div
            style={{
              fontSize: "60px",
              color: "#374151",
              fontWeight: "bold",
              fontFamily: "Poppins",
              display: "flex",
            }}
          >
            <span style={{ color: "#63aeea" }}>Caru</span>.
            <span style={{ color: "#f9a8d4" }}>moe</span>
          </div>
        </div>
        {/* 最下部 カラーバー */}
        <div
          style={{
            backgroundColor: "#63aeea",
            height: "16px",
            width: "100%",
            position: "absolute",
            bottom: 0,
          }}
        />
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "M PLUS 1p",
          data: mPlus1p,
          style: "normal",
          weight: 700,
        },
        {
          name: "Poppins",
          data: poppins,
          style: "normal",
          weight: 700,
        },
      ],
    }
  );
}
