import React,{useState,useEffect} from 'react'
import Modal from '../Modal/Modal'
import axios from 'axios'
import Style from './MostrarNotas.module.css'
import {MdDeleteForever} from 'react-icons/md'
import {MdModeEditOutline} from 'react-icons/md'
export default function MostrarNotas({interruptor, setInterruptor}) {
    const [anotaciones, setAnotaciones] = useState()
    const [modificarNotas, setModificar] = useState({
        renderizar: false,
        value:"",
        id:""
    })
    const resolverPromesaAxios = async()=>{
        const traerAnotacionesDB = await axios.get("http://localhost:3001/api/anotaciones")
        setAnotaciones(traerAnotacionesDB.data)
    }
    const eliminarRegistroBD = async(id)=>{
        const eliminar = await axios.delete(`http://localhost:3001/api/anotaciones/${id}`)
        setInterruptor(!interruptor)
        return alert(eliminar.data)
    }
    const modificarRegistroBD = async(name, id)=>{
        setModificar({...modificarNotas,
        renderizar: !modificarNotas.renderizar,
        value:name,
        id: id
        })
    }
useEffect(()=>{
    resolverPromesaAxios()
},[interruptor])

  return (
    <section className={Style.section}>
        <ul className={Style.ul}>
            { anotaciones?.map(e=><li key={e.id}>{e.nombre}<div><button onClick={()=>modificarRegistroBD(e.nombre,e.id)}><MdModeEditOutline color="#0096c7" size="1.5rem"/></button><button onClick={()=> eliminarRegistroBD(e.id)}><MdDeleteForever color="red" size="1.5rem"/></button></div></li>)}
        </ul>
        {modificarNotas.renderizar && <Modal interruptor={interruptor} setInterruptor={setInterruptor} modificar={modificarNotas} setModificar={setModificar}/>}
    </section>
  )
}
