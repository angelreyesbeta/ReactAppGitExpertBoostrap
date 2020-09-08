import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {
    const {data,loading}=useFetchGifs(category);
    return (
        <>
            <h2>Resultados de:
                { category}
            </h2>
            {loading&&<p>Loading...</p>}
            <div className="card-grid">
                {
                    data.map(img=>(
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>
        </>
    )
}
