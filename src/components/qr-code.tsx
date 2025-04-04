"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { QrCode } from "lucide-react";
import Image from "next/image";

interface QRCodeProps {
  className?: string;
  buttonText?: string;
  modalTitle?: string;
}

export const QRCodeDisplay = ({
  className,
  buttonText = "QRコードを表示",
  modalTitle = "このページのQRコード",
}: QRCodeProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className={cn("flex items-center gap-2", className)}>
          <QrCode className="size-4" />
          {buttonText}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md rounded-lg">
        <div className="flex flex-col items-center gap-4">
          <DialogTitle className="text-lg font-medium">{modalTitle}</DialogTitle>
          <div className="relative aspect-square w-full max-w-[250px]">
            <Image
              src="/qrcode.svg"
              alt="QR Code"
              fill
              priority
              className="object-contain"
              style={{ filter: "contrast(1.05)" }}
            />
          </div>
          <p className="text-center text-sm text-muted-foreground">
            スマートフォンでスキャンするとこのページにアクセスできます
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
