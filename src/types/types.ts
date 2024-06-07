// HOME

export interface HomeData {
  date: string;
  running: [number, number];
  scripting: number;
  audience: any;
  credits: { [key: string]: number };
  myResearches: MyResearch[];
}

export interface MonthlyResumeProps {
  date: string;
  running: [number, number];
  scripting: number;
  audience: any;
}

export interface MontlyResumeCardProps {
  data: any;
  dataType: string;
}

export interface CircleIndicatorProps {
  count: [number, number];
}

export interface FillingBarProps {
  numerator: number;
  denominator: number;
}

export interface MyResearchesCarouselProps {
  myResearches: MyResearch[];
}

export type MyResearchCardProps = {
  myResearch: MyResearch;
};

interface MyResearch {
  name: string;
  id: number;
  status: string;
}

export type DashboardCreditProps = {
  credits: { [key: string]: number };
};

export type DashboardCreditCardProps = {
  title: string;
  value: any;
};

export type ContactsCardProps = {
  contacts: number;
};

export type SendedBalanceCardProps = {
  audience: {
    sended: number;
    balance: number;
  };
};

// NOTIFICATION

export interface NotificationCardProps {
  notification: {
    comments: number;
    read: boolean;
    mensage: string;
  };
}

export interface NotificationData {
  comments: number;
  read: boolean;
  mensage: string;
  id: string;
  createdAt: string;
}

export interface NotificationTabsProps {
  notifications: NotificationData[];
}

export interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

type MenuItemType = string;

export interface NavbarProps {
  menuItems: MenuItemType[];
  notifications: NotificationData[];
}
