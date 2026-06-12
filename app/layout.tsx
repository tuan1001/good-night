import type { Metadata, Viewport } from "next";
import { Quicksand, Dancing_Script } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({
  subsets: ["latin", "vietnamese"],
  variable: "--font-quicksand",
  display: "swap",
});

const dancing = Dancing_Script({
  subsets: ["latin", "vietnamese"],
  variable: "--font-dancing",
  display: "swap",
});

export const metadata: Metadata = {
  // Để trung tính, không lộ thông tin khi gửi link ra ngoài.
  // Tên người nhận chỉ hiện BÊN TRONG web (chữ ký), không nằm ở đây.
  title: "🌙",
  description: " ",
};

export const viewport: Viewport = {
  themeColor: "#0b0723",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className={`${quicksand.variable} ${dancing.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
