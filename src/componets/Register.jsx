const Register = ({clientes}) => {

    if (clientes === null) clientes = []
    let valorId = JSON.parse(window.localStorage.getItem('idGuardada'))
    if (valorId === null) valorId = 0

    const savedClient = () => {
        const date_form = document.getElementById('date_form').value
        const name_form = document.getElementById('name_form').value
        const service_form = document.getElementById('service_form').value
        const price_form = parseFloat(document.getElementById('price_form').value)
        const colaborador_form = document.getElementById('colaborador_form').value
        const description_form = document.getElementById('description_form').value

        if (date_form && name_form && price_form && typeof (price_form) === typeof (0) && service_form !== 'Seleccionar...') {
            let nuevoCliente = {
                id: `${valorId}`,
                date: `${date_form}`,
                name: `${name_form}`,
                service: `${service_form}`,
                price: `${parseFloat(price_form)}`,
                colaborador: `${colaborador_form}`,
                description: `${description_form}`,
                estado: 'activo'
            }
            clientes.unshift(nuevoCliente)
            valorId++
            window.localStorage.setItem('idGuardada', JSON.stringify(valorId));
            window.localStorage.setItem('clientesGuardados', JSON.stringify(clientes));
            alert(`${name_form} a sido añadio con exito`)
        } else {
            alert('Debe llenar los cuatro espacios identificados con:  ( * )  y el precio debe ser numero')
        }
    }

    



    return (

        <div>
            <main className="contenedor">
                <section className="section-form">
                    <form action="" id="nuevoRegistro">
                        <h2 className="titulo">Ingrese los datos del nuevo cliente</h2>
                        <input className="input-form" id="date_form" type="date"  required />
                        <input className="input-form" id="name_form" type="text" placeholder="* Nombre y Apellido" required />
                        <select defaultValue={"default"} className="input-form" name="service_form" id="service_form" required >
                            <option disabled value="default">* Seleccionar...</option>
                            <option value="Manicure">Manicure</option>
                            <option value="Pedicure">Pedicure</option>
                            <option value="Depilaciones">Depilaciones</option>
                            <option value="Facial">Limpieza Facial</option>
                            <option value="Masajes">Masajes</option>
                        </select>
                        <input className="input-form" id="price_form" type="text" placeholder="* Precio" required />
                        <input className="input-form" id="colaborador_form" type="text" placeholder="Colaboradora" />
                        <textarea className="input-form description" name="" id="description_form" cols="30" rows="10"></textarea>
                        <input onClick={savedClient} className="input-form btn_form" type="submit" value="Registrar" id="btn_form" />
                    </form>
                </section>
            </main>
        </div>
    );
};

export default Register;