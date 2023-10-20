import { BrowserWindow, app, ipcMain } from 'electron';
import createWindow from "./main/app";
import Puppet from './main/puppet';

if (require('electron-squirrel-startup')) app.quit();

let main: BrowserWindow;
let puppet: Puppet;

const init = Puppet.initialize();

app.on('ready', async () => {
  puppet = await init;
  main = createWindow();
  await puppet.createWindow();

  ipcMain.handle("test-1", puppet.test1);
  ipcMain.handle("test-2", puppet.test2);
});

app.on('activate', () => {
  const windows = BrowserWindow.getAllWindows();
  if (windows.length === 0) createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('before-quit', () => {
  puppet.destroy();
});
