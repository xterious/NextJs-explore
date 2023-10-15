import { ThemeProvider } from "@/components/ui/providers/theme-provider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kotion",
  description: "The connected workspace for your team",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: dark)",
        url: "/klogo.png",
        href: "/klogo.png",
      },
      {
        media: "(prefers-color-scheme: light)",
        url: "/kblack.png",
        href: "/kblack.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="kotion-theme-2"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
