import { Kanit } from "next/font/google";
import "./globals.css";
// 1. นำเข้า LanguageProvider
import { LanguageProvider } from "@/app/context/LanguageContext"; 
import VisitorTracker from "@/app/components/VisitorTracker";

const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["latin", "thai"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "My Portfolio",
  description: "Tanakorn Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <body className={`${kanit.variable} font-sans antialiased`}>
        {/* 2. ครอบ children ด้วย Provider */}
        <LanguageProvider>
          <VisitorTracker />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}