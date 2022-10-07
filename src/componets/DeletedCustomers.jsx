const DeletedCustomers = () => {
    let deletedCustomers = JSON.parse(window.localStorage.getItem('clientesEliminados'))
    if (deletedCustomers === null) deletedCustomers = []

    return (
        <main className="list-customersDeleted">
            <h2 className="subtitulo">Clientes Eliminados</h2>
            {
                deletedCustomers.length >= 1 && (
                    <ul>
                        {
                            deletedCustomers.map(cliente => (
                                <li className="list-register" key={cliente.id}>
                                    <p><b>Id:</b> {cliente.id}</p>
                                    <p><b>Estado:</b> {cliente.estado}</p>
                                    <p><b>Nompre:</b> {cliente.name}</p>
                                    <p><b>Motivo:</b> {cliente.motivo}</p>
                                    <p><b>Fecha:</b> {cliente.date}</p>
                                    <p><b>Description:</b> {cliente.description}</p>
                                    <p><b>Servicio:</b> {cliente.service}</p>
                                    <p><b>Colaborador:</b> {cliente.colaborador}</p>
                                    <p><b>Precio:</b> {cliente.price} $</p>
                                </li>
                            ))
                        }
                    </ul>
                )
            }
        </main>
    );
};

export default DeletedCustomers;