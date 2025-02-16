import "./globals.scss";
import { Work_Sans, Inter } from "next/font/google";
import ECHeader from "../components/layout/header/ECHeader";
const inter = Inter({ subsets: ["latin"] });
const workSans = Work_Sans({ subsets: ["latin-ext"] });

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
      <body className={workSans.className}>
        <ECHeader />
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
