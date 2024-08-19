import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({category}) => {

  const {images, isLoading} = useFetchGifs(category);    

  return (
    <>
    <h3>{ category }</h3>
    {
      isLoading && (<h2 >Is Loading...</h2>)
      
    }
    

    <div className='card-grid'>
      {/* Images .map */}
      {
        images.map(( image ) => (
          <GifGridItem 
            key={image.id}
            // Usando el operador SPREED esparcimos las propiedades de nuestro objeto (en este caso image)
            { ...image }
          
          />
        ))
      }
    </div>
    </>
  )
}
