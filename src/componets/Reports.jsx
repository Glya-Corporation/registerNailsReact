import { useState, useEffect } from "react";

const Reports = ({ clientes, porcentaje }) => {
    const [isVisible, setIsVisible] = useState(true)
    const [contador, setContador] = useState({})
    const [totalCobrado, setTotalCobrado] = useState(0)
    const [porcentajeDeGanancia, setPorcentajeDeGanancia] = useState(0)
    const [inicio, setInicio] = useState('') 
    const [fin, setFin] = useState('') 
    
    const data = (usersData) => {
        /* Declaracion y comprotamientos de Variables */
        const contando = {
            Manicure: 0,
            Pedicure: 0,
            Depilaciones: 0,
            Facial: 0,
            Masajes: 0
        };

        let cobrado = 0;
        
        /* Contar servicios realizados */
        usersData.map(element => {
            element.service
            if (contando[element.service]) {
                contando[element.service]++;
            } else {
                contando[element.service] = 1;
            }
        });

        /* Calcular totales */
        usersData.forEach(element => {
            cobrado += parseFloat(element.price)
        })
        setContador({ ...contando })
        setTotalCobrado(cobrado.toFixed(2))
        if (porcentaje === null) porcentaje = 0
        setPorcentajeDeGanancia(porcentaje)
    }

    useEffect(() => {
        data(clientes)
    }, [])


    const filtrarClientes = () => {
        const clientesFilter = []

        if (inicio === '' && fin === '') {
            data(clientes)
            setIsVisible(true)
        } else {
            setIsVisible(false)
            clientes.forEach(user => {
                if (user.date >= inicio && user.date <= fin) clientesFilter.push(user)
                data(clientesFilter)
            })
        }
    }

    return (
        <div>
            <main className="contenedor">
                <h2 className="titulo">Reportes</h2>
                <div className="fechas-filtrado">
                    <input className="fechas--filtrado-input" type="date" value={inicio} onChange={e=> setInicio(e.target.value)} />
                    <input className="fechas--filtrado-input" type="date" value={fin} onChange={e=> setFin(e.target.value)} />
                    <input onClick={filtrarClientes} className="btn_filtrar" type="button" value="Filtrar" id="btn_filtrar" />
                </div>
                <section className="section-reportes" id="reporte_total"></section>
            </main>
            {
                isVisible ? (
                    <div className="contact-card">
                        <h4 className="contact-card--data">Servicios</h4>
                        <p>Manicure: {contador.Manicure}</p>
                        <p>Pedicure: {contador.Pedicure}</p>
                        <p>Depilaciones: {contador.Depilaciones}</p>
                        <p>Limpieza Facial: {contador.Facial}</p>
                        <p>Masajes: {contador.Masajes}</p>
                        <h4 className="contact-card--data">Total Cobrado</h4>
                        <p>{totalCobrado} $</p>
                        <h4 className="contact-card--data">Total Ganado</h4>
                        <p>{(totalCobrado * (porcentajeDeGanancia / 100)).toFixed(2)} $</p>
                    </div>
                ) : (
                    <div className="contact-card">
                        <h4 className="contact-card--data">Servicios</h4>
                        <p>Manicure: {contador.Manicure}</p>
                        <p>Pedicure: {contador.Pedicure}</p>
                        <p>Depilaciones: {contador.Depilaciones}</p>
                        <p>Limpieza Facial: {contador.Facial}</p>
                        <p>Masajes: {contador.Masajes}</p>
                        <h4 className="contact-card--data">Total Cobrado</h4>
                        <p>{totalCobrado} $</p>
                        <h4 className="contact-card--data">Total Ganado</h4>
                        <p>{totalCobrado * (porcentajeDeGanancia / 100)} $</p>
                    </div>)
            }
        </div>
    );
};

export default Reports;