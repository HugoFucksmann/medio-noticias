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

  async getNoticias() {
    return await Axios.get(
      `${process.env.REACT_APP_URL}/noticias`
    ).then(({ data }) =>
      data.noticias.filter((noticias) => noticias._id).reverse()
    );
  }

  async crearNoticia(notaDB) {
    return await Axios.post(
      `${process.env.REACT_APP_URL}/noticias`,
      notaDB,
      this.headers
    );
  }

  borrarNoticia(_id) {
    const url = `${process.env.REACT_APP_URL}/noticias/${_id}`;
    return Axios.delete(url, this.headers)
      .then(() => Swal.fire("Borrado", "", "success"))
      .catch((err) => console.log(err));
  }

  async actualizarNoticia(id, newNoticia) {
    return await Axios.put(
      `${process.env.REACT_APP_URL}/noticias/${id}`,
      newNoticia,
      this.headers
    ).catch((e) => console.log(e));
  }

  async importantLimit() {
    let count;
    await Axios.get(`${process.env.REACT_APP_URL}/noticias`)
      .then(({ data }) => data.noticias.filter((noticia) => noticia.important))
      .then((notas) => (count = notas.length))
      .catch((err) => console.log(err));

    return count;
  }
}

export default new NoticiasService();
