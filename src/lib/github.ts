import { env } from "@/env";

/**
 * GitHubリポジトリのスター数を取得する。取得できない場合はnullを返す。
 * @param repoUrl リポジトリのURL (例: https://github.com/owner/repo)
 */
export async function getRepoStars(repoUrl: string): Promise<number | null> {
  const repoPath = new URL(repoUrl).pathname.replace(/^\/+|\/+$/g, "");

  try {
    const res = await fetch(`https://api.github.com/repos/${repoPath}`, {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${env.GITHUB_TOKEN}`,
      },
      next: { revalidate: 7200 },
    });
    if (!res.ok) return null;

    const data = (await res.json()) as { stargazers_count?: number };
    return data.stargazers_count ?? null;
  } catch {
    return null;
  }
}
