---
name: designs-sync
description: "Keep the internal design reference page (src/app/designs/page.tsx) in sync whenever a shadcn/ui component (or any primitive under src/components/ui/) is added, updated, or removed in this portfolio repo. Trigger this skill whenever the user runs `shadcn add`, `bunx shadcn@latest add`, `pnpm dlx shadcn`, or `npx shadcn` for ANY component; whenever a new file is created under src/components/ui/; whenever a UI primitive's variants/sizes/props change in a way that should be visible in the showcase; or whenever the user mentions adding/installing a UI component, primitive, or shadcn block. Even if the user only asks to install the component, proactively offer to add it to /designs — the design reference page exists to mirror every primitive in the codebase, so a new primitive without a /designs entry is a drift bug."
---

# designs-sync

`src/app/designs/page.tsx` is an **internal, dev-only design reference**. It is excluded from `robots.txt` and marked `noindex`. Its purpose is to render every UI primitive in `src/components/ui/` in one place so we can:

- Eyeball every variant/size/state in both light and dark mode
- Catch design-token regressions
- Onboard contributors quickly to "what we have"

**The page must mirror what's in `src/components/ui/`.** A primitive in the codebase that is missing from `/designs` is drift — fix it.

## When to act

Act whenever any of the following happens:

- A new file appears under `src/components/ui/` (e.g. `src/components/ui/badge.tsx`)
- `shadcn add <component>` (any flavour: `bunx shadcn@latest add ...`, `pnpm dlx`, `npx`) is run
- An existing primitive gains/loses a variant, size, or prop that meaningfully changes its visual surface
- A primitive is removed or renamed

Don't ask permission for the showcase update — bundle it into the same change. If the user only asked you to "install Badge", install it AND add a Badge section in `/designs`, and mention it in your reply: "Also added a Badge showcase section to `/designs`."

If the change is a tiny tweak that doesn't alter the visible surface (e.g. internal refactor, a11y attribute), you can skip the showcase update — but say so explicitly so the user can override.

## How `/designs` is structured

Read `src/app/designs/page.tsx` before editing it — patterns there are load-bearing. Key conventions:

1. **Server component by default.** Add `"use client"` only when the showcase itself needs interactivity that can't be expressed declaratively. Most primitives (Dialog, DropdownMenu, etc.) work fine inside a server component because Radix handles the client boundary internally.
2. **`<Section title description>` wrapper.** Every primitive gets its own `<Section>`. Title is the primitive name (e.g. "Buttons", "Badge"). Description is one short Japanese sentence about scope or notable variants — keep it factual, not marketing.
3. **Group by axis.** Inside a section, group examples by *axis of variation*: variants, sizes, states, with-icon, etc. Label each group with a `<p className="mb-2 font-mono text-xs text-muted-foreground">…</p>` caption. This makes diffs in the showcase obvious when a new variant is added later.
4. **Show every public variant and size** declared in the primitive's `cva` config (or equivalent). If the primitive exports `buttonVariants`, every value of `variant` and `size` should appear at least once.
5. **Show meaningful states.** `disabled`, `loading`, `error`, `with icon`, `asChild` — whatever applies. Skip states that don't exist.
6. **Wrap examples in a card-like container.** The current pattern is `<div className="… rounded-lg border border-border bg-card p-6">…</div>` for flat showcases, or actual `<Card>` for grid layouts. Match nearby sections.
7. **Lucide icons** for generic icons; `react-icons/si` only for brand icons (already used in the page). Don't introduce new icon libraries just for the showcase.
8. **Order in the page**: keep related primitives near each other. Rough current order is *Colors → Typography → Buttons → Cards → Avatar → Skeleton → Overlays (Dialog/DropdownMenu) → Radius/Shadow*. Insert new primitives in a sensible neighborhood (e.g. `Badge` next to `Buttons`; `Tooltip` next to `Overlays`).

## Adding a new primitive: step-by-step

1. **Read the primitive file** (`src/components/ui/<name>.tsx`) to enumerate its variants, sizes, and notable props.
2. **Read `src/app/designs/page.tsx`** to see existing sections and find the right insertion point.
3. **Add the import** at the top of `page.tsx`, grouped with the other `@/components/ui/*` imports (alphabetical is fine but match what's already there).
4. **Write a `<Section>` block** following the conventions above. Aim for ~15–40 lines per section. If a primitive needs more (e.g. complex states), that's fine — readability beats brevity.
5. **Don't add `"use client"`** to `page.tsx` itself. If your showcase needs client state (rare), extract it into a sibling file like `src/app/designs/<name>-demo.tsx` with its own `"use client"`, the way `theme-toggle.tsx` is done.
6. **Verify nothing broke**: `bunx tsc --noEmit` (per repo convention — `bunx`, not `npx`).
7. **Mention the showcase update in your reply** so the user knows it happened.

## Removing or renaming a primitive

If a primitive is deleted from `src/components/ui/`, delete its `<Section>` from `page.tsx` and remove the import. Renames: rename both. Don't leave orphan imports.

## Example: minimal section template

```tsx
<Section title="Badge" description="ステータスやカテゴリラベル用の小さな表示。">
  <div className="space-y-4 rounded-lg border border-border bg-card p-6">
    <div>
      <p className="mb-2 font-mono text-xs text-muted-foreground">variants</p>
      <div className="flex flex-wrap items-center gap-2">
        <Badge>Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="destructive">Destructive</Badge>
      </div>
    </div>
  </div>
</Section>
```

This is the shape to copy. Adjust groups (`variants`, `sizes`, `states`, etc.) to whatever axes the primitive actually has — don't fabricate variants that don't exist.

## Anti-patterns

- Don't reinvent the section wrapper — reuse `<Section>` defined in `page.tsx`.
- Don't show only the "default" variant. The whole point is comparing variants side-by-side.
- Don't write English-only descriptions. The page already mixes JP/EN; match the tone.
- Don't add screenshots or images of the component — render the real component.
- Don't gate the showcase behind any flag, env var, or auth. It's a static reference.
- Don't put the showcase update behind "I'll do it next time" — drift compounds. Same PR, same commit.

## Why this skill exists

The `/designs` page was set up specifically so we can spot regressions in design tokens (light/dark themes, shadows, radii) and so future contributors can see every primitive at a glance. Each missing primitive erodes both. Treat the showcase as part of the primitive's contract: a primitive is not "done" until it appears in `/designs`.
