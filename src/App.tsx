import React, { useState } from "react";
import "./App.css";
import Map from "./components/map/Map";
import { Button, Layout, theme } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import Sidebar from "./components/side-bar/Sidebar";
import Mobile from "./components/mobile/Mobile";

const { Header, Sider, Content } = Layout;

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [open, setOpen] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="main-test">
      <div className="test">
        <Sidebar showDrawer={showDrawer} />
        <Mobile open={open} onClose={onClose} />
      </div>
      <div className="my-container">
        <Map />
      </div>
    </div>
  );
};

export default App;
