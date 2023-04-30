import { ReactNode } from "react";
import "./button.less";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Tooltip } from "antd";

interface ButtonProps {
  title?: string;
  width?: number | string;
  height?: number | string;
  fontSize?: number;
  color?: string;
  background?: string;
  icon?: ReactNode;
  onClick?: () => void;
}
function ButtonCustom(props: ButtonProps) {
  return (
    <button
      className="button-custom"
      onClick={props.onClick}
      style={{
        width: props.width ?? 100,
        height: props.height ?? 32,
        fontSize: props.fontSize,
        color: props.color ?? "var(--text-color)",
        background: props.background ?? "var(--component-background-lighten)",
      }}
    >
      <div className="button-icon">{props.icon}</div>
      {props.title}
    </button>
  );
}

export default ButtonCustom;
