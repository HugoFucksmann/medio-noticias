import Axios from "axios";
import Swal from "sweetalert2";

class PublicidadService {

  async cargarLink(id, link) {
    return await Axios.put(
      `${process.env.REACT_APP_URL}/publicidad/${id}`,
      {link: link},
      this.headers
    ).catch((e) => console.log(e));
  }
}


export default new PublicidadService();