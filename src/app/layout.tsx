import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Testimonials App",
  description: "A testimonials grid built with Next.js and Tailwind CSS",
  icons: {
    icon: "/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className="font-barlow bg-light-grayish-blue"
      >
        {children}
      </body>
    </html>
  );
}
