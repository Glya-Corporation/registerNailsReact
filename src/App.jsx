import './App.css'
import Header from './componets/Header'
import Register from './componets/Register'
import Customers from './componets/Customers'
import Reports from './componets/Reports'
import Closed from './componets/Closed'
//import reajuste from './componets/Reajuste'
import DeletedCustomers from './componets/DeletedCustomers'
import Settings from './componets/Settings'
import { HashRouter, Routes, Route} from 'react-router-dom'


function App() {  
  let clientes = JSON.parse(window.localStorage.getItem('clientesGuardados'))
  let savedPercentage = JSON.parse(window.localStorage.getItem('porcentaje'))
  let registro = JSON.parse(window.localStorage.getItem('registro'))
  let color = window.localStorage.getItem('color')
  let font = window.localStorage.getItem('font')

  document.body.classList.add(color)

  return (
    <HashRouter>
      <div className={font}>
        <Header savedPercentage={savedPercentage}/>
        <Routes>
          <Route path="/" element={<Register clientes={clientes} />} />
          <Route path="/customers" element={<Customers clientes={clientes} />} />
          <Route path="/reports" element={<Reports clientes={clientes} porcentaje={savedPercentage} />} />
          <Route path="/closed" element={<Closed clientes={clientes} registro={registro} porcentaje={savedPercentage} />} />
          <Route path="/deleted-customers" element={<DeletedCustomers />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </HashRouter>
  )
}

export default App
