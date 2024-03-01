import {
  Commissioner as FontSans,
  Bitter as FontSerif,
} from "next/font/google";
import "../styles/globals.css";
import { cn } from "../lib/utils";

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });
const fontSerif = FontSerif({ subsets: ["latin"], variable: "--font-serif" });

export const metadata = {
  title: "Rachel",
  description: "Biblioteca da Universidade Federal do Cariri",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontSerif.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
