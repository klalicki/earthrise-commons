import "./globals.scss";
import { Inter } from "next/font/google";
import ECHeader from "../components/layout/header/ECHeader";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Self Hosted Tina App",
  description: "A Next.js app with TinaCMS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ECHeader />
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
