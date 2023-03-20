import React, { useState } from 'react'


const ItemCount = () => {

    const [contador, setContador] = useState(0)

    const restar =() => {
        setContador(contador - 1)
        if(contador < 1) {
            alert ("no puede ingresar cantidades negativas")
        }else{
            setContador(contador - 1)
        }
    }

    return (
        <div className='contador'>
            <button onClick={restar}>-</button>
            <h5>{contador}</h5>
            <button onClick={() => setContador(contador + 1)}>+</button>
        </div>
    )
}

export default ItemCount