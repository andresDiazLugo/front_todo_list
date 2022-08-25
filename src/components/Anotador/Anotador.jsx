import React,{useState} from 'react'
import axios from 'axios'
import MostrarNotas from '../Mostrar/MostrarNotas'
import Style from './Anotador.module.css'
import {MdAddTask} from "react-icons/md"

export default function Anotador() {
    const [anotacion, setAnotacion] = useState({
        nombre:""
    })
    const [interruptor, setInterruptor] = useState(false)
    const agregarAnotacionBaseDatos = (e)=>{
        setAnotacion({
            ...anotacion,
            nombre: e.target.value
        })
    }
    const enviarDatosApi = async(e)=>{
        try {
            e.preventDefault()
            const respuesta = await axios.post("http://localhost:3001/api/anotaciones",anotacion)
            if(respuesta){
                setAnotacion({...anotacion,nombre:""})
                setInterruptor(!interruptor)
                return alert(respuesta.data)
            }
            return alert("hubo un error")
        } catch (error) {
            console.log()            
        }
    }
  return (
    <main className={Style.main} >
        <form className={Style.form} onSubmit={enviarDatosApi}>
            <input  type="text" value={anotacion.nombre} onChange={agregarAnotacionBaseDatos}/>
            <button><MdAddTask color="green" size="1.5rem"/></button>
        </form>
        <MostrarNotas interruptor={interruptor} setInterruptor={setInterruptor}/>
    </main>
  )
}
