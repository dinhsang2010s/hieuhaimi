import { Layout, Space, Tag } from "antd";
import Table, { ColumnsType } from "antd/es/table";
import { FunctionComponent, TableComponent } from "../../components";
import { DeleteOutlined } from "@ant-design/icons";
import "./style.less";

export interface DataType {
  id: string;
  name: string;
  updatedTime: Date;
  updatedBy: string;
  roles: string[];
}

const columns: ColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "UpdatedBy",
    dataIndex: "updatedBy",
    key: "updatedBy",
  },
  {
    title: "UpdatedTime",
    dataIndex: "updatedTime:",
    key: "updatedTime",
  },
  {
    title: "Roles",
    key: "roles",
    dataIndex: "roles",
    render: (_, { roles }) => (
      <>
        {roles.map((r) => {
          let color = r.length > 5 ? "geekblue" : "green";
          if (r === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={r}>
              {r.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <FunctionComponent style={{ fontSize: 15 }} title="Category" />
    ),
  },
];

const data: DataType[] = [
  {
    id: "1",
    name: "John Brown",
    updatedBy: "dev",
    updatedTime: new Date(),
    roles: ["nice", "developer"],
  },
  {
    id: "2",
    name: "Jim Green",
    updatedBy: "dev",
    updatedTime: new Date(),
    roles: ["nice", "developer"],
  },
  {
    id: "3",
    name: "Joe Black",
    updatedBy: "dev",
    updatedTime: new Date(),
    roles: [
      "nice",
      "developer",
      "opdeveloper",
      "dadeveloper",
      "axdeveloper",
      "wcdeveloper",
      "wgdeveloper",
      "wddeveloper",
    ],
  },
];

export const Category = () => {
  return <TableComponent columns={columns} dataSource={data} />;
};
