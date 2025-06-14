import metaFetcher from "meta-fetcher";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { EmbedCard } from "./_components/embed-card";
import { ErrorCard } from "./_components/error-card";

type Props = {
  searchParams: Promise<{
    url?: string;
  }>;
};

export const generateMetadata = (): Metadata => {
  return {
    robots: {
      index: false,
      follow: false,
    },
    title: "Embed",
    description: "Embed",
  };
};

export default async function EmbedPage({ searchParams }: Props) {
  const { url } = await searchParams;
  if (!url) {
    notFound();
  }

  try {
    const metadata = await metaFetcher(url);
    return <EmbedCard url={url} metadata={metadata.metadata} />;
  } catch {
    return <ErrorCard url={url} />;
  }
}
