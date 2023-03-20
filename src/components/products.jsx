import React from 'react'

const actividad = () => {
  const datos =[
    {
        id: "01", 
        name:"Producto 1", 
        descripcion:"description product 1", 
        stock:5 
    },
    {
        id: "01",
        name:"Producto 2",
        descripcion:"description product 2",
        stock:5 
    },
    {
        id: "01",
        name:"Producto 3",
        descripcion:"description product 3",
        stock:5 
    }
  ];

  const getDatos = () => {
    return new Promise ((resolve, reject) =>{
        if(datos.length === 0){
            reject(new Error ("no hay datos"))
        }
    setTimeout(() => {
        resolve (datos);
        },2000);
    });
 };
  
  // getDatos () .then((datos) => console.log(datos));

  async function fetchingData(){
    try{
        const datosFetched = await getDatos()
        console.log(datosFetched)
    }catch(err){
        console.log(err);
    }
  }

  fetchingData();
 
  
    return (
    <div>actividad</div>
  )
}

export default actividad 