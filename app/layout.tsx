import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useAudioStore } from "@/stores/audioStore";

const font = Cairo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "القرآن الكريم",
  description: "Listen to Quran",
  icons: {
    icon: "/icon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={font.className}>
        {/* this is header element */}
        <section>
          <Header />
        </section>
        {children}
        <section>
          <Footer />
        </section>
      </body>
    </html>
  );
}
