import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Qif: take it easy :)",
  description: "Powerful filtering system for React.js applications",
  icons:
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWZsb3dlci0yIj48cGF0aCBkPSJNMTIgNWEzIDMgMCAxIDEgMyAzbS0zLTNhMyAzIDAgMSAwLTMgM20zLTN2MU05IDhhMyAzIDAgMSAwIDMgM005IDhoMW01IDBhMyAzIDAgMSAxLTMgM20zLTNoLTFtLTIgM3YtMSIvPjxjaXJjbGUgY3g9IjEyIiBjeT0iOCIgcj0iMiIvPjxwYXRoIGQ9Ik0xMiAxMHYxMiIvPjxwYXRoIGQ9Ik0xMiAyMmM0LjIgMCA3LTEuNjY3IDctNS00LjIgMC03IDEuNjY3LTcgNVoiLz48cGF0aCBkPSJNMTIgMjJjLTQuMiAwLTctMS42NjctNy01IDQuMiAwIDcgMS42NjcgNyA1WiIvPjwvc3ZnPg==",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
      >
        {children}
      </body>
    </html>
  );
}
