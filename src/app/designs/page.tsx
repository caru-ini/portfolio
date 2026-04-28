import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Skeleton } from "@/components/ui/skeleton";
import type { Metadata } from "next";
import { ChevronDown, ExternalLink, Mail, Plus, Trash } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

export const metadata: Metadata = {
  title: "Design Reference",
  description: "Internal design system reference (development only).",
  robots: {
    index: false,
    follow: false,
  },
};

const tokens = [
  { name: "background", desc: "ページ全体の背景" },
  { name: "foreground", desc: "標準テキスト色" },
  { name: "card", desc: "カードの背景" },
  { name: "card-foreground", desc: "カード上のテキスト" },
  { name: "popover", desc: "ポップオーバー背景" },
  { name: "popover-foreground", desc: "ポップオーバー上のテキスト" },
  { name: "primary", desc: "ブランド/メインアクション" },
  { name: "primary-foreground", desc: "primary上のテキスト" },
  { name: "secondary", desc: "サブアクション" },
  { name: "secondary-foreground", desc: "secondary上のテキスト" },
  { name: "muted", desc: "弱めの背景" },
  { name: "muted-foreground", desc: "弱めのテキスト" },
  { name: "accent", desc: "アクセント (hover等)" },
  { name: "accent-foreground", desc: "accent上のテキスト" },
  { name: "destructive", desc: "破壊的アクション" },
  { name: "destructive-foreground", desc: "destructive上のテキスト" },
  { name: "border", desc: "境界線" },
  { name: "input", desc: "入力欄の境界" },
  { name: "ring", desc: "フォーカスリング" },
  { name: "brand-pink", desc: "ブランドピンク (.moe アクセント)" },
];

const charts = ["chart-1", "chart-2", "chart-3", "chart-4", "chart-5"];

function Section({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-4">
      <div className="space-y-1 border-b border-border pb-2">
        <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
        {description && <p className="text-sm text-muted-foreground">{description}</p>}
      </div>
      {children}
    </section>
  );
}

function Swatch({ token, desc }: { token: string; desc?: string }) {
  const isForeground = token.includes("foreground");
  const pairToken = isForeground ? token.replace("-foreground", "") : `${token}-foreground`;
  return (
    <div className="overflow-hidden rounded-lg border border-border">
      <div
        className="flex h-20 items-center justify-center"
        style={{
          backgroundColor: `hsl(var(--${isForeground ? pairToken : token}))`,
          color: `hsl(var(--${isForeground ? token : pairToken}))`,
        }}
      >
        <span className="font-mono text-xs">Aa</span>
      </div>
      <div className="space-y-0.5 bg-card p-2">
        <code className="block font-mono text-xs text-foreground">--{token}</code>
        {desc && <p className="text-xs text-muted-foreground">{desc}</p>}
      </div>
    </div>
  );
}

export default function DesignsPage() {
  return (
    <main className="container mx-auto max-w-5xl space-y-12 px-4 py-10">
      <header className="flex flex-col gap-4 border-b border-border pb-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-1">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Internal / Development
          </p>
          <h1 className="font-poppins text-4xl font-bold tracking-tight">Design Reference</h1>
          <p className="text-sm text-muted-foreground">
            このページは開発時のデザイン確認用です。プロダクション公開はされません
            (robots.txtで除外/noindex)。
          </p>
        </div>
        <ThemeToggle />
      </header>

      <Section title="Colors" description="HSL CSS変数ベースのセマンティックトークン。">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {tokens.map((t) => (
            <Swatch key={t.name} token={t.name} desc={t.desc} />
          ))}
        </div>
        <div>
          <h3 className="mb-2 text-sm font-medium text-muted-foreground">Chart palette</h3>
          <div className="grid grid-cols-5 gap-3">
            {charts.map((c) => (
              <div key={c} className="overflow-hidden rounded-lg border border-border">
                <div className="h-16" style={{ backgroundColor: `hsl(var(--${c}))` }} aria-hidden />
                <div className="bg-card p-2">
                  <code className="font-mono text-xs">--{c}</code>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section
        title="Brand Pink Accent"
        description="--brand-pink。caru.moe の .moe ホバー色から派生したブランドアクセント。ハイライト/装飾に少量使用。"
      >
        <div className="space-y-4 rounded-lg border border-border bg-card p-6">
          <div>
            <p className="mb-2 font-mono text-xs text-muted-foreground">as text</p>
            <p className="font-poppins text-2xl font-bold">
              <span className="text-foreground">caru</span>
              <span className="text-brandPink">.moe</span>
            </p>
          </div>
          <div>
            <p className="mb-2 font-mono text-xs text-muted-foreground">as background</p>
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-brandPink px-3 py-1 text-xs font-medium text-brandPink-foreground">
                NEW
              </span>
              <span className="rounded-md bg-brandPink/20 px-2 py-1 text-xs text-foreground">
                bg-brandPink/20
              </span>
              <span className="rounded-md border border-brandPink px-2 py-1 text-xs text-brandPink">
                border + text
              </span>
            </div>
          </div>
          <div>
            <p className="mb-2 font-mono text-xs text-muted-foreground">underline / decoration</p>
            <p className="text-base">
              これは{" "}
              <span className="underline decoration-brandPink decoration-2 underline-offset-4">
                強調したい部分
              </span>{" "}
              です。
            </p>
          </div>
        </div>
      </Section>

      <Section title="Typography" description="poppins (見出し用) と base (本文)。">
        <div className="space-y-3 rounded-lg border border-border bg-card p-6">
          <div>
            <p className="mb-1 font-mono text-xs text-muted-foreground">
              h1 / font-poppins / 5xl-7xl
            </p>
            <h1 className="font-poppins text-5xl font-bold tracking-tight md:text-7xl">Caru</h1>
          </div>
          <div>
            <p className="mb-1 font-mono text-xs text-muted-foreground">h2 / 2xl</p>
            <h2 className="text-2xl font-semibold tracking-tight">セクション見出し</h2>
          </div>
          <div>
            <p className="mb-1 font-mono text-xs text-muted-foreground">h3 / xl</p>
            <h3 className="text-xl font-semibold">サブ見出し</h3>
          </div>
          <div>
            <p className="mb-1 font-mono text-xs text-muted-foreground">body / base</p>
            <p>
              本文テキスト。日本語と English mix で問題なく読めることを確認します。 The quick brown
              fox jumps over the lazy dog. 0123456789
            </p>
          </div>
          <div>
            <p className="mb-1 font-mono text-xs text-muted-foreground">muted / sm</p>
            <p className="text-sm text-muted-foreground">
              補足テキスト。説明やキャプション、メタ情報など。
            </p>
          </div>
          <div>
            <p className="mb-1 font-mono text-xs text-muted-foreground">code</p>
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">
              const greeting = &quot;hello&quot;;
            </code>
          </div>
        </div>
      </Section>

      <Section title="Buttons" description="cva variants + sizes。">
        <div className="space-y-4 rounded-lg border border-border bg-card p-6">
          <div>
            <p className="mb-2 font-mono text-xs text-muted-foreground">variants</p>
            <div className="flex flex-wrap items-center gap-2">
              <Button>Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
              <Button variant="destructive">Destructive</Button>
            </div>
          </div>
          <div>
            <p className="mb-2 font-mono text-xs text-muted-foreground">sizes</p>
            <div className="flex flex-wrap items-center gap-2">
              <Button size="sm">Small</Button>
              <Button>Default</Button>
              <Button size="lg">Large</Button>
              <Button size="icon" aria-label="add">
                <Plus className="size-4" />
              </Button>
            </div>
          </div>
          <div>
            <p className="mb-2 font-mono text-xs text-muted-foreground">with icon / states</p>
            <div className="flex flex-wrap items-center gap-2">
              <Button className="gap-2">
                <Mail className="size-4" />
                Send
              </Button>
              <Button variant="outline" className="gap-2">
                <ExternalLink className="size-4" />
                Open
              </Button>
              <Button variant="destructive" className="gap-2">
                <Trash className="size-4" />
                Delete
              </Button>
              <Button disabled>Disabled</Button>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Cards">
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>標準のカード</CardTitle>
              <CardDescription>Header / Content / Footer の構成例。</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                カード内のコンテンツ領域です。テキストやリスト、フォームなどを配置します。
              </p>
            </CardContent>
            <CardFooter className="gap-2">
              <Button size="sm">Primary</Button>
              <Button size="sm" variant="outline">
                Cancel
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>シンプルなカード</CardTitle>
              <CardDescription>Footer なし。</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src="/avatar.webp" alt="Caru" />
                  <AvatarFallback>CA</AvatarFallback>
                </Avatar>
                <div className="space-y-0.5">
                  <p className="text-sm font-medium">Caru</p>
                  <p className="text-xs text-muted-foreground">caru-ini</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section title="Avatar">
        <div className="flex flex-wrap items-end gap-4 rounded-lg border border-border bg-card p-6">
          <div className="space-y-2 text-center">
            <Avatar className="size-8">
              <AvatarImage src="/avatar.webp" alt="" />
              <AvatarFallback>CA</AvatarFallback>
            </Avatar>
            <p className="font-mono text-xs text-muted-foreground">size-8</p>
          </div>
          <div className="space-y-2 text-center">
            <Avatar>
              <AvatarImage src="/avatar.webp" alt="" />
              <AvatarFallback>CA</AvatarFallback>
            </Avatar>
            <p className="font-mono text-xs text-muted-foreground">default</p>
          </div>
          <div className="space-y-2 text-center">
            <Avatar className="size-16">
              <AvatarImage src="/avatar.webp" alt="" />
              <AvatarFallback>CA</AvatarFallback>
            </Avatar>
            <p className="font-mono text-xs text-muted-foreground">size-16</p>
          </div>
          <div className="space-y-2 text-center">
            <Avatar className="size-16">
              <AvatarFallback>CA</AvatarFallback>
            </Avatar>
            <p className="font-mono text-xs text-muted-foreground">fallback</p>
          </div>
        </div>
      </Section>

      <Section title="Skeleton">
        <div className="space-y-3 rounded-lg border border-border bg-card p-6">
          <Skeleton className="h-8 w-1/2" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <div className="flex items-center gap-3 pt-2">
            <Skeleton className="size-10 rounded-full" />
            <div className="flex-1 space-y-2">
              <Skeleton className="h-3 w-1/3" />
              <Skeleton className="h-3 w-1/2" />
            </div>
          </div>
        </div>
      </Section>

      <Section title="Overlays" description="Dialog / DropdownMenu の動作確認。">
        <div className="flex flex-wrap items-center gap-3 rounded-lg border border-border bg-card p-6">
          <Dialog>
            <DialogTrigger asChild>
              <Button>Open Dialog</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>サンプルダイアログ</DialogTitle>
                <DialogDescription>
                  Radix Dialog ベース。フォーカストラップとアニメーションの確認用。
                </DialogDescription>
              </DialogHeader>
              <p className="text-sm text-muted-foreground">
                ダイアログ本文。スクロールや長文時の挙動はここで確認できます。
              </p>
              <DialogFooter>
                <Button variant="outline">Cancel</Button>
                <Button>Confirm</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-2">
                Menu
                <ChevronDown className="size-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                Profile
                <DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                Settings
                <DropdownMenuShortcut>⌘,</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive focus:text-destructive">
                <Trash className="size-4" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </Section>

      <Section title="Radius & Shadow">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { name: "rounded-sm", cls: "rounded-sm" },
            { name: "rounded-md", cls: "rounded-md" },
            { name: "rounded-lg", cls: "rounded-lg" },
            { name: "rounded-full", cls: "rounded-full" },
          ].map((r) => (
            <div key={r.name} className="space-y-2 text-center">
              <div className={`h-16 border border-border bg-muted ${r.cls}`} />
              <code className="font-mono text-xs text-muted-foreground">{r.name}</code>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { name: "shadow-sm", cls: "shadow-sm" },
            { name: "shadow", cls: "shadow" },
            { name: "shadow-md", cls: "shadow-md" },
            { name: "shadow-lg", cls: "shadow-lg" },
          ].map((s) => (
            <div key={s.name} className="space-y-2 text-center">
              <div className={`h-16 rounded-lg bg-card ${s.cls}`} />
              <code className="font-mono text-xs text-muted-foreground">{s.name}</code>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}
