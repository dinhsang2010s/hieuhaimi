import { Form, Input } from "antd";
import "./style.less";

export const FilterComponent = () => {
  return (
    <div className="filter-component">
      <Form
        name="filter"
        layout="inline"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
      >
        <Form.Item label="Name" name="name">
          <Input />
        </Form.Item>
        <Form.Item label="Type" name="type">
          <Input />
        </Form.Item>
      </Form>
    </div>
  );
};
