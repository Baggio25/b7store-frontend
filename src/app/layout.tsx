import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "B7Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body cz-shortcut-listen="true">{children}</body>
    </html>
  );
}
