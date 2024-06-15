"use client";
import { ThemeProvider } from "@emotion/react";
import { ReactNode } from "react";
import Navbar from "./components/Navbar";
import {
  NotificationsProvider,
  useNotifications,
} from "./context/NotificationContext";
import "./styles/globals.css";
import theme from "./styles/theme";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="pt">
      <head />
      <body>
        <ThemeProvider theme={theme}>
          <NotificationsProvider>
            <LayoutContent>
              {children}
            </LayoutContent>
          </NotificationsProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};

const LayoutContent = ({ children }: { children: ReactNode }) => {
  const { notificationsForm } = useNotifications();
  const notifications = notificationsForm.watch('notifications');

  return (
    <>
      <Navbar notifications={notifications} />
      {children}
    </>
  );
};

export default RootLayout;
