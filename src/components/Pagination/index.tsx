import { Pagination, PaginationProps } from "antd";
import "./style.less";

interface PaginationComponentProps extends PaginationProps {
  total: number;
}

export const PaginationComponent = (props: PaginationComponentProps) => {
  const { total } = props;
  return (
    <Pagination
      {...props}
      className="pagination text-text-color"
      total={total}
      showSizeChanger
      showQuickJumper
      showTotal={(total) => `Total ${total} items`}
    />
  );
};
