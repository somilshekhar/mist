import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Mist — Fine Dining Japanese Restaurant",
  description:
    "Experience the art of Japanese cuisine at The Mist. From delicate sashimi to signature rolls, every dish is crafted with precision. Where Japanese hospitality meets modern elegance.",
  keywords: [
    "Japanese restaurant",
    "sushi",
    "sashimi",
    "fine dining",
    "The Mist",
    "ramen",
    "Japanese cuisine",
  ],
  openGraph: {
    title: "The Mist — Fine Dining Japanese Restaurant",
    description:
      "Experience the art of Japanese cuisine at The Mist. Where tradition meets modern elegance.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
