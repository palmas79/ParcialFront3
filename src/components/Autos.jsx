import React from 'react'


const Autos = ({ item, setShowForm }) => {
    console.log(item);
  return (
    <div>
      <img src={item.img} alt={item.modelo} />
      <h4>{item.marca}</h4>      
      <button onClick={() => setShowForm(true)}>Comprar Auto</button>
    </div>
  )
}

export default Autos