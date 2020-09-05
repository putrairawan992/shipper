import React from "react";
import { Layout, Avatar, Typography, Row, Col, Button } from "antd";
import { UserOutlined, MenuOutlined } from "@ant-design/icons";
import LogoShipper from "../../assets/images/shipper-logo.png";

const { Header } = Layout;
const { Text } = Typography;

export default function HeaderWrapper({ showDrawer }) {
  return (
    <React.Fragment>
      <Header className="shipper__header">
        <Row>
          <Col xs={20} md={18}>
            <div className="shipper__header__logo">
              <Button
                type="primary"
                className="shipper__header__logo__button"
                onClick={showDrawer}
              >
                <MenuOutlined />
              </Button>
              <img src={LogoShipper} alt="" />
            </div>
          </Col>{" "}
          <Col xs={4} md={6}>
            <div className="shipper__header__icon-text">
              <Text strong className="shipper__header__icon-text__username">
                Hello,
                <Text strong type="danger">
                  Shipper User
                </Text>
              </Text>
              <Avatar size={35} icon={<UserOutlined />} />
            </div>{" "}
          </Col>
        </Row>
      </Header>
    </React.Fragment>
  );
}
