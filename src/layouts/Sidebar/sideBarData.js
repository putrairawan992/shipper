import React from "react";
import {
  HomeOutlined,
  UserOutlined,
  CalendarOutlined
} from "@ant-design/icons";
import PATH_URL from "../../routers/path";

export const Data = [
  {
    label: "Beranda",
    icon: <HomeOutlined />,
    path: PATH_URL.HOME_BERANDA,
  },
  {
    label: "Driver Management",
    icon: <UserOutlined />,
    path: PATH_URL.DRIVER_MANAGEMENT,
  },
  {
    label: "Pick Up",
    icon: <CalendarOutlined />,
    path:PATH_URL.PICKUP
  }
];
