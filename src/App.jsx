import { useState } from 'react'
import './App.css'
import Register from './componets/Register'
import Clients from './componets/Clients'
import Reports from './componets/Reports'
import Closed from './componets/Closed'
import reajuste from './componets/Reajuste'
import DeletedCustomers from './componets/DeletedCustomers'

function App() {
  const [menuIsVisible, setMenuIsVisible] = useState('')
  const [girar, setGirar] = useState('')
  const [iconMenu, setIconMenu] = useState('menu')
  const [sections, setSections] = useState(1)
  let clientes = JSON.parse(window.localStorage.getItem('clientesGuardados'))
  let porcentajeSave = JSON.parse(window.localStorage.getItem('porcentaje'))
  let registro = JSON.parse(window.localStorage.getItem('registro'))

  const showMenu = () => {
    if (menuIsVisible !== 'mostrar-menu' && girar !== 'girar') {
      setMenuIsVisible('mostrar-menu')
      setGirar('girar')
      setIconMenu('close')
    } else {
      setMenuIsVisible('')
      setGirar('')
      setIconMenu('menu')
    }
  }

  const hideMenu = componet => {
    setSections(componet)
    setMenuIsVisible('')
    setGirar('')
    setIconMenu('menu')

  }

  const porcentaje = () => {
    let porcentaje = prompt('Ingresa el porcentaje de ganancia con un formato de numero entero!!');

    if (porcentaje !== '') {
      window.localStorage.setItem('porcentaje', JSON.stringify(porcentaje));
      alert(`Listo! has cambiado el porsentaje de ganancias, ahora es del: ${porcentaje}%`)
    } else {
      alert('No has guardado ningun valor')
    }
  }


  return (
    <div className="App">
      <header>
        <nav>
          <span onClick={showMenu} className={`material-symbols-outlined icono-menu ${girar}`}>{iconMenu}</span>
          <ul id="menu" className={`menu ${menuIsVisible}`}>
            <li><span className="material-symbols-outlined iconos-nemu">person_add</span><a onClick={() => hideMenu(1)}>Nuevo Cliente</a></li>
            <li><span className="material-symbols-outlined iconos-nemu">group</span><a onClick={() => hideMenu(2)}>Clientes</a></li>
            <li><span className="material-symbols-outlined iconos-nemu">analytics</span><a onClick={() => hideMenu(3)}>Reporte Total</a></li>
            <li><span className="material-symbols-outlined iconos-nemu">edit</span><a onClick={porcentaje}>Cambiar Porcentaje</a></li>
            <li><span className="material-symbols-outlined iconos-nemu">event</span><a onClick={() => hideMenu(4)}>Reservaciones</a></li>
            <li><span className="material-symbols-outlined iconos-nemu">published_with_changes</span><a onClick={() => hideMenu(5)}>Cierre Semanal</a></li>
            <li><span className="material-symbols-outlined iconos-nemu">delete</span><a onClick={() => hideMenu(6)}>Clientes Eliminados</a></li>
            {/* <li><span className="material-symbols-outlined iconos-nemu">edit</span><a onClick={reajuste}>Reajuste</a></li> */}
          </ul>
        </nav>
      </header>
      {
        sections === 1 && <Register clientes={clientes} />
      }
      {
        sections === 2 && <Clients clientes={clientes} />
      }
      {
        sections === 3 && <Reports clientes={clientes} porcentaje={porcentajeSave} />
      }
      {
        sections === 5 && <Closed clientes={clientes} registro={registro} porcentaje={porcentajeSave} />
      }
      {
        sections === 6 && <DeletedCustomers />
      }
    </div>
  )
}

export default App
