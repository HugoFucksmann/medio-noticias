import { useCallback, useState } from "react";
import { Button } from "react-bootstrap";
import { actualizarFoto } from "../helpers/fileUpload";
import Swal from "sweetalert2";
export const Cf = (id) => {
    
    const [preview, setPreviewImage] = useState();
    const tipo = "noticias";
    const handleChange = useCallback(({ target }) => {
    const reader = new FileReader();
    reader.readAsDataURL(target.files[0]);
    reader.onloadend = ( () => {
        setPreviewImage(reader.result);
      })
  }, []);

  actualizarFoto(preview, tipo, id)
    .then(() => Swal.fire("nota cargada con exito", "", "success"))
    .catch((err) => console.log(err));

  return (
    <div>
        <input type="file" filename={'imgSubida'} onChange={handleChange} />
        {preview && <img width={300} src={preview} alt={'preview'} style={{marginTop: '20px'}} />}
        <Button variant="info" >ok</Button>
    </div>
  )
}