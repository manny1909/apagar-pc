import { exec } from "child_process";
export function apagarAhora (){
    exec('shutdown /s /f /t 0', (error:any, stdout:any, stderr:any) => {
        if (error) {
            console.error(`Error al apagar el equipo: ${error.message}`);
        } else {
            console.log(stdout);
        }
    });
}

 export function apagarEnTiempo(tiempoInput:number){
    tiempoInput *= 60;
    exec(`shutdown /s /f /t ${tiempoInput}`, (error:any, stdout:any, stderr:any) => {
        if (error) {
            console.error(`Error al programar el apagado: ${error.message}`);
        } else {
            console.log(`Apagando el equipo en ${tiempoInput} segundos...`);
        }
    });
}

 export function cancelarApagado(){
    exec('shutdown /a', (error:any, stdout:any, stderr:any) => {
        if (error) {
            console.error(`Error al cancelar el apagado: ${error.message}`);
        } else {
            console.log('Apagado cancelado.');
        }
    });
}