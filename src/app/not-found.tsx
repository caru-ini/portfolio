import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col">
      <Header />
      <div className="container mx-auto flex flex-1 items-center justify-center px-4 pt-20">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-blue-400/10">
              <span className="text-4xl font-bold text-blue-400">?</span>
            </div>
            <CardTitle className="text-3xl font-bold">404</CardTitle>
            <CardDescription className="text-lg">お探しのページが見つかりません</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-center">
            <p className="text-muted-foreground">
              申し訳ございませんが、アクセスしようとしたページは存在しないか、
              移動または削除された可能性があります。
            </p>
            <div className="flex flex-col gap-2 sm:flex-row sm:justify-center">
              <Button asChild>
                <Link href="/">
                  <Home className="mr-2 size-4" />
                  ホームに戻る
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
