import { Table } from "antd";
import "./style.less";

interface TableProps {
  columns?: any;
  dataSource?: any;
  style?: React.CSSProperties;
}

export const TableComponent = (props: TableProps) => {
  const { columns, dataSource, style } = props;
  return (
    <div>
      <Table
        style={style}
        columns={columns}
        dataSource={dataSource}
        pagination={false}
      />
    </div>
  );
};
