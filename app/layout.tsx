// app/layout.tsx
import "./globals.css";
import { ThemeProvider } from "next-themes";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import DarkVeil from "@/components/DarkVeil";
import { AuthProvider } from "./context/AuthContext";
export const metadata: Metadata = {
  title: "AI Notes",
  description: "Intelligent notes powered by AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-black">
        {" "}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
        >
          <AuthProvider>
            <div
              style={{ width: "100%", height: "600px", position: "relative" }}
            >
              <DarkVeil />
            </div>{" "}
            <div className="absolute top-0 w-full">
              {" "}
              <Navbar />
              {children}
              <Footer />{" "}
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
