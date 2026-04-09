const { app, BrowserWindow, Menu } = require('electron');
const path = require('path')

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: "Assets/Circus.ico"
  });

  //win.setIcon("./Render/dist/Circus.icon")

  Menu.setApplicationMenu(null);
  if(app.isPackaged) {
    win.loadFile(path.join(__dirname, './Render/dist/index.html'));
  } else {
    win.loadURL("http://localhost:5173/");

    // Teste de build
    // win.loadFile(path.join(__dirname, './Render/dist/index.html'));
  }
}

app.whenReady().then(createWindow);