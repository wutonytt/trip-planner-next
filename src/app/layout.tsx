import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { Providers } from "./provider";
import Navigator from "./navigator/Navigator";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/authOptions";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Trip Planner",
  description: "Plan your next trip wisely",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <head />
      <body className={inter.className} suppressHydrationWarning={true}>
        <Providers session={session}>
          <Navigator />
          {children}
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
