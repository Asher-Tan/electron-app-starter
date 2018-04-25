import { app, BrowserWindow } from 'electron';
import is from 'electron-is';
import { join } from 'path';
// import log from 'electron-log';
import * as application from './services/application';
import * as test from './services/test';
import * as window from './services/window';


app.on('ready', () => {
  application.init();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (window.getCount() === 0) {
    application.init();
  }
});

app.on("quit", () => {

});

global.services = {
  application,
  window,
  test
}
