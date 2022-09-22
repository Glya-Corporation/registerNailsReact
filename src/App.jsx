import './App.css'
import Header from './componets/Header'
import Register from './componets/Register'
import Customers from './componets/Customers'
import Reports from './componets/Reports'
import Closed from './componets/Closed'
//import reajuste from './componets/Reajuste'
import DeletedCustomers from './componets/DeletedCustomers'
import { HashRouter, Routes, Route} from 'react-router-dom'


function App() {  
  let clientes = JSON.parse(window.localStorage.getItem('clientesGuardados'))
  let savedPercentage = JSON.parse(window.localStorage.getItem('porcentaje'))
  let registro = JSON.parse(window.localStorage.getItem('registro'))



  return (
    <HashRouter>
      <div className="App">
        <Header savedPercentage={savedPercentage}/>
        <Routes>
          <Route path="/" element={<Register clientes={clientes} />} />
          <Route path="/customers" element={<Customers clientes={clientes} />} />
          <Route path="/reports" element={<Reports clientes={clientes} porcentaje={savedPercentage} />} />
          <Route path="/closed" element={<Closed clientes={clientes} registro={registro} porcentaje={savedPercentage} />} />
          <Route path="/deleted-customers" element={<DeletedCustomers />} />
        </Routes>
      </div>
    </HashRouter>
  )
}

export default App
