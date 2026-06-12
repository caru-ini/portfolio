import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  title: string;
  description?: React.ReactNode;
  className?: string;
};

/** ホームの各セクション共通の見出しブロック。 */
export function SectionHeader({ title, description, className }: SectionHeaderProps) {
  return (
    <div className={cn("mb-8 max-w-2xl sm:mb-12", className)}>
      <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {description && <p className="leading-7 text-muted-foreground">{description}</p>}
    </div>
  );
}
