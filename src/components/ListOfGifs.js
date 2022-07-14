import React, { useEffect, useState } from "react";
import Gif from "./Gif";
import getGifs from "../service/getGifs";
// tener cuidado con el array en lugar de llaves f
export default function ListOfGifs({ keyword }) {
  const [gifs, setGifs] = useState([]);

  useEffect(function () {
    getGifs({ keyword }).then((gifs) => setGifs(gifs));
  }, []);
  // accedo al elemento antes de estar listo , el elemento es null antes de usaarlo
  if (gifs.length === 0) return <div>No hay gifs</div>;
  return (
    <div>
      {gifs.map(({ id, title, url }) => (
        <Gif key={id} title={title} url={url} id={id} />
      ))}
    </div>
  );
}
