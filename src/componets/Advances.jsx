import { useForm } from "react-hook-form";


const Advances = () => {
    const { register, handleSubmit, reset } = useForm();
    let advances = JSON.parse(window.localStorage.getItem('advances'))
    if (advances === null) advances = [];
    let total = 0

    
    const totalAdvances = () => {
        advances.forEach(advance => {
            total += parseFloat(advance.amount)
        })
    }
    
    totalAdvances()

    const submit = newAdvance => {
        let date = new Date();
        advances.unshift(newAdvance)
        window.localStorage.setItem('advances', JSON.stringify(advances))
        resetData()
        totalAdvances()
    }

    const resetData = () => {
        reset(
            {
                date: '',
                amount: '',
                description: ''
            }
        )
        totalAdvances()
    }

    const deleteAdvance = id => {
        const newAdvances = advances.filter(advance => advance.date !== id)
        window.localStorage.setItem('advances', JSON.stringify(newAdvances))
        resetData()
    }

    return (
        <section className="advances">
            <form className="form-advance" onSubmit={handleSubmit(submit)}>
                <input className="fechas--filtrado-input advance" type="date" {...register('date')} />
                <input className="fechas--filtrado-input advance" type="text" {...register('amount')} placeholder='Monto' />
                <input className="fechas--filtrado-input descripcion" type="text" {...register('description')} placeholder='Descripción' />
                <button className="btn_filtrar btn-advance">Guardar</button>
            </form>
            <div className="table">
                <b className="th">Fecha</b>
                <b className="th">Monto</b>
                <b className="th">Descripcion</b>
            </div>
            <ul className="list-advances">
                {
                    advances && (
                        advances.map(advance => (
                            <li className="li" id={advance.date} key={advance.date}>
                                <p className="td">{advance.date}</p>
                                <p className="td">{advance.amount} $</p>
                                <p className="td">{advance.description}</p>
                                <p className="td"><button onClick={e => deleteAdvance(e.target.parentElement.parentElement.id)} className="material-symbols-outlined ver_registro">delete</button></p>
                            </li>
                        ))
                    )
                }
            </ul>
            <span className="total-advances"><b>Total:</b> {total} $</span>
        </section>
    );
};

export default Advances;