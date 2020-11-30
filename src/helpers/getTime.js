
class getTime {

    constructor(){
        this.f = new Date();
        this.meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
    }

    fecha(){
        this.fecha = this.f.getDate() + " de " + this.meses[this.f.getMonth()] + " de " + this.f.getFullYear();
        return this.fecha
    }
    
    hora(){
         if (this.f.getMinutes() < 10) {
            this.hora = this.f.getHours() + ":0" + this.f.getMinutes() // + ":" + this.f.getSeconds();
         }else{
             this.hora = this.f.getHours() + ":" + this.f.getMinutes() // + ":" + this.f.getSeconds();
         }
        
        return this.hora
    }
    
    
    
}


export default new getTime;