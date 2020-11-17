
const base_url = " http://localhost:3012/api";
export const imagenUrl = (img) => {
    if (!img) {
      return `${base_url}/upload/noticias/no-image`;
    } else if (img.includes("https")) {
      return img;
    } else if (img) {
      return `${base_url}/upload/noticias/${img}`;
    } else {
      return `${base_url}/upload/noticias/no-image`;
    }
}