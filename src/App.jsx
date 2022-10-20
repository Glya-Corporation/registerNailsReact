import './App.css'
import Header from './componets/Header'
import Register from './componets/Register'
import Customers from './componets/Customers'
import Reports from './componets/Reports'
import Closed from './componets/Closed'
import DeletedCustomers from './componets/DeletedCustomers'
import Settings from './componets/Settings'
import { HashRouter, Routes, Route} from 'react-router-dom'
import reajuste from './componets/Reajuste'

function App() {
  reajuste()
  const data = JSON.parse(window.localStorage.getItem('data'))
  const color = data.settings?.color
  const font = data.settings?.font

  document.body.classList.add(color)

  return (
    <HashRouter>
      <div className={font}>
        <Header savedPercentage={data.settings?.porcentaje} data={data} />
        <Routes>
          <Route path="/" element={<Register clientes={data.storage?.customers} data={data} />} />
          <Route path="/customers" element={<Customers clientes={data.storage?.customers} data={data} />} />
          <Route path="/reports" element={<Reports data={data} clientes={data.storage?.customers} porcentaje={data.settings?.porcentage} />} />
          <Route path="/closed" element={<Closed clientes={data.storage?.customers} registro={data.storage?.register} porcentaje={data.settings?.porcentage} data={data} />} />
          <Route path="/deleted-customers" element={<DeletedCustomers data={data} />} />
          <Route path="/settings" element={<Settings data={data} />} />
        </Routes>
      </div>
    </HashRouter>
  )
}

export default App
