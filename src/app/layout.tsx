import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CyberGirls Alumni Network",
  description:
    "The alumni network for graduates of the CyberSafe Foundation CyberGirls programme — a community of young women trained in cybersecurity across Nigeria.",
  openGraph: {
    title: "CyberGirls Alumni Network",
    description:
      "A community of young women trained in cybersecurity. Alumni services, resources, and more.",
    siteName: "CyberGirls Alumni",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geist.className} antialiased`}>{children}</body>
    </html>
  );
}
