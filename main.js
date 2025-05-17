import { app, BrowserWindow } from 'electron';

function createWindow() {
  // Cria a janela
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    }
  });

  // Carrega o index.html do app SE FOR BUILDAR
  //const indexPath = path.join(__dirname, 'index.html');
  //mainWindow.loadFile(indexPath);

  // Carrega em modo dev
  mainWindow.loadURL('http://localhost:3000');

  // Abre devtools
  mainWindow.webContents.openDevTools();
}

// Starta o app
app.whenReady().then(() => {
  createWindow();
});