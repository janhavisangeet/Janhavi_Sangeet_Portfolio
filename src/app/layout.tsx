import { Sidebar } from "@/components/Sidebar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "next-themes";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Janhavi Sangeet - Full Stack Developer",
  description:
    "I am an MCA graduate with MERN stack skills, strong problem-solving ability, and a willingness to learn. I am motivated, adaptable, and eager to contribute to the organization while growing professionally.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={twMerge(
          inter.className,
          "flex antialiased h-screen overflow-hidden bg-neutral-100 dark:bg-black transition-colors duration-300",
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Sidebar />

          <div className="lg:p-3 flex-1 overflow-y-auto">
            <div
              className="
                flex-1
                min-h-screen
                bg-white
                dark:bg-neutral-950
                lg:rounded-tl-3xl
                border
                border-transparent
                lg:border-neutral-200
                dark:lg:border-neutral-800
                overflow-y-auto
                transition-colors
                duration-300
              "
            >
              {children}

              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
