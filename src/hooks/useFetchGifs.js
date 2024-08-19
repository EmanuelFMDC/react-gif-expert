import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async()=> {
      const newImages = await  getGifs(category)
      setImages(newImages);
      setIsLoading(false)
    }
      // Nunca colocar la ejecucuon de una funcion en un functional component 
      useEffect(() => {      
      getImages();
      }, [])

  return {
    images,
    isLoading,
  }
}
