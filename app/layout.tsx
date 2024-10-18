import type { Metadata } from "next";
import "./globals.css";


// For Layout Components
import { Navbar } from "./layout/Navbar/Navbar";
import { Footer } from "./layout/Footer/Footer";

export const metadata: Metadata = {
  title: {
    template: "%s - Easy Games",
    default: "Easy Games",
  },
  description: "Where Every Move Matters",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
