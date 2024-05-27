import { Divider, Button, message } from "antd";
import logoPng from "@/assets/logo192.png";
import "./index.scss";
import useMount from "@/hooks/useMount";

export const PreferenceAbout = () => {
  useMount(() => {
    console.log("test");
  });

  const handleCheckUpdates = () => {};

  return (
    <div className="preferenceAbout">
      <Divider>关于</Divider>
      <h1 className="title">broswer-choose-broswer</h1>
      <img className="logo" src={logoPng} alt="" />
      <div className="version">版本：v0.0.1</div>
      <Button onClick={handleCheckUpdates}>检查更新</Button>
    </div>
  );
};

export default PreferenceAbout;
