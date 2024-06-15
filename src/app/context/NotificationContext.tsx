import {
  NotificationTabsProps,
  NotificationsContextProps,
} from "@/types/types";
import axios from "axios";
import { ReactNode, createContext, useContext, useEffect } from "react";
import { useForm } from "react-hook-form";

const NotificationsContext = createContext<
  NotificationsContextProps | undefined
>(undefined);

export const useNotifications = () => {
  const context = useContext(NotificationsContext);
  if (!context) {
    throw new Error(
      "useNotifications must be used within a NotificationsProvider"
    );
  }
  return context;
};

export const NotificationsProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const notificationsForm = useForm<NotificationTabsProps>({
    defaultValues: {
      notifications: [],
    },
  });

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get("/api/notifications");
        notificationsForm.setValue("notifications", response.data);
      } catch (error) {
        console.error("Error fetching notifications: ", error);
      }
    };

    fetchNotifications();
  }, [notificationsForm]);

  return (
    <NotificationsContext.Provider value={{ notificationsForm }}>
      {children}
    </NotificationsContext.Provider>
  );
};
