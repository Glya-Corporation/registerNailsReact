import { useState } from "react";

const Clients = ({ clientes }) => {
    if(clientes === null ) clientes = []
    const [isVisible, setIsVisible] = useState(true)
    const [clientesPrint, setClientesPrint] = useState([])

    const filtrarClientes = () => {
        const inicio = document.getElementById('fecha_inicial').value
        const fin = document.getElementById('fecha_final').value
        const clientesFilter = []

        if (inicio === '' && fin === '') {
            setIsVisible(true)
        } else {
            setIsVisible(false)
            clientes.forEach(user => {
                if (user.date >= inicio && user.date <= fin) clientesFilter.push(user)
            })
        }
        setClientesPrint([...clientesFilter])
        eliminarCliente()
    }

    function eliminarCliente() {
        const btn_eliminarCliente = document.querySelectorAll('.btnEliminarCliente')

        btn_eliminarCliente.forEach(boton => {
            boton.addEventListener('click', e => {
                let id = parseInt(e.target.parentElement.id)
                let idx = clientes.findIndex(elemento => elemento.id == id)
                alertDelete(idx)
            })
        })
    }

    function alertDelete(id) {
        let respuesta = prompt('¿Estas segura que deseas eliminar a esta cliente?');
        let clientesEliminados = JSON.parse(window.localStorage.getItem('clientesEliminados'))
        if(clientesEliminados === null ) clientesEliminados = []

        if (respuesta.toLowerCase() === 'si') {
            let clientesDelete = clientes.splice(id, 1)
            window.localStorage.setItem('clientesGuardados', JSON.stringify(clientes))
            clientesDelete[0].estado = 'eliminado'
            clientesEliminados.push(clientesDelete[0])
            window.localStorage.setItem('clientesEliminados', JSON.stringify(clientesEliminados))
            alert('Cliente eliminado satisfactoriamente')
        } else {
            alert('No se ha eliminado ningun cliente')
        }
    }


    return (
        <div>
            <main className="contenedor">
                <h2 className="titulo">Clientes</h2>
                <div className="fechas-filtrado">
                    <input className="fechas--filtrado-input" type="date" id="fecha_inicial" />
                    <input className="fechas--filtrado-input" type="date" id="fecha_final" />
                    <input onClick={filtrarClientes} className="btn_filtrar" type="button" value="Filtrar" id="btn_filtrar" />
                </div>
                <section className="section-clientes" id="lista_clientes"></section>
            </main>
            {
                isVisible ? (
                    clientes.map(cliente => (
                        <div className="contact-card" id={cliente.id} key={cliente.id}>
                            <p><h4 className="contact-card--data">Fecha</h4>{cliente.date}</p>
                            <p><h4 className="contact-card--data">Nombre</h4>{cliente.name}</p>
                            <p><h4 className="contact-card--data">Servicio</h4>{cliente.service}</p>
                            <p><h4 className="contact-card--data">Precio</h4>{cliente.price}$</p>
                            <p><h4 className="contact-card--data">Colaboradora</h4>{cliente.colaborador}</p>
                            <p><h4 className="contact-card--data">Descriccion</h4>{cliente.description}</p>
                            <button className="btnEliminarCliente">Eliminar</button>
                        </div>
                    ))
                ) : (
                    clientesPrint.map(cliente => (
                        <div className="contact-card" id={cliente.id} key={cliente.id}>
                            <p><h4 className="contact-card--data">Fecha</h4>{cliente.date}</p>
                            <p><h4 className="contact-card--data">Nombre</h4>{cliente.name}</p>
                            <p><h4 className="contact-card--data">Servicio</h4>{cliente.service}</p>
                            <p><h4 className="contact-card--data">Precio</h4>{cliente.price}$</p>
                            <p><h4 className="contact-card--data">Colaboradora</h4>{cliente.colaborador}</p>
                            <p><h4 className="contact-card--data">Descriccion</h4>{cliente.description}</p>
                            <button className="btnEliminarCliente">Eliminar</button>
                        </div>
                    ))
                )
            }
        </div>
    );
};

export default Clients;