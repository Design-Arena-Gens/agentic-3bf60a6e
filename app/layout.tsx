import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"]
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  style: ["normal"]
});

export const metadata: Metadata = {
  title: "Machine Learning Primer: Linear vs Logistic",
  description:
    "World-class beginner-friendly notes explaining linear and logistic regression in simple Hinglish with visuals."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${sourceSerif.variable} bg-sand text-ink antialiased`}>
        {children}
      </body>
    </html>
  );
}
