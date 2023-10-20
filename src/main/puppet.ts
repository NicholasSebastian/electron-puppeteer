import { BrowserWindow, app } from 'electron';
import pie from 'puppeteer-in-electron';
import puppeteer from 'puppeteer-core';
import type { Browser, Page } from 'puppeteer-core';

const URL = "https://idns889.com/";

// TO FIX
// Error: ws does not work in the browser.
// Browser clients must use the native WebSocket object.

export default class Puppet {
  private browser: Browser;
  private window: BrowserWindow;
  private page: Page;

  private constructor(browser: Browser) {
    this.browser = browser;
  }

  public static async initialize() {
    await pie.initialize(app);
    const browser = await pie.connect(app, puppeteer as never);
    return new Puppet(browser);
  }

  public async createWindow() {
    const window = new BrowserWindow({ show: true });
    await window.loadURL(URL);
    this.page = await pie.getPage(this.browser, window);
  }

  public destroy() {
    this.window.close();
  }

  public test1() {
    // TODO
    console.log("Test 1");
  }

  public test2() {
    // TODO
    console.log("Test 2");
  }
}
