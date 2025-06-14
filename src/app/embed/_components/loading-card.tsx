import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export const LoadingCard = () => {
  return (
    <Card className="group mx-auto w-full overflow-hidden border-border/40 bg-card/50 backdrop-blur-sm">
      <div className="flex h-[120px] items-center">
        <div className="flex-1 space-y-2 overflow-hidden p-4">
          <Skeleton className="h-7 w-3/4" />
          <Skeleton className="h-3 w-full" />
          <div className="flex items-center gap-2">
            <Skeleton className="size-4 rounded-full" />
            <Skeleton className="h-3 w-24" />
          </div>
        </div>
        <div className="relative h-[120px] w-full max-w-[230px] grow-0 overflow-hidden">
          <Skeleton className="size-full" />
        </div>
      </div>
    </Card>
  );
};
