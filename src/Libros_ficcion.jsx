import React from 'react'
import {  useOutletContext, useParams } from 'react-router-dom'

export default function Libros_ficcion() {
    const {categoria} = useParams()
    const librosIniciales = useOutletContext()

    return (
        <>
        <h1>Libros de ficción</h1>
        {(librosIniciales.filter(l => l.categoria == categoria)).map(v=>{
            return(
                <div id="libro">
                    <h1>{v.título}</h1>
                    <h2>{v.precio}</h2>
                    <h2>{v.categoria}</h2>
                    <h2>{v.id}</h2>
                </div>
                
            )
        })}
        </>
    )
    }
