import { useState } from "react";
import { useForm } from "react-hook-form";

const Register = ({ clientes, data }) => {
    const { register, handleSubmit, reset } = useForm()
    const [service, setService] = useState('')

    const submit = newCusttomer => {
        let nuevoCliente = {
            id: Number(new Date()),
            date: newCusttomer.date,
            name: newCusttomer.name,
            service: service,
            price: parseFloat(newCusttomer.price),
            colaborador: newCusttomer.colaborador,
            description: newCusttomer.description,
            estado: 'activo'
        }
        clientes.unshift(nuevoCliente)
        data.storage.customers = clientes

        window.localStorage.setItem('data', JSON.stringify(data));
        alert(`${newCusttomer.name} a sido añadio con exito`)
    }





    return (

        <div>
            <main className="contenedor">
                <section className="section-form">
                    <form onSubmit={handleSubmit(submit)}>
                        <h2 className="titulo">Ingrese los datos del nuevo cliente</h2>
                        <input className="input-form" type="date" {...register('date')} required />
                        <input className="input-form" type="text" {...register('name')} placeholder="* Nombre y Apellido" required />
                        <select defaultValue={"default"} className="input-form" onChange={e => setService(e.target.value)} required >
                            <option disabled value="default">* Seleccionar...</option>
                            <option value="Manicure">Manicure</option>
                            <option value="Pedicure">Pedicure</option>
                            <option value="Depilaciones">Depilaciones</option>
                            <option value="Facial">Limpieza Facial</option>
                            <option value="Masajes">Masajes</option>
                        </select>
                        <input className="input-form" type="text" {...register('price')} placeholder="* Precio" required />
                        <input className="input-form" type="text" {...register('colaborador')} placeholder="Colaboradora" />
                        <textarea className="input-form description" name="" {...register('description')} cols="30" rows="10"></textarea>
                        <input className="input-form btn_form" type="submit" value="Registrar" id="btn_form" />
                    </form>
                </section>
            </main>
        </div>
    );
};

export default Register;