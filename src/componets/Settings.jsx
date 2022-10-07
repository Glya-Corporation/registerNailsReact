import { Accordion } from "react-bootstrap";
import colors from '../json/colors.json';
import fonts from '../json/fonts.json'

const Settings = () => {

    const changeColor = color => {
        window.localStorage.setItem('color', color)
        window.location.reload()
    }

    const changeFont = font => {
        window.localStorage.setItem('font', font)
        window.location.reload()
    }

    return (
        <Accordion flush>
            <Accordion.Item eventKey="0">
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
            <Accordion.Item eventKey="1">
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