import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

type EmbedCardProps = {
  url: string;
  metadata: {
    title?: string;
    description?: string;
    banner?: string;
  };
};

export const EmbedCard = async ({ url, metadata }: EmbedCardProps) => {
  const domain = new URL(url).hostname;
  const faviconUrl = `https://s2.googleusercontent.com/s2/favicons?domain=${domain}&sz=32`;

  const getFaviconUrl = async (url: string) => {
    const res = await fetch(url, {
      cache: "force-cache",
    });
    const buffer = await res.arrayBuffer();
    const base64 = Buffer.from(buffer).toString("base64");
    return `data:image/png;base64,${base64}`;
  };

  const getBannerDataUrl = async (url: string) => {
    const res = await fetch(url, {
      cache: "force-cache",
    });
    const buffer = await res.arrayBuffer();
    const base64 = Buffer.from(buffer).toString("base64");
    return `data:image/png;base64,${base64}`;
  };

  return (
    <Card className="group mx-auto w-full overflow-hidden border-border/40 bg-card/50 backdrop-blur-sm transition-colors duration-200 hover:bg-muted/50">
      <Link
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-[120px] items-center"
        prefetch={false}
      >
        <div className="flex-1 space-y-2 overflow-hidden p-4">
          <h2 className="line-clamp-1 text-lg font-bold leading-tight">
            {metadata.title ?? "タイトルなし"}
          </h2>
          {metadata.description && (
            <p className="line-clamp-1 text-xs text-muted-foreground/90">{metadata.description}</p>
          )}
          <div className="flex items-center gap-2 text-xs text-muted-foreground/70">
            <div className="relative size-4 overflow-hidden rounded-full ring-1 ring-border/50">
              <Image
                src={await getFaviconUrl(faviconUrl)}
                alt={`${domain} favicon`}
                fill
                className="object-cover"
              />
            </div>
            {domain}
          </div>
        </div>
        {metadata.banner && (
          <div className="relative h-[120px] w-full max-w-[230px] grow-0 overflow-hidden">
            <Image
              src={await getBannerDataUrl(metadata.banner)}
              alt={metadata.title ?? ""}
              fill
              className="size-full object-cover"
            />
          </div>
        )}
      </Link>
    </Card>
  );
};
