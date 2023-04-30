import { Button, Input, Layout, Tooltip } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "./style.less";
interface HeaderProps {
  collapsed: boolean;
  onChangeCollapsed: () => void;
}

const { Header } = Layout;
const { Search } = Input;

export const HeaderComponent = (props: HeaderProps) => {
  return (
    <Header className="header-component bg-body-background">
      <Button
        type="text"
        icon={
          props.collapsed ? (
            <MenuUnfoldOutlined className="text-primary-color" />
          ) : (
            <MenuFoldOutlined className="text-primary-color" />
          )
        }
        onClick={props.onChangeCollapsed}
        style={{
          fontSize: "16px",
          width: 64,
          height: 64,
        }}
      />
      <div className="flex justify-center items-center">
        <Search
          className="search-input search-input-antd"
          placeholder="Search..."
        />
        <Tooltip title="System admin">
          <Button className="system-admin  mr-5 ml-4" icon={<UserOutlined />} />
        </Tooltip>
      </div>
    </Header>
  );
};
