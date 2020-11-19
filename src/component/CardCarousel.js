import React, { useEffect, useCallback, useState } from "react";
import "./styles.css";
/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/building-a-react-card-carousel-component
 */




const noticias = [
    
  {
    id: 1,
    title: "Stacked Card Carousel",
    copy:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet dui scelerisque, tempus dui non, blandit nulla. Etiam sed interdum est.",
  }
];

function determineClasses(indexes, cardIndex) {
  if (indexes.currentIndex === cardIndex) {
    return "active";
  } else if (indexes.nextIndex === cardIndex) {
    return "next";
  } else if (indexes.previousIndex === cardIndex) {
    return "prev";
  }
  return "inactive";
}

const CardCarousel = (noticias) => {

  const [indexes, setIndexes] = useState({
    previousIndex: 0,
    currentIndex: 0,
    nextIndex: 1,
  });

  const handleCardTransition = useCallback(() => {
    // If we've reached the end, start again from the first card,
    // but carry previous value over
    if (indexes.currentIndex >= noticias.noticias.length - 1) {
      setIndexes({
        previousIndex: noticias.noticias.length - 1,
        currentIndex: 0,
        nextIndex: 1,
      });
    } else {
      setIndexes((prevState) => ({
        previousIndex: prevState.currentIndex,
        currentIndex: prevState.currentIndex + 1,
        nextIndex:
          prevState.currentIndex + 2 === noticias.noticias.length
            ? 0
            : prevState.currentIndex + 2,
      }));
    }
  }, [indexes.currentIndex]);

  useEffect(() => {
    const transitionInterval = setInterval(() => {
      handleCardTransition();
    }, 4000);

    return () => clearInterval(transitionInterval);
  }, [handleCardTransition, indexes]);

  return (
    <div className="container">
      <ul className="cardd-carousel">
        {noticias.noticias.map((nota, index) => (
          <li
            key={nota._id}
            className={`cardd ${determineClasses(indexes, index)}`}
          >
            <h2>{nota.titulo.substr(0, 75)}</h2>
            <p>{nota.subtitulo}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardCarousel;
