class FileUpload {

  async actualizarFoto( archivo, tipo='noticias', id ) {
    try {
      
      const url = `https://medio-noticias.herokuapp/api/upload/${tipo}/${id}`;
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
