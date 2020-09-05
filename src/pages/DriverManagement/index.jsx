import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Random from "../../repository/Random";
import HeaderDriverManagement from "../../components/HeaderDriverManagement";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Card, Avatar, Row, Col, Typography } from "antd";
import moment from "moment";
import { DriverManagementStyle } from "./DriverManagement.style";

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  slidesToShow: 5,
};

const { Text } = Typography;

function DriverManagement(props) {
  const [randomUser, setRandomUser] = useState([]);
  const [search, setSearch] = useState("");
  let refSlider = React.createRef();
  useEffect(() => {
    fetchDataDriverManagement();
  }, []);
  async function fetchDataDriverManagement() {
    let response = await Random.getUser({
      params: { results: 30 },
    });
    if (response.status === 200) {
      setRandomUser(response.data.results);
    }
  }
  function actionChangeSearch(e) {
    setSearch(e.target.value);
  }

  function next() {
    refSlider.slickNext();
  }
  function previous() {
    refSlider.slickPrev();
  }

  const lowercasedFilter = search.toLowerCase();
  const filteredSearch = randomUser.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key].toString().toLowerCase().includes(lowercasedFilter)
    );
  });
  const slides = filteredSearch.map((item, index) => {
      console.log(index);
    return (
      <Col md={5}>
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
          style={{ width: 200, marginRight: 15 }}
          bordered={false}
        >
          <div>
            <Avatar size={64} src={item.picture.medium} />
          </div>{" "}
          <Text type="secondary">Name Driver</Text>
          <Text strong style={{ display: "block" }}>
            {item.name.first}
          </Text>
          <Text type="secondary">Telepon</Text>
          <Text strong style={{ display: "block" }}>
            {" "}
            {item.phone}
          </Text>{" "}
          <Text type="secondary">Email</Text>
          <Text strong style={{ display: "block" }}>
            {" "}
            {item.email}
          </Text>
          <Text type="secondary">Tanggal Lahir</Text>
          <Text strong style={{ display: "block" }}>
            {moment(item.dob.date).format("MM-DD-YYYY")}{" "}
          </Text>
        </Card>
      </Col>
    );
  });
  return (
    <DriverManagementStyle>
      <div className="shipper">
        <HeaderDriverManagement actionChangeSearch={actionChangeSearch} />
        <Slider ref={(c) => (refSlider = c)} {...settings}>
          
          {slides}
        </Slider>{" "}
        <div style={{ textAlign: "center" }}>
          <button className="button" onClick={previous}>
            Previous
          </button>
          <button className="button" onClick={next}>
            Next
          </button>
        </div>
      </div>
    </DriverManagementStyle>
  );
}

export default DriverManagement;
