import Axios from "axios";
import Swal from "sweetalert2";

export default class NoticiasService {

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

  borrarNoticia( _id ){
      const url = `${process.env.REACT_APP_URL_PROD}/noticias/${_id}`;
      return Axios.delete(url, this.headers )
        .then( () => Swal.fire('Borrado', '', 'success'))
        .catch( err => console.log(err));
  }
}