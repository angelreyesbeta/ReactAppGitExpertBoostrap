import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid';

export const PrincipalComponet = () => {
     const [categories, setCategories] = useState(['Simpson']);
    return (
        <>
        <nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand" href="">AppReactPrueba</a>
    </div>
    <ul className="nav navbar-nav right-align">
      <li className="active"><a href="">Home</a></li>
      
    </ul>
  </div>
</nav>

<AddCategory setcategoria={setCategories}/>
<form>
    <ol>
        {
            categories.map(category=>(
                <GifGrid 
                    key={category}
                    category={categories}
                />
            ))
        }

    </ol>
</form>





</>
    )
}
