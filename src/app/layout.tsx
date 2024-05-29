import "./globals.css"; // You can create a globals.css for additional global styles
import { ReactNode } from "react";
import ThemeRegistry from "./ThemeRegistry";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <head />
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
