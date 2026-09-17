import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: "Trevor的宠物店 | 干净、蓬松、刚刚好",
  description:
    "Trevor的宠物店位于广州番禺新桥村，专注犬猫洗护、造型修剪和皮肤护理，提供一对一预约服务。",
  keywords: ["宠物洗护", "宠物美容", "狗狗洗护", "猫咪洗护", "广州番禺"],
  openGraph: {
    title: "Trevor的宠物店 | 干净、蓬松、刚刚好",
    description:
      "专业犬猫洗护、造型修剪与皮肤护理，一宠一室，全预约制。",
    locale: "zh_CN",
    type: "website",
    images: ["/assets/hero-grooming.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#073a36",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
