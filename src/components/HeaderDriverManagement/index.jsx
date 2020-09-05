import React from "react";
import { Row, Col, Typography, Card, Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const HeaderDriverManagement = (props) => {
  const { actionChangeSearch } = props;
  return (
    <Card>
      <Row>
        <Col xs={24} md={16}>
          <Title level={2} type="danger" style={{ marginBottom: 0 }}>
            DRIVER MANAGEMENT
          </Title>
          <Text>Data driver yang bekerja dengan anda</Text>
        </Col>
        <Col xs={24} md={8}>
          <Input
            size="large"
            placeholder="Cari Driver"
            onChange={actionChangeSearch}
            style={{ width: 200, marginRight: 15 }}
            prefix={<SearchOutlined style={{ color: "#e62b34" }} />}
          />
          <Button type="primary" danger size={"large"}>
            TAMBAH DRIVER +
          </Button>
        </Col>
      </Row>
    </Card>
  );
};

export default HeaderDriverManagement;
