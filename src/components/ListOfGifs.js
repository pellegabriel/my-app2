import React, { useEffect, useState } from "react";
import Gif from "./Gif";
import getGifs from "../service/getGifs";
// tener cuidado con el array en lugar de llaves f
export default function ListOfGifs({ params }) {
  const {keyword} = params
  const[loading,setLoading] = useState(false)
  const [gifs, setGifs] = useState([]);

  useEffect(function () {
    setLoading(true)
    getGifs({ keyword })
      .then(gifs => {
        setGifs(gifs)
        setLoading(false)
      })
  }, [keyword])
  // accedo al elemento antes de estar listo , el elemento es null antes de usaarlo
  if(loading) return <i>Cargando🌌</i>

  return <div>
    {
      gifs.map(({ id, title, url }) => 
        <Gif 
        key={id} 
        title={title} 
        url={url} 
        id={id} 
        />
    )
    }
  </div>}
