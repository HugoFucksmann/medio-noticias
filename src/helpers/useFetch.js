import { useState, useEffect, useCallback } from "react";

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [noticias, setNoticias] = useState([]);

  const getNoticias = useCallback(async () => {
    const response = await fetch(url);
    console.log('fecheado');
    const noticias = await response.json();
    setNoticias(noticias);
    setLoading(false);
  }, [url]);

  useEffect(() => {
    console.log('effect');
    getNoticias();
  }, [url, getNoticias]);
  return { loading, noticias };
};