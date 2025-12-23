import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Check, Download, FileText, ImageIcon, Palette, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const avatars = [
  {
    label: "アイコン アホ毛なし",
    filename: "avatar_noAhoge_cropped.png",
    description: "アイコンのアバター画像",
    type: "icon",
    category: "アイコン",
  },
  {
    label: "アイコン アホ毛あり",
    filename: "avatar_ahoge_cropped.png",
    description: "アイコンのアバター画像",
    type: "icon",
    category: "アイコン",
  },
  {
    label: "アホ毛あり",
    filename: "avatar_ahoge.png",
    description: "アホ毛ありのアバター画像",
    type: "normal",
    category: "全身",
  },
  {
    label: "アホ毛あり 透過背景",
    filename: "avatar_ahoge_trans.png",
    description: "アホ毛ありの透過背景のアバター画像",
    type: "normal",
    category: "透過背景",
  },
  {
    label: "アホ毛なし",
    filename: "avatar_noAhoge.png",
    description: "アホ毛なしのアバター画像",
    type: "normal",
    category: "全身",
  },
  {
    label: "アホ毛なし 透過背景",
    filename: "avatar_noAhoge_trans.png",
    description: "アホ毛なしの透過背景のアバター画像",
    type: "normal",
    category: "透過背景",
  },
  {
    label: "Caru.moe ロゴ",
    filename: "logo.svg",
    description: "Caru.moe ロゴ",
    type: "normal",
    category: "ロゴ",
  },
] as const;

const allowedUsages = [
  "Webサイト、ブログ、SNS等での活動紹介",
  "イベントの資料やコンテンツ",
  "その他、Caruの活動に関連する非営利目的での利用",
];

const prohibitedUsages = [
  "商用利用（本人が承諾した場合を除く）",
  "改変・再配布 (引き伸ばし、変形、比率の変更なども含む)",
  "本人や公式アカウントであると誤認させるような利用（フェイクアカウント、フェイクページなど）",
  "その他、Caruが不適切と判断する利用",
];

export default function PressKitPage() {
  return (
    <main className="flex flex-1 flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-950 dark:via-gray-900 dark:to-purple-950">
        <div className="container mx-auto max-w-5xl px-4 py-20 sm:py-24 lg:py-32">
          <div className="text-center">
            <div className="mb-6 inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900 dark:text-blue-300">
              <Palette className="mr-2 size-4" />
              Press Kit
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
              Caru Press Kit
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600 dark:text-gray-300 sm:text-xl">
              メディア掲載やイベント資料作成にご利用いただける
              <br />
              公式素材をまとめたプレスキットです
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" className="min-w-48">
                <Link href="/avatars/press_kit.zip" download>
                  <Download className="mr-2 size-5" />
                  プレスキットをダウンロード
                </Link>
              </Button>
              <p className="text-sm text-gray-500 dark:text-gray-400">ZIP形式 • 全素材同梱</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-5xl px-4 py-16">
        {/* Usage Guidelines Section */}
        <section className="mb-16" id="usage-conditions">
          <div className="mb-8 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
              利用ガイドライン
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-300">
              本プレスキットに含まれる素材をご利用いただくにあたり、以下の条件をご確認ください
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Allowed Usage */}
            <Card className="border-green-200 bg-green-50/50 dark:border-green-800 dark:bg-green-950/20">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-green-800 dark:text-green-200">
                  <Check className="mr-3 size-6 text-green-600" />
                  利用可能な用途
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {allowedUsages.map((usage, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="mt-1 size-4 shrink-0 text-green-600" />
                    <p className="text-sm text-green-700 dark:text-green-300">{usage}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Prohibited Usage */}
            <Card className="border-red-200 bg-red-50/50 dark:border-red-800 dark:bg-red-950/20">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-red-800 dark:text-red-200">
                  <X className="mr-3 size-6 text-red-600" />
                  利用禁止事項
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {prohibitedUsages.map((usage, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <X className="mt-1 size-4 shrink-0 text-red-600" />
                    <p className="text-sm text-red-700 dark:text-red-300">{usage}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 rounded-lg border bg-blue-50/50 p-6 dark:border-blue-800 dark:bg-blue-950/20">
            <div className="flex items-start gap-3">
              <FileText className="mt-1 size-5 shrink-0 text-blue-600" />
              <div className="space-y-2">
                <p className="font-medium text-blue-800 dark:text-blue-200">
                  詳細な利用規約について
                </p>
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  詳細につきましては、ダウンロードファイルに付属するreadme.txtをご確認ください。
                  その他、使用条件についてご不明な点がございましたら、お気軽にお問い合わせください。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Avatar Gallery Section */}
        <section className="mb-16" id="avatars">
          <div className="mb-8 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">アバター画像</h2>
            <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-300">
              用途に応じて選択できる、様々なバリエーションのアバター画像をご用意しています
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {avatars.map((avatar) => (
              <Card
                key={avatar.filename}
                className="group cursor-pointer overflow-hidden transition-all duration-300 hover:ring-1 hover:ring-ring"
              >
                <Link href={`/avatars/dist/${avatar.filename}`} download className="block">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg transition-colors group-hover:text-blue-600">
                        {avatar.label}
                      </CardTitle>
                      <div className="flex items-center gap-3">
                        <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                          {avatar.category}
                        </span>
                        <Download className="size-4 text-blue-600" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="relative aspect-square overflow-hidden rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
                      <Image
                        src={`/avatars/dist/${avatar.filename}`}
                        alt={avatar.label}
                        fill
                        className={cn(
                          "object-contain p-4 transition-transform duration-300 group-hover:scale-105",
                          {
                            "rounded-full": avatar.type === "icon",
                          }
                        )}
                      />
                      <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-blue-600/10 opacity-0 transition-opacity group-hover:opacity-100">
                        <div className="rounded-full bg-white/90 p-3 shadow-lg dark:bg-gray-800/90">
                          <Download className="size-6 text-blue-600" />
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-600 transition-colors group-hover:text-gray-800 dark:text-gray-400 dark:group-hover:text-gray-200">
                        {avatar.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <ImageIcon className="size-3" />
                          {avatar.filename.split(".")[1].toUpperCase()}形式
                        </div>
                        <div className="text-xs font-medium text-blue-600 opacity-0 transition-opacity group-hover:opacity-100">
                          クリックでダウンロード
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </section>

        {/* Download CTA Section */}
        <section className="rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-center text-white">
          <h3 className="mb-4 text-2xl font-bold">すべての素材をまとめてダウンロード</h3>
          <p className="mb-6 text-blue-100">
            上記のすべてのアバター画像と利用規約が含まれたZIPファイルをダウンロードできます
          </p>
          <Button asChild size="lg" variant="secondary" className="min-w-48 bg-white/100">
            <Link href="/avatars/press_kit.zip" download>
              <Download className="mr-2 size-5" />
              プレスキットをダウンロード
            </Link>
          </Button>
        </section>
      </div>

      <Footer />
    </main>
  );
}
