import "./globals.css";
import { Inter } from "next/font/google";
import AuthProvider from "@/components/AuthProvider";

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
      <body className={inter.className} suppressHydrationWarning={true}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
