import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import { UserOutlined, VideoCameraOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import "./style.less";
const { Sider } = Layout;
const menu = [
  {
    key: "user",
    icon: <UserOutlined />,
    label: "User",
  },
  {
    key: "category",
    icon: <VideoCameraOutlined />,
    label: "Category",
  },
];

interface SiderProps {
  collapsed: boolean;
}

export const SiderComponent = (props: SiderProps) => {
  const location = useLocation();
  return (
    <Sider width={250} trigger={null} collapsible collapsed={props.collapsed}>
      <div className="logo bg-component-background text-primary-color flex justify-center">
        <FontAwesomeIcon icon={faGear} />
        <h1>ADMIN</h1>
      </div>
      <Menu
        className="menu bg-component-background"
        mode="inline"
        defaultSelectedKeys={["user"]}
        selectedKeys={[location.pathname.split("/")?.[1] ?? ""]}
      >
        {menu.map((m: any) => (
          <Menu.Item key={m.key} icon={m.icon}>
            <Link className="flex items-center" to={m.key}>
              {m.label}
            </Link>
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  );
};
