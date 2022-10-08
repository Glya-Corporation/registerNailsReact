import { Accordion } from "react-bootstrap";
import colors from '../json/colors.json';
import fonts from '../json/fonts.json';
import { useForm } from "react-hook-form";

const Settings = () => {
    const  [edit, setEdit] = useState(false)
    const { register, handleSubmit, reset } = useForm()

    const changeColor = color => {
        window.localStorage.setItem('color', color)
        window.location.reload()
    }

    const changeFont = font => {
        window.localStorage.setItem('font', font)
        window.location.reload()
    }
    
    const submit = newUser => {
      console.log(newUser)
    }

    return (
        <Accordion flush>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Perfil</Accordion.Header>
                <Accordion.Body>
                    <form onSubmit={handleSubmit(submit)}>
                      {
                        edit ? (
                        <>
                          <input type='text' {...register('firstName')}/>
                      <input type='text' {...register('lastName')}/>
                      <input type='date' {...register('date')}/>
                      <input type='email' {...register('email')}/>
                      <button onClick={() => saveData()} className='material-symbols-outlined'>saved</button>
                      </>
                        ) : (
                        <>
                        <label>{user.firtName}</label>
                      <label>{user.lastName}</label>
                      <label>{user.date}</label>
                      <label>{user.email}</label>
                      </>
                        )
                      }
                    </form>
                    <button onClick={() => editData()} className='material-symbols-outlined'>add</button>
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
