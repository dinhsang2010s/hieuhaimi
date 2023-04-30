import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import "./style.less";

const { Content } = Layout;

export const ContentComponent = () => {
  return (
    <Content className="content-component bg-component-background">
      <Outlet />
    </Content>
  );
};
