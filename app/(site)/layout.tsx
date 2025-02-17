import type { ReactNode } from "react";
import "./styles.scss";

import ECHeader from "../../components/layout/ECHeader/ECHeader";
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ECHeader></ECHeader>
        {children}
      </body>
    </html>
  );
}
