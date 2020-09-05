import React from "react";
import { Layout, Avatar, Typography } from "antd";
import { UserOutlined } from "@ant-design/icons";
import LogoShipper from "../../assets/images/shipper-logo.png";

const { Header } = Layout;
const { Text } = Typography;

export default function HeaderWrapper(props) {
  return (
    <Header className="shipper__header">
      <div className="shipper__header__logo">
        <img src={LogoShipper} alt="" />
      </div>
      <div className="shipper__header__icon-text">
        <Text strong className="shipper__header__icon-text__username">
          Hello,
          <Text strong type="danger">
            Shipper User
          </Text>
        </Text>
        <Avatar size={35} icon={<UserOutlined />} />
      </div>
    </Header>
  );
}
