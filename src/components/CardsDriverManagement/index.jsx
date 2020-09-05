import React from "react";
import { EllipsisOutlined } from "@ant-design/icons";
import moment from "moment";
import { Card, Avatar, Col, Typography } from "antd";
import CardDriverMobile from "./CardDriverMobile";
import styled from "styled-components";
const { Text } = Typography;

export const StyledDiv = styled.div`
  & {
    display: flex;
  }
  @media only screen and (max-width: 900px) {
    display: none;
    flex-direction: column;
  }
`;

const CardsDriverManagement = (props) => {
  const { users } = props;
  return (
    <StyledDiv style={{ display: "flex" }}>
      {users.map((item, index) => {
        return (
          <Col xs={24} md={5}>
            <Card
              key={index}
              title={
                <div className="shipper__card__tittle">
                  <Text type="secondary">
                    Driver ID <Text type="danger">{item.id.name}</Text>{" "}
                  </Text>
                  <EllipsisOutlined key="ellipsis" />
                </div>
              }
              className="shipper__card"
              bordered={false}
            >
              <div className="shipper__cards-driver-hideMobile">
                <div>
                  <Avatar size={64} src={item.picture.medium} />
                </div>{" "}
                <Text type="secondary">Name Driver</Text>
                <Text strong style={{ display: "block" }}>
                  {item.name.first}
                </Text>
                <Text type="secondary">Telepon</Text>
                <Text strong style={{ display: "block" }}>
                  {item.phone}
                </Text>
                <Text type="secondary">Email</Text>
                <Text strong style={{ display: "block" }}>
                  {item.email}
                </Text>
                <Text type="secondary">Tanggal Lahir</Text>
                <Text strong style={{ display: "block" }}>
                  {moment(item.dob.date).format("MM-DD-YYYY")}
                </Text>
              </div>
              <div className="shipper__cards-driver-hideDesktop">
              <CardDriverMobile item={item} />
              </div>
            </Card>
          </Col>
        );
      })}
    </StyledDiv>
  );
};

export default CardsDriverManagement;
