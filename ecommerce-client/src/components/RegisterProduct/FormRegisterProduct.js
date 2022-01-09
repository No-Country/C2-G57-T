import React from 'react'

export const FormRegisterProduct = () => {
    return (
       <form>
        <div className='registerProductInputContainer'>
            <input placeholder='Nombre de Producto' />
            <input placeholder='Precio' />
            <input placeholder='Colores' />
            <input placeholder='Talles' />
            <input placeholder='stock' />
        </div>     
       </form>
    )
}
