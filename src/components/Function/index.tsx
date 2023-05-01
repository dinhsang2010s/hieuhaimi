import { DeleteOutlined, EditOutlined, StarOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";

interface FuncProps {
  title?: string;
  style?: React.CSSProperties;
  onDelete?: () => void;
  onEdit?: () => void;
  onFavourite?: () => void;
}

export const FunctionComponent = (props: FuncProps) => {
  return (
    <div className="function-component flex w-full h-full" style={props.style}>
      <Tooltip className="pr-2" title={`Favourite ${props.title ?? ""}`}>
        <StarOutlined onChange={props.onFavourite} />
      </Tooltip>
      <Tooltip className="pr-2" title={`Edit ${props.title ?? ""}`}>
        <EditOutlined onChange={props.onEdit} />
      </Tooltip>
      <Tooltip title={`Delete ${props.title ?? ""}`}>
        <DeleteOutlined onChange={props.onDelete} />
      </Tooltip>
    </div>
  );
};
