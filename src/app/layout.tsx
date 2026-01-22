import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.css";

export const metadata: Metadata = {
  title: "Swopna Chitra",
  description: "Swopna Chitra Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ height: "300vh" }}>{children}</body>
    </html>
  );
}
