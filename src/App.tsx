import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  InfoCircleOutlined,
  SearchOutlined,
  DownOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import {
  Layout,
  Menu,
  Button,
  ConfigProvider,
  Input,
  Tooltip,
  MenuProps,
  Dropdown,
  Space,
  Pagination,
} from "antd";
import "./App.less";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { Footer } from "antd/es/layout/layout";

const { Header, Sider, Content } = Layout;
const items: MenuProps["items"] = [
  {
    label: <a href="https://www.antgroup.com">1st menu item</a>,
    key: "0",
  },
  {
    label: <a href="https://www.aliyun.com">2nd menu item</a>,
    key: "1",
  },
  {
    type: "divider",
  },
  {
    label: "3rd menu item",
    key: "3",
  },
];

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#0bb197",
        },
      }}
    >
      <div className="App h-screen w-screen">
        <Layout className="layout-main h-full">
          <Sider width={250} trigger={null} collapsible collapsed={collapsed}>
            <div className="logo bg-component-background text-primary-color flex justify-center">
              <FontAwesomeIcon icon={faGear} />
              <h1>ADMIN</h1>
            </div>
            <Menu
              className="menu bg-component-background text-text-color"
              mode="inline"
              items={[
                {
                  key: "1",
                  icon: <UserOutlined />,
                  label: "nav 1",
                },
                {
                  key: "2",
                  icon: <VideoCameraOutlined />,
                  label: "nav 2",
                },
                {
                  key: "3",
                  icon: <UploadOutlined />,
                  label: "nav 3",
                },
              ]}
            />
          </Sider>
          <Layout className="component bg-body-background">
            <Header className="header-component bg-body-background">
              <Button
                type="text"
                icon={
                  collapsed ? (
                    <MenuUnfoldOutlined className="text-primary-color" />
                  ) : (
                    <MenuFoldOutlined className="text-primary-color" />
                  )
                }
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  fontSize: "16px",
                  width: 64,
                  height: 64,
                }}
              />
            </Header>
            <Content className="content-component bg-component-background">
              Content
            </Content>
            <Footer className="footer-component bg-body-background">
              <Pagination
                total={25}
                showSizeChanger
                showQuickJumper
                showTotal={(total) => `Total ${total} items`}
              />
            </Footer>
          </Layout>
        </Layout>
      </div>
    </ConfigProvider>
  );
};

export default App;
