

  export const actualizarFoto = async ( file, tipo='noticias', id ) => {
    try {
      
      const url = `${process.env.REACT_APP_URL}/upload/${tipo}/${id}`;
      const formData = new FormData();
      formData.append("imagen", file); 

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

