import React, { useState, useEffect } from "react";
import { SideBarStyle } from "./Sidebar.style";
import { Layout, Menu } from "antd";
import HeaderWrapper from "../../components/HeaderWrapper";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Data } from "./sideBarData";
import history from "../../routers/history";

const { Content, Sider } = Layout;

export default function Sidebar(props) {
  const [heightSidebar, setHeightSideBar] = useState("100vh");
  const [activeTab, setActiveTab] = useState('/driver-management')

  useEffect(() => {
    window.addEventListener("resize", updateHeightSidebar);
    return () => {
      window.removeEventListener("resize", updateHeightSidebar);
    };
  }, []);

  useEffect(() => {
      getTabActive()
  },[])

  function getTabActive () {
      const routeTab = window.location.pathname
      setActiveTab(routeTab)
  }


  const updateHeightSidebar = () => {
    let heightContent = window.document.getElementById("root").offsetHeight;
    let heightWindow = window.innerHeight;
    let height = heightWindow >= heightContent ? heightWindow : heightContent;
    setHeightSideBar(height);
  };

  return (
    <SideBarStyle>
      <div className="shipper">
        <HeaderWrapper />
        <Layout>
          <Sider
            className="shipper__sidebard"
            style={{ height: heightSidebar }}
          >
            <Menu theme="light" mode="inline" o  selectedKeys={[activeTab]} defaultSelectedKeys={["/driver-management"]}>
              {Data.map((list, index) => {
                return (
                  <Menu.Item key={list.path} icon={list.icon} onClick={()=>history.push(list.path)}>
                    {list.label}
                  </Menu.Item>
                );
              })}
            </Menu>
          </Sider>
          <Layout>
            <Content className="shipper__content">{props.children}</Content>
          </Layout>
        </Layout>
      </div>
    </SideBarStyle>
  );
}
