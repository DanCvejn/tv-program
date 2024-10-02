import type { Metadata } from "next";

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
      <body>
        {children}
      </body>
    </html>
  );
}
