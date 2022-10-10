import {Link} from 'react-router-dom';
import './App.css';


function Menu() {
    return(
        <div className="Header-div">
            <ul className="Lista">
                <li><Link className="Lista-link" to="/Home">Home</Link></li>
                <li><Link className="Lista-link" to="/Historia">História</Link></li>
                <li><Link className="Lista-link" to="/Agendamento">Agendamento</Link></li>
                <li><Link className="Lista-link" to="/Trabalhe">Trabalhe Conosco</Link></li>
                <li><Link className="Lista-link" to="/Informacoes">Informações</Link></li>
            </ul>
        </div>
    )
}

export default Menu;