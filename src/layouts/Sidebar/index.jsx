import React, { useState, useEffect } from "react";
import { SideBarStyle } from "./Sidebar.style";
import { Layout, Menu, Drawer } from "antd";
import HeaderWrapper from "../../components/HeaderWrapper";
import { Data } from "./sideBarData";
import history from "../../routers/history";
import "./style.css"

const { Content, Sider } = Layout;

export default function Sidebar(props) {
  const [heightSidebar, setHeightSideBar] = useState("100vh");
  const [activeTab, setActiveTab] = useState("/driver-management");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", updateHeightSidebar);
    return () => {
      window.removeEventListener("resize", updateHeightSidebar);
    };
  }, []);

  useEffect(() => {
    getTabActive();
  }, []);

  function getTabActive() {
    const routeTab = window.location.pathname;
    setActiveTab(routeTab);
  }

  function showDrawer() {
    setVisible(true);
  }
  function onClose() {
    setVisible(false);
  }

  const updateHeightSidebar = () => {
    let heightContent = window.document.getElementById("root").offsetHeight;
    let heightWindow = window.innerHeight;
    let height = heightWindow >= heightContent ? heightWindow : heightContent;
    setHeightSideBar(height);
  };

  const menuItem = (
    <Menu
      theme="light"
      mode="inline"
      selectedKeys={[activeTab]}
      defaultSelectedKeys={["/driver-management"]}
    >
      {Data.map((list, index) => {
        return (
          <Menu.Item
            key={list.path}
            icon={list.icon}
            onClick={() => history.push(list.path)}
          >
            {list.label}
          </Menu.Item>
        );
      })}
    </Menu>
  );
  return (
    <SideBarStyle>
      <div className="shipper">
        <HeaderWrapper showDrawer={showDrawer} />
        <Layout>
          <Sider
            className="shipper__sidebard"
            style={{ height: heightSidebar }}
          >
            {menuItem}
          </Sider>
          <Layout>
            <Content className="shipper__content">{props.children}</Content>
          </Layout>
        </Layout>
      </div>
      <Drawer
        title={""}
        placement="left"
        closable={true}
        onClose={onClose}
        visible={visible}
      >
        {menuItem}
      </Drawer>
    </SideBarStyle>
  );
}
