import Swal from "sweetalert2";

const base_url = process.env.REACT_APP_URL_PROD;


export class FileUploadService {
  
  async actualizarFoto( archivo, tipo, id ) {
    try {
      // pure js
      const url = `${base_url}/upload/${tipo}/${id}`;
      const formData = new FormData();
      formData.append("imagen", archivo); //en caso de mas info agregar append

      const resp = await fetch(url, {
        method: "PUT",
        headers: {
          "x-token": localStorage.getItem("token") || "",
        },
        body: formData,
      });

      const data = await resp.json();

      if (data.ok) {
        return data.nombreArchivo;
      } else {
        console.log(data.msg);
        return false;
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
