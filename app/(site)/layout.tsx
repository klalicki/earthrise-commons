"use client";
import type { ReactNode } from "react";
import "./styles.scss";

import ECHeader from "../../components/layout/ECHeader/ECHeader";
import { Grid, Column } from "@carbon/react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ECHeader></ECHeader>
        <main className="cds--content">
          <Grid>
            <Column sm={4} md={6} lg={8} xlg={8}>
              {children}
            </Column>
          </Grid>
        </main>
      </body>
    </html>
  );
}
