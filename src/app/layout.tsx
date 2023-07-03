import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { Providers } from "./provider";
import Navigator from "./navigator/Navigator";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Trip Planner",
  description: "Plan your next trip wisely",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className={inter.className} suppressHydrationWarning={true}>
        <Providers>
          <Navigator />
          {children}
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
