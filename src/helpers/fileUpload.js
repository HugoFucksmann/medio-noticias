

  export const actualizarArchivo = async ( file, tipo, id ) => {
    try {
      
      const url = `${process.env.REACT_APP_URL}/upload/${tipo}/${id}`;
      const formData = new FormData();
      if( tipo === 'noticias'){
        formData.append("imagen", file);
      }else if ( tipo === 'files'){
        formData.append("file", file);
      }else{
        return false
      }

      

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

