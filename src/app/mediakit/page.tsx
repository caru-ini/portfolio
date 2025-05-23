import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Download, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const avatars = [
  {
    label: "スタンダード",
    filename: "avatar.png",
    description: "スタンダードなアバター画像",
  },
  {
    label: "透過背景",
    filename: "avatar_transparent.png",
    description: "透過背景のアバター画像",
  },
  {
    label: "45°回転",
    filename: "avatar_rotate.png",
    description: "45°回転したアバター画像",
  },
  {
    label: "45°回転 透過背景",
    filename: "avatar_rotate_transparent.png",
    description: "45°回転した透過背景のアバター画像",
  },
];

export default function MediaKitPage() {
  return (
    <main className="flex flex-1 flex-col">
      <Header />
      <div className="flex flex-1 flex-col items-center justify-center py-24">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="mb-8 flex items-center justify-between">
            <h1 className="text-3xl font-bold">Media Kit</h1>
            <Button asChild>
              <Link href="/avatars/avatars.zip" download>
                <Download className="mr-2 size-4" />
                ダウンロード
              </Link>
            </Button>
          </div>
          <section className="mb-8 space-y-3" id="usage-conditions">
            <h2 className="mb-4 text-xl font-bold">利用条件</h2>
            <p>
              本メディアキットに含まれる素材をご利用いただくにあたり、以下の条件をご確認ください。
            </p>
            <div className="flex flex-col gap-2 rounded-md bg-green-100 p-4">
              <p className="text-lg font-bold">以下の用途にご利用いただけます。</p>
              <ul className="pl-5 [&>li]:flex [&>li]:items-center">
                <li>
                  <Check className="mr-2 size-4" />
                  Webサイト、ブログ、SNS等での活動紹介
                </li>
                <li>
                  <Check className="mr-2 size-4" />
                  イベントの資料やコンテンツ
                </li>
                <li>
                  <Check className="mr-2 size-4" />
                  その他、Caruの活動に関連する非営利目的での利用
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-2 rounded-md bg-red-100 p-4">
              <p className="text-lg font-bold">以下の用途にはご利用いただけません。</p>
              <ul className="pl-5 [&>li]:inline-flex [&>li]:items-center">
                <li>
                  <X className="mr-2 size-4 shrink-0" />
                  商用利用（本人が承諾した場合を除く）
                </li>
                <li>
                  <X className="mr-2 size-4 shrink-0" />
                  改変・再配布 (引き伸ばし、変形、比率の変更なども含む)
                </li>
                <li>
                  <X className="mr-2 size-4 shrink-0" />
                  本人や公式アカウントであると誤認させるような利用（フェイクアカウント、フェイクページなど）
                </li>
                <li>
                  <X className="mr-2 size-4 shrink-0" />
                  その他、Caruが不適切と判断する利用
                </li>
              </ul>
            </div>
            <p className="text-sm">
              詳細につきましては、ファイルに付属するreadme.txtをご確認ください。
            </p>
            <p className="text-sm">
              その他、使用条件についてご不明な点がございましたら、お気軽にお問い合わせください。
            </p>
          </section>
          <section className="mb-8 space-y-3" id="avatars">
            <h2 className="mb-4 text-xl font-bold">アバター画像</h2>
            <p>以下のアバター画像をご利用いただけます。</p>
            <div className="grid w-full max-w-4xl grid-cols-1 gap-8 md:grid-cols-3">
              {avatars.map((avatar) => (
                <Card key={avatar.filename} className="flex flex-col items-center">
                  <CardHeader className="items-center">
                    <CardTitle>{avatar.label}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col items-center">
                    <Avatar className="mb-4 size-32">
                      <Image
                        src={`/avatars/${avatar.filename}`}
                        alt={avatar.label}
                        className="size-full object-contain"
                        width={128}
                        height={128}
                      />
                    </Avatar>
                    <span className="text-center text-sm text-muted-foreground">
                      {avatar.description}
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
