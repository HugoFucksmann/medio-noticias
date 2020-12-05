

export const getUltimaNota = (noticias) => {
    return noticias[0];
}

export const getSeccion = (noticias, tema) => {
   return noticias.filter((noticia) => noticia.tema === tema);
}