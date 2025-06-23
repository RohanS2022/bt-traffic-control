import React, { useState } from "react";
import {
  AimOutlined,
  LeftOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  MobileOutlined,
  RightOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";

const { Header, Sider, Content } = Layout;

type Props = {
  showDrawer: () => void;
};

const Sidebar: React.FC<Props> = ({ showDrawer }) => {
  const [collapsed, setCollapsed] = useState(true);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const setSelected = (key: string) => {
    setSelectedItems([key]);
  };

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo-vertical">
        <Button
          type="text"
          icon={collapsed ? <RightOutlined /> : <LeftOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: "16px",
            width: 24,
            height: 24,
            color: "gray",
            float: "right",
            margin: "auto",
          }}
        />
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        selectedKeys={selectedItems}
        items={[
          {
            key: "1",
            icon: <AimOutlined />,
            label: "map",
            onClick: ({ key }) => setSelected(key),
          },
          {
            key: "2",
            icon: <MobileOutlined />,
            label: "mobile",
            onClick: () => showDrawer(),
          },
        ]}
      />
    </Sider>
  );
};

export default Sidebar;
