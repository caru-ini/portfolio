import { Card } from "@/components/ui/card";
import { TriangleAlert } from "lucide-react";

type ErrorCardProps = {
  url: string;
};

export const ErrorCard = ({ url }: ErrorCardProps) => {
  const domain = new URL(url).hostname;

  return (
    <Card className="w-full max-w-2xl overflow-hidden border-border/40 bg-card/50 backdrop-blur-sm">
      <div className="flex h-40 items-center">
        <div className="flex-1 space-y-2 p-4">
          <div className="flex items-center gap-2 text-destructive">
            <TriangleAlert className="size-5" />
            <h2 className="text-base font-bold">読み込みに失敗しました</h2>
          </div>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="line-clamp-2 text-sm text-muted-foreground/90 hover:text-muted-foreground"
          >
            {url}
          </a>
          <p className="text-xs text-muted-foreground/70">{domain}</p>
        </div>
      </div>
    </Card>
  );
};
