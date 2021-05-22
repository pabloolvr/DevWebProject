import './style.css'
import busca from './assets/busca.png'

export const Busca = ()=>{
  return(<div  className="busca">
    <input type="text" />
    <img src={busca} alt="icon de busca" />
  </div>)
}