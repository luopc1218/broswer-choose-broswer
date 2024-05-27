const path = require("path");
const { app, BrowserWindow } = require("electron");

const isDev =
  process.env.NODE_ENV === "development" ||
  process.defaultApp ||
  /[\\/]electron[\\/]/.test(process.execPath);



app.on("ready", () => {
  const preferenceWindow = new BrowserWindow({
    width: 800,
    height: 500,
    icon: path.join(__dirname, "src/assets/logo512.png"),
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      preload: path.join(__dirname, "preload.js"),
    },
  });
  if (process.platform === "darwin") {
    app.dock.setIcon(path.join(__dirname, "./src/assets/logo512.png"));
  }
  if (isDev) {
    preferenceWindow.loadURL("http://localhost:3000/");
  } else {
    preferenceWindow.loadFile(path.join(__dirname, "./build/index.html"));
  }
  //   打开控制台
  // preferenceWindow.webContents.openDevTools();

  preferenceWindow.on("close", () => {
    app.quit();
  });
});
