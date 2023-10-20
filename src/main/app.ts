import { BrowserWindow } from 'electron';
import path from 'path';

export default () => {
  const window = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  });

  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    window.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL);
  } 
  else {
    const file = path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`);
    window.loadFile(file);
  }
  return window;
}
