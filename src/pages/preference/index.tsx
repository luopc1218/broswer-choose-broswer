import { Menu } from "antd";
import "./index.scss";

export const PreferenceIndex = () => {
  return (
    <div className="preferenceIndex">
      <Menu
        style={{ width: 256, height: "100%" }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        items={[
          {
            key: "preference",
            label: "设置",
            type: "group",
            children: [
              { key: "13", label: "Option 13" },
              { key: "14", label: "Option 14" },
            ],
          },
        ]}
      />
    </div>
  );
};

export default PreferenceIndex;
