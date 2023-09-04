import "./globals.css";
import type { Metadata } from "next";
import { Cairo } from "next/font/google";

const cairo = Cairo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SUBID DAS - Weframe",
  description: "SUBID DAS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cairo.className}>{children}</body>
    </html>
  );
}
