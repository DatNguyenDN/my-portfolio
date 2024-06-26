import Header from "@/components/Header";
import { ModeToggle } from "@/components/mode-toggle";
import { ThemeProvider } from "@/components/theme-provider";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dat Dev | Personal Portfolio",
  description: "Hello, welcome to my portfolio ",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className}  relative pt-28 sm:pt-36`}>
        {/* <div className="bg-[#fbe2e3] absolute top-[6rem] right-[11rem]] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="bg-[#dbd7fb] absolute top-[6rem] right-[11rem]] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div> */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Toaster position="top-center" />
            <ModeToggle />
          </ActiveSectionContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
