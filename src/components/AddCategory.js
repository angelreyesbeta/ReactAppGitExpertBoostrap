import React, { useState } from 'react';

export const AddCategory = ({setcategoria}) => {

    const [inpuValue, setinpuValue] = useState('')

    const handleInputChange=(e)=>{
        setinpuValue(e.target.value);
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        
        if(inpuValue.trim().length>2){
            //console.log(inpuValue);
            setcategoria(cats=>[inpuValue]);
            setinpuValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
             <div className="row">
                 <div className="col-md-12">
                     <div className="">
                        <input id="IdInput"
                            className="form-control input-lg"
                            type="text"
                            value={inpuValue}
                            onChange={handleInputChange}
                            placeholder="Buscar..."
                        />
                     </div>
                 </div>

             </div>
            
            
        </form>
    )
}
