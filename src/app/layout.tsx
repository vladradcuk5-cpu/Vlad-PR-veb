
import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Електронна бібліотека",
  description: "Каталог книг та заявки",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body>
        <header>
          <h1>Електронна бібліотека</h1>
          <nav>
            <Link href="/">Головна</Link>
            <Link href="/catalog">Каталог книг</Link>
            <Link href="/form">Заявка</Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <p>Електронна бібліотека © 2026</p>
        </footer>
      </body>
    </html>
  );
}
