import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("puppeteer", {
  test1: () => ipcRenderer.invoke("test-1"),
  test2: () => ipcRenderer.invoke("test-2")
});

declare global {
  interface Window {
    puppeteer: {
      test1: () => void,
      test2: () => void
    }
  }
}
