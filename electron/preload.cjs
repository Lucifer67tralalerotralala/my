const { contextBridge, ipcRenderer } = require('electron');
contextBridge.exposeInMainWorld('studioDesk', {
  invoke: (command, args) => ipcRenderer.invoke('studio:'+command, args || {}),
  minimize: () => ipcRenderer.send('window:minimize'),
  toggleMaximize: () => ipcRenderer.send('window:toggle-maximize'),
  close: () => ipcRenderer.send('window:close'),
  on: (event, callback) => { const listener = (_event, payload) => callback(payload); ipcRenderer.on(event, listener); return () => ipcRenderer.removeListener(event, listener); }
});
