import { Menu } from "antd";
import type { MenuClickEventHandler } from "rc-menu/lib/interface";
import "./index.scss";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

export const PreferenceIndex = () => {
  const nacigate = useNavigate();
  const location = useLocation();

  const handleSwitchRoute: MenuClickEventHandler = ({ key }) => {
    nacigate(key);
  };

  return (
    <div className="preferenceIndex">
      <Menu
        className="menu"
        selectedKeys={[location?.pathname]}
        mode="inline"
        items={[
          {
            key: "preference",
            label: "偏好设置",
            type: "group",
            children: [
              { key: "/preference/general", label: "通用" },
              { key: "/preference/browser", label: "浏览器" },
              { key: "/preference/about", label: "关于" },
            ],
          },
        ]}
        onClick={handleSwitchRoute}
      />
      <div className="content">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default PreferenceIndex;
