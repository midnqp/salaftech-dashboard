import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
//import { ThemeProvider } from '@mui/material/styles';
//import { CssBaseline } from '@mui/material';
//import theme from '../theme';
//import Layout from '../components/Layout';

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
}); 

export const metadata: Metadata = {
  title: "NUPEM Dashboard",
  description: "A clear look at the key details and structure",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
            {children}
      </body>
    </html>
  );
}
