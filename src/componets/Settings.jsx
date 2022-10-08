import { Accordion } from "react-bootstrap";
import colors from '../json/colors.json';
import fonts from '../json/fonts.json';
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";


const Settings = () => {
    const [edit, setEdit] = useState(false)
    const { register, handleSubmit, reset } = useForm()
    const user = JSON.parse(window.localStorage.getItem('user'))


    const changeColor = color => {
        window.localStorage.setItem('color', color)
        window.location.reload()
    }

    const changeFont = font => {
        window.localStorage.setItem('font', font)
        window.location.reload()
    }

    const submit = newUser => {
        if (newUser.firstName !== '' && newUser.lastName !== '' && newUser.date !== '' && newUser.email !== '') {
            window.localStorage.setItem('user', JSON.stringify(newUser))
            window.location.reload()
        } else {
            alert('Debe llenar todos los campos')
        }
    }

    const resetData = () => {
        reset({})
    }

    return (
        <Accordion flush>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Perfil</Accordion.Header>
                <Accordion.Body>
                    <form className='profile-form' onSubmit={handleSubmit(submit)}>
                        {
                            edit ? (
                                <>
                                    <input className='profile-fields' placeholder={user?.firstName} type='text' {...register('firstName')} />
                                    <input className='profile-fields' placeholder={user?.lastName} type='text' {...register('lastName')} />
                                    <input className='profile-fields' placeholder={user?.date} type='date' {...register('date')} />
                                    <input className='profile-fields' placeholder={user?.email} type='email' {...register('email')} />
                                    <button className='btn-profile'><span className="material-symbols-outlined">save</span>Guardar Cambios</button>
                                </>
                            ) : (
                                <>
                                    <label className='profile-fields'>{user?.firstName}</label>
                                    <label className='profile-fields'>{user?.lastName}</label>
                                    <label className='profile-fields'>{user?.date}</label>
                                    <label className='profile-fields'>{user?.email}</label>
                                </>
                            )
                        }
                        <button type="button" onClick={() => setEdit(!edit)} className='btn-profile'><span className="material-symbols-outlined">{user === null ? 'add' : 'edit'}</span>{user === null ? 'Agregar' : 'Editar'} usuario</button>
                    </form>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Temas</Accordion.Header>
                <Accordion.Body>
                    <ul className="list-colors">
                        {
                            colors.map(color => (
                                <li onClick={() => changeColor(color.name)} key={color.name} className="item-color">
                                    <span style={{ background: `${color.tres}` }}>{color.tres}</span>
                                    <span style={{ background: `${color.uno}` }}>{color.uno}</span>
                                    <span style={{ background: `${color.dos}` }}>{color.dos}</span>
                                </li>
                            ))
                        }
                    </ul>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Fuentes</Accordion.Header>
                <Accordion.Body>
                    <ul className="list-font">
                        {
                            fonts.map(font => (
                                <li onClick={() => changeFont(font.name)} key={font.name} className={`item-font ${font.name}`}>{font.name}</li>
                            ))
                        }
                    </ul>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};

export default Settings;
