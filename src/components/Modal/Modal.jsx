import React,{useState} from 'react'
import axios from 'axios'
import Style from "./Modal.module.css"
import {BsCheckLg} from "react-icons/bs"
import {ImCancelCircle} from "react-icons/im"


export default function modal({modificar, setModificar, setInterruptor,interruptor}) {
    const [cambiar,setCambiar] = useState({
        nombre: modificar?.value
    })
    console.log(cambiar)
    const cambiarValorInput = (e)=>{
            
            setCambiar({
                ...cambiar,
                nombre: e.target.value
            })
    }
    const enviarDatosModificar= async (e)=>{
      try {
        e.preventDefault()
        const respuesta = await axios.put("http://localhost:3001/api/anotaciones/"+modificar.id, cambiar)
        if(respuesta.data){
          setInterruptor(!interruptor)
          setModificar({
            ...modificar,
            renderizar: false,
        })
          console.log(respuesta.data)
          return alert(respuesta.data)
        }
      } catch (error) {
        console.log(error)
      }
      
    }
    const cancelar = ()=>{
      setModificar({
        ...modificar,
        renderizar: false,
    })
    }
  return (
    <section className={Style.section}>
        <input id='modificar' type="text" defaultValue={modificar.value}  onChange={cambiarValorInput}/>
       <div>
        <button onClick={enviarDatosModificar}><BsCheckLg color='green' size="1.8rem"/></button>
        <button onClick={cancelar}><ImCancelCircle color='red' size="1.8rem"/></button>
       </div>
    </section>
  )
}
