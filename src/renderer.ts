/**
 * This file will automatically be loaded by webpack and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/latest/tutorial/process-model
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.js` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */

import './index.css';

const mensajeElement = document.getElementById('mensaje');
const tiempoInput:any = document.getElementById('tiempoInput');
const ShutdownAt = document.getElementById('ShutdownAt');
const abortShutdown = document.getElementById('abortShutdown');
// import { apagarAhora, apagarEnTiempo, cancelarApagado } from './index' ;
const ipcRenderer= window.require('electron').ipcRenderer
// import { ipcRenderer } from "electron";
const shutdownNow = document.getElementById('shutdownNow');
shutdownNow.addEventListener('click', () => {
    const mensaje = `Apagando el equipo ahora...`
    mostrarMensaje(mensaje)
    ipcRenderer.send('apagarAhora')
    // apagarAhora()
})
ShutdownAt.addEventListener('click', () => {
    const mensaje = `Apagando el equipo en ${tiempoInput.value*60} segundos...`
    mostrarMensaje(mensaje)
    console.log(tiempoInput.value);
    ipcRenderer.send('apagarEnTiempo', tiempoInput.value)
    // apagarEnTiempo(tiempoInput.value)
})
abortShutdown.addEventListener('click', () => {
    const mensaje = `Cancelando apagado...`
    mostrarMensaje(mensaje)
    ipcRenderer.send('cancelarApagado')
    // cancelarApagado()
})



function mostrarMensaje(mensaje:any, error = false) {
    mensajeElement.textContent = mensaje;
    if (error) {
        mensajeElement.style.color = 'red';
    } else {
        mensajeElement.style.color = 'black';
    }
}

