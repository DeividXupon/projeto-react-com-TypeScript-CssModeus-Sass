export function converteTempoEmSegundos(tempo: string){
    const [hora = '0', minuto = '0', segundo = '0'] = tempo.split(":");

    const horaEmSegundos = Number(hora) * 3600;
    const minutoEmSegundos = Number(minuto) * 60;

    return horaEmSegundos + minutoEmSegundos + Number(segundo);
}