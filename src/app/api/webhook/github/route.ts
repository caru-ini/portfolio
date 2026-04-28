import { env } from "@/env";
import crypto from "node:crypto";
import { revalidatePath, revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const webhookPayloadSchema = z.object({
  ref: z.string().optional(),
  repository: z
    .object({
      full_name: z.string(),
    })
    .optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const signature = request.headers.get("x-hub-signature-256");

    if (!signature) {
      return NextResponse.json({ error: "Missing signature" }, { status: 401 });
    }

    const expectedSignature = `sha256=${crypto
      .createHmac("sha256", env.GITHUB_WEBHOOK_SECRET)
      .update(body)
      .digest("hex")}`;

    if (!crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expectedSignature))) {
      return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
    }

    const payload = webhookPayloadSchema.parse(JSON.parse(body));

    if (payload.ref === "refs/heads/main" && payload.repository) {
      console.log(`Revalidating cache for repository: ${payload.repository.full_name}`);
      revalidateTag("posts", "max");
      revalidatePath("/", "layout");

      return NextResponse.json(
        {
          message: "Cache revalidated successfully",
          repository: payload.repository.full_name,
          timestamp: new Date().toISOString(),
        },
        { status: 200 }
      );
    }

    return NextResponse.json({ message: "No action needed", event: payload.ref }, { status: 200 });
  } catch (error) {
    console.error("Webhook processing error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
