import * as path from "path";
const { app, BrowserWindow } = require("electron");

app.on("ready", () => {
  const preferenceWindow = new BrowserWindow({
    width: 800,
    height: 500,
  });
  preferenceWindow.loadFile(path.join(__dirname, "./index.html"));
  //   打开控制台
  //   preferenceWindow.webContents.openDevTools()

  preferenceWindow.on("close", () => {
    app.quit();
  });
});
