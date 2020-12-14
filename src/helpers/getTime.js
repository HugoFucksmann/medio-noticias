

export const getHora = () => {
    const fecha = new Date();
    let hora = ''
    if (fecha.getMinutes() < 10) {
        hora = fecha.getHours() + ":0" + fecha.getMinutes(); // + ":" + this.f.getSeconds();
    }else{
        hora = fecha.getHours() + ":" + fecha.getMinutes(); // + ":" + this.f.getSeconds();
    }

    return hora;
}

export const getFecha = () => { 
    return new Date().toLocaleDateString("es-ES", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });   
}


//export default new getTime;