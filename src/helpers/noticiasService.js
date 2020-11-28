import Axios from "axios";
import Swal from "sweetalert2";

class NoticiasService {

  get token() {
    return localStorage.getItem("token") || "";
  }

  get headers() {
    return {
      headers: {
        "x-token": this.token,
      },
    };
  }

  async crearNoticia(notaDB){
    return await Axios.post(`${process.env.REACT_APP_URL}/noticias`,notaDB, this.headers)
  }

  borrarNoticia( _id ){
      const url = `${process.env.REACT_APP_URL}/noticias/${_id}`;
      return Axios.delete(url, this.headers )
        .then( () => Swal.fire('Borrado', '', 'success'))
        .catch( err => console.log(err));
  }
}

export default new NoticiasService();
