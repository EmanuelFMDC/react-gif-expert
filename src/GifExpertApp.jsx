import { useState } from 'react'
import { AddCategory, GifGrid } from './components';
export const GifExpertApp = ({ onNewCategory }) => {

  const [categories, setCategories] = useState(['One Punch']);

  const onAddCategory = (newCategory)=>{

    if( categories.includes(newCategory) )return;
    
    setCategories([newCategory, ...categories])
  }
  return (
    <>
        {/* Titulo */}
        <h1>GifExpertApp</h1>
        
        {/* INPUT */}
        <AddCategory 
        // onAddCategory={ setCategories }
        onNewCategory ={ (e)=>onAddCategory(e)}
        />

        {/* Listado  gift */}
        <ol>
          { categories.map((category) =>( 
              <GifGrid 
                key={ category } 
                category = { category }/>
              ))
          }
          
          {/* <li>ABC</li> */}
        </ol>
            {/* Gift item */}
    </>
  )
}
