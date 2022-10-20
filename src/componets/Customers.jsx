import { useState } from "react";

const Customers = ({ clientes, data }) => {
    if (clientes === null) clientes = []
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

    function eliminarCliente(e) {
        let id = parseInt(e.target.parentElement.id)
        let idx = clientes.findIndex(elemento => elemento.id == id)
        alertDelete(idx)
    }

    function alertDelete(id) {
        let respuesta = prompt('¿Estas segura que deseas eliminar a esta cliente?');
        let clientesEliminados = data.storage.deletedCustomers
        

        if (respuesta.toLowerCase() === 'si' ) {
            const clientesDelete = clientes.splice(id, 1)
            const deleted = clientesDelete[0]
            const motivo = prompt('Ingrese el motivo de la eliminacion')
            

            deleted.estado = 'eliminado'
            deleted.motivo = motivo

            clientesEliminados.unshift(deleted)

            data.storage.deletedCustomers = clientesEliminados
            
            window.localStorage.setItem('data', JSON.stringify(data))
            alert('Cliente eliminado satisfactoriamente')
        } else {
            alert('No se ha eliminado ningun cliente')
        }
    }
 
    console.log('holaaaaaaa')

    return (
        <div>
            <main className="contenedor">
                <h2 className="titulo">Clientes</h2>
                <div className="fechas-filtrado">
                    <input className="fechas--filtrado-input" type="date" id="fecha_inicial" />
                    <input className="fechas--filtrado-input" type="date" id="fecha_final" />
                    <input onClick={filtrarClientes} className="btn_filtrar" type="button" value="Filtrar" id="btn_filtrar" />
                </div>
                <section className="section-clientes" id="lista_clientes">
                    {
                        isVisible ? (
                            clientes.map(cliente => (
                                <div className="contact-card" id={cliente.id} key={cliente.id}>
                                    <h4 className="contact-card--data">Fecha</h4>
                                    <p>{cliente.date}</p>
                                    <h4 className="contact-card--data">Nombre</h4>
                                    <p>{cliente.name}</p>
                                    <h4 className="contact-card--data">Servicio</h4>
                                    <p>{cliente.service}</p>
                                    <h4 className="contact-card--data">Precio</h4>
                                    <p>{cliente.price}$</p>
                                    <h4 className="contact-card--data">Colaboradora</h4>
                                    <p>{cliente.colaborador}</p>
                                    <h4 className="contact-card--data">Descriccion</h4>
                                    <p>{cliente.description}</p>
                                    <button className="btnEliminarCliente" onClick={e => eliminarCliente(e)}>Eliminar</button>
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
                                    <button className="btnEliminarCliente" onClick={e => eliminarCliente(e)}>Eliminar</button>
                                </div>
                            ))
                        )
                    }
                </section>
            </main>
        </div>
    );
};

export default Customers;