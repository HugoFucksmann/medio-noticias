
export default class ModalImage {

    _ocultarModal = true;
    tipo = 'noticias';
    id;
    img;

    nuevaImagen = new EventEmitter();

    get ocultarModal(){
        return this._ocultarModal;
    }

    abrirModal( tipo, id, img = 'no-img' ){
        this._ocultarModal = false;
        this.tipo = tipo;
        this.id = id;

        if( img.includes('https') ){
        this.img = img;
        }else{
        this.img = `${ base_url }/upload/${ tipo }/${ img }`;
        }
        
    }

    cerrarModal(){
        this._ocultarModal = true;
    }

    constructor() { }
}
