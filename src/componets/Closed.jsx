import { useState } from "react";

const Closed = ({ clientes, porcentaje, registro }) => {
    if (registro === null) registro = []
    const [showContent, setShowContent] = useState(true)
    const [showRegister, setShowRegister] = useState({})

    const doClose = () => {
        if (clientes.length < 1) {
            alert('No hay datos para el cierre')
        } else {
            let totalCobrado = 0
            let totaGanado = 0

            clientes.forEach(element => {
                totalCobrado += parseFloat(element.price)
            })

            totaGanado = totalCobrado * (porcentaje / 100)

            let registroActual = {
                inicio: clientes[0].date,
                cierre: clientes[clientes.length - 1].date,
                cobrado: totalCobrado.toFixed(2),
                ganado: totaGanado.toFixed(2),
                clientes: [...clientes]
            }

            registro.unshift(registroActual)
            window.localStorage.setItem('registro', JSON.stringify(registro))
            let clientesV = []
            window.localStorage.setItem('clientesGuardados', JSON.stringify(clientesV))
            alert('Cierre realizado con exito')
        }
    }

    const show = (data) => {
        let registroV = registro.find(reg => reg.inicio === data)
        setShowRegister(registroV)
        setShowContent(false)
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
                                            <p className="td">{(reg.ganado).toFixed(2)} $</p>
                                            <p className="td"><button onClick={e => show(e.target.parentElement.parentElement.id)} className="ver_registro">Ver</button></p>
                                        </li>
                                    ))
                                }
                            </ul>
                        </section>
                    </main>
                ) : (
                    <>
                        <div className="header-register">
                            <span className="material-symbols-outlined icon-closed" onClick={()=> setShowContent(true)}>close</span>
                            <li className="li-register"><b>Fecha Inicio:</b> {showRegister.inicio}</li>
                            <li className="li-register"><b>Fecha Cierre:</b> {showRegister.cierre}</li>
                            <li className="li-register"><b>Total Cobrado:</b> {showRegister.cobrado} $</li>
                            <li className="li-register"><b>Total Ganado:</b> {(showRegister.ganado).toFixed(2)} $</li>
                        </div>
                        <ul>
                            {
                                showRegister.clientes.map(cliente => (
                                    <li className="list-register">
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
                    </>
                )
            }
        </>
    );
};

export default Closed;