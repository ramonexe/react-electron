import { app, BrowserWindow } from 'electron';
import path from 'path';
import { fileURLToPath } from 'url';

// Corrige __dirname para ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preloader.js"),
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

  // No macOS é comum que o app continue ativo mesmo com todas as janelas fechadas
  app.on('activate', () => {
    // Se não houver janelas abertas, cria uma nova
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// Fecha o app quando todas as janelas estão fechadas
app.on('window-all-closed', () => {
  // Mesma situação do macOS
  if (process.platform !== 'darwin') {
    app.quit();
  }
});