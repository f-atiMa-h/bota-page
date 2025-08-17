import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bota page",
  description: "Deployed on Vercel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="grid md:grid-cols-3"
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
