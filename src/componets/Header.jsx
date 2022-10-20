import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import porcentage from '../componets/Porcentage'
import ExportToJson from "./ExportToJson";

const Header = ({ savedPercentage, data }) => {
    const [menuIsVisible, setMenuIsVisible] = useState('')
    const [girar, setGirar] = useState('')
    const [iconMenu, setIconMenu] = useState('menu')
    const navigate = useNavigate()
    const user = data

    const showMenu = () => {
        if (menuIsVisible !== 'mostrar-menu' && girar !== 'girar') {
            setMenuIsVisible('mostrar-menu')
            setGirar('girar')
            setIconMenu('close')
        } else {
            setMenuIsVisible('')
            setGirar('')
            setIconMenu('menu')
        }
    }

    const hideMenu = () => {
        setMenuIsVisible('')
        setGirar('')
        setIconMenu('menu')

    }

    useEffect(() =>{
        if(savedPercentage === '') porcentage()
    },[])

    const menu = ruta => {
        navigate(ruta)
        hideMenu()
    }

    return (
        <header>
            <nav>
                <span onClick={showMenu} className={`material-symbols-outlined icono-menu ${girar}`}>{iconMenu}</span>
                <h4>Hola! {user?.firstName} {user?.lastName} {( (user?.firstName)?.toLowerCase() === 'andreina' || (user?.firstName)?.toLowerCase() === 'nina') && 'Te Amo'}</h4>
                <ul id="menu" className={`menu ${menuIsVisible}`}>
                    <li onClick={() => menu('/')}><span className="material-symbols-outlined iconos-nemu">person_add</span> <span className="a">Nuevo Cliente</span> </li>
                    <li onClick={() => menu('/customers')}><span className="material-symbols-outlined iconos-nemu">group</span> <span className="a">Clientes</span> </li>
                    <li onClick={() => menu('/reports')}><span className="material-symbols-outlined iconos-nemu">analytics</span> <span className="a">Reporte Total</span> </li>
                    <li onClick={() => menu('/')}><span className="material-symbols-outlined iconos-nemu">event</span> <span className="a">Reservaciones</span> </li>
                    <li onClick={() => menu('/closed')}><span className="material-symbols-outlined iconos-nemu">published_with_changes</span> <span className="a">Cierre Semanal</span> </li>
                    <li onClick={() => menu('/deleted-customers')}><span className="material-symbols-outlined iconos-nemu">delete</span> <span className="a">Clientes Eliminados</span> </li>
                    <li onClick={() => ExportToJson(data)}><span className="material-symbols-outlined iconos-nemu">delete</span> <span className="a">Exportar Datos</span> </li>
                    <li onClick={() => menu('/settings')}><span className="material-symbols-outlined iconos-nemu">settings</span> <span className="a">Configuraciones</span> </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;