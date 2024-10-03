import type { Metadata } from "next";
import "../styles/style.scss";

export const metadata: Metadata = {
  title: "TV Program",
  description: "Tv program vytvořený Danielem Cvejnem (https://github.com/dancvejn)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body className="w-full h-full bg-slate-300">
        {children}
      </body>
    </html>
  );
}
