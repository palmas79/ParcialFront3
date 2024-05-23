import './App.css'
import Autos from './components/Autos'
import Form from './components/Form'
import {autos} from "./utils/autos"
import { useState } from 'react'

function App() {  
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <h1>Eleccion de Autos</h1>
      {autos.map((item) => (
        <Autos item={item} key={item.id} setShowForm={setShowForm}/>
      ))}
      {showForm ? <Form /> : null}     
      
    </>
  )
}
export default App
