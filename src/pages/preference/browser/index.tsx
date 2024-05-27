import { Divider, Table } from "antd";

export const PreferenceBrowser = () => {
  return (
    <div>
      <Divider>浏览器</Divider>
      <Table
        columns={[
          {
            title: "名称",
          },
          {
            title: "路径",
          },
          {
            title: "启用",
          },
          {
            title: "操作",
          },
        ]}
      ></Table>
    </div>
  );
};

export default PreferenceBrowser;
