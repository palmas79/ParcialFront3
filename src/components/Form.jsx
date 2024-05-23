import FinalizarCompra from "./FinalizarCompra";
import MenError from "./MenError";
import { useState } from "react";

const Form = () => {

    const [cliente, setCliente] = useState({
        nombre: '',        
        email: '',
    });
    
    const [show, setShow] =useState(false);
    const [error, setError] = useState(false);
    
    const handleSubmit = (event) => {
        event.preventDefault();
    
        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        
        if(cliente.nombre.trim().length > 3 && regex.test(cliente.email)){
            setShow(true);
            setError(false);
        } else {
            setError(true);
            setShow(false);
        }
        
    }
    
    return (
        
        <div>            
            <form className = "form" onSubmit={handleSubmit}>
                <label >nombre:</label>
                <input 
                type="Text" 
                value={cliente.nombre}
                onChange={(event) => setCliente({
                    ...cliente, nombre: event.target.value
                })}/>                  
            
                <label>email:</label>
                <input 
                type="email" 
                value={cliente.email}
                onChange={(event) => setCliente({
                    ...cliente, email: event.target.value
                })}
                />
                
                <button>finalizar compra</button>
            </form>           
            
            {error && <MenError/>}
            {show ? <FinalizarCompra cliente={cliente}/> : null}
    
        </div>
    
      )
    }
    
    export default Form