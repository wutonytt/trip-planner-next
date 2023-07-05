"use client";

import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";

type Props = {
  session?: any;
  children?: React.ReactNode;
};

export function Providers({ session, children }: Props) {
  return (
    <ThemeProvider attribute="class">
      <SessionProvider session={session}>{children}</SessionProvider>
    </ThemeProvider>
  );
}
