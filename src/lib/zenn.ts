import { generateWithGemini } from "@/lib/ai";
import { cache } from "react";
import Parser from "rss-parser";

export interface ZennArticleItem {
  title: string;
  link: string;
  isoDate: string;
  description: string;
  image: string;
}
// Instantiate the parser
const parser = new Parser<object, ZennArticleItem>();

const generateWithGeminiCached = cache(generateWithGemini);

const getZennFeed = async (feedUrl: string) => {
  // when cacheLife() added in stable, uncomment this
  // "use cache";
  // cacheLife("hours");
  const feed = await parser.parseURL(feedUrl);
  return feed;
};

/**
 * Fetches and parses the Zenn RSS feed.
 * @param feedUrl The URL of the Zenn RSS feed.
 * @returns An array of article objects, or an empty array if fetching/parsing fails.
 */
export async function getZennArticles(feedUrl: string): Promise<ZennArticleItem[]> {
  try {
    const feed = await getZennFeed(feedUrl);
    // Ensure items exist and map them, providing default values if needed
    const descriptions = await Promise.all(
      feed.items.map(async (item) => {
        return await generateWithGeminiCached({
          instructions: `## Instructions
            以下の記事の技術的な詳細や重要なポイントについてまとめた簡潔な説明を書いてください。
            筆者について書く必要はありません。
            出力はプレーンテキストで、日本語(敬体)で記述してください。を含め、100文字以内に収めてください。この要約は筆者"かる(@caru_ini)"のサイトの一部として使用されます。`,
          input: item.contentSnippet ?? "",
        });
      })
    );
    return (
      feed.items?.map((item, index) => ({
        title: item.title ?? "タイトルなし",
        link: item.link ?? "https://zenn.dev/caru",
        isoDate: item.isoDate,
        description: descriptions[index],
        image: item.enclosure?.url ?? "",
      })) || []
    );
  } catch (error) {
    console.error("Error fetching or parsing Zenn RSS feed:", error);
    return [];
  }
}
