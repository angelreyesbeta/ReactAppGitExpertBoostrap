import React from 'react'

export const GifGridItem = ({id,title,url}) => {
    return (
        <>
        <div className="card">

            <div className="row">
                <div className="col-md-12">
                   
                        <img src={url} alt={title}></img>
                        
                    
                </div>
            </div>

        </div>
                     
        </>
    )
}
