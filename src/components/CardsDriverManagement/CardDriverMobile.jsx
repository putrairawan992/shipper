import React from "react";
import { Card, Avatar, Typography } from "antd";
const { Meta } = Card;
const { Text } = Typography;

const CardDriverMobile = (props) => {
  const { item } = props;
  
  return (
    <Meta
      avatar={<Avatar src={item.picture.medium} />}
      // title="Card title"
      description={
        <>
          <Text type="secondary">Name Driver</Text>
          <Text strong style={{ display: "block" }}>
            {item.name.first}
          </Text>
          <Text type="secondary">Telepon</Text>
          <Text strong style={{ display: "block" }}>
            {item.phone}
          </Text>
        </>
      }
    />
  );
};

export default CardDriverMobile;
