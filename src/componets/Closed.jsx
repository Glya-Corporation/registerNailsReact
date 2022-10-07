import { useState } from "react";

const Closed = ({ clientes, porcentaje, registro }) => {
    let customers = clientes
    if (registro === null) registro = []
    const [showContent, setShowContent] = useState(true)
    const [showRegister, setShowRegister] = useState({})

    const doClose = () => {
        if (customers.length < 1) {
            alert('No hay datos para el cierre')
        } else {
            let totalCobrado = 0
            let totaGanado = 0

            customers.forEach(element => {
                totalCobrado += parseFloat(element.price)
            })

            totaGanado = totalCobrado * (porcentaje / 100)

            let registroActual = {
                inicio: customers[0].date,
                cierre: customers[customers.length - 1].date,
                cobrado: totalCobrado.toFixed(2),
                ganado: totaGanado.toFixed(2),
                clientes: [...customers]
            }

            registro.unshift(registroActual)
            window.localStorage.setItem('registro', JSON.stringify(registro))
            customers = []
            window.localStorage.setItem('clientesGuardados', JSON.stringify(customers))
            window.localStorage.setItem('advances', JSON.stringify(customers))
            alert('Cierre realizado con exito')
            window.location.reload()
        }
    }

    const show = data => {
        let registroV = registro.find(reg => reg.inicio === data)
        setShowRegister(registroV)
        setShowContent(false)
    }

    const closeDelete = fechaInicial => {
        const newRegister = registro.filter(element => element.inicio !== fechaInicial)
        registro = []
        registro = [...newRegister]
        window.localStorage.setItem('registro', JSON.stringify(registro))
        alert('Registro eliminado con exito')
        setShowContent(true)
    }

    
    return (
        <>
            {
                showContent ? (
                    <main className="contenedor">
                        <h2 className="titulo">Cierres Semanales</h2>
                        <button onClick={doClose} className="btn_cierre">Hacer Cierre</button>
                        <section className="section-cierre" >
                            <div className="table">
                                <b className="th">F. Inicio</b>
                                <b className="th">F. Cierre</b>
                                <b className="th">Ganado</b>
                                <b className="th">Registro</b>
                            </div>
                            <ul>
                                {
                                    registro.map(reg => (
                                        <li className="li" id={reg.inicio} key={reg.inicio}>
                                            <p className="td">{reg.inicio}</p>
                                            <p className="td">{reg.cierre}</p>
                                            <p className="td">{reg.ganado} $</p>
                                            <p className="td"><button onClick={e => show(e.target.parentElement.parentElement.id)} className="ver_registro">Ver</button></p>
                                        </li>
                                    ))
                                }
                            </ul>
                        </section>
                    </main>
                ) : (
                    <main className="list-registered">
                        <div className="header-register">
                            <span className="material-symbols-outlined icon-closed" onClick={()=> setShowContent(true)}>close</span>
                            <li className="li-register"><b>Fecha Inicio:</b> {showRegister.inicio}</li>
                            <li className="li-register"><b>Fecha Cierre:</b> {showRegister.cierre}</li>
                            <li className="li-register"><b>Total Cobrado:</b> {showRegister.cobrado} $</li>
                            <li className="li-register"><b>Total Ganado:</b> {showRegister.ganado} $</li>
                            <button id={showRegister.inicio} className="btn_cierre" onClick={e=> closeDelete(e.target.id)}>Borrar Registro</button>
                        </div>
                        <ul>
                            {
                                showRegister.clientes.map(cliente => (
                                    <li className="list-register" key={cliente.id}>
                                        <p><b>Id:</b> {cliente.id}</p>
                                        <p><b>Estado:</b> {cliente.estado}</p>
                                        <p><b>Nompre:</b> {cliente.name}</p>
                                        <p><b>Fecha:</b> {cliente.date}</p>
                                        <p><b>Servicio:</b> {cliente.service}</p>
                                        <p><b>Precio:</b> {cliente.price} $</p>
                                        <p><b>Colaborador:</b> {cliente.colaborador}</p>
                                        <p><b>Description:</b> {cliente.description}</p>
                                    </li>
                                ))
                            }
                        </ul>
                    </main>
                )
            }
        </>
    );
};

export default Closed;