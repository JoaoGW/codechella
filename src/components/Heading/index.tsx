import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';

import styles from './Heading.module.css';

import Logo from '../../assets/Images/logo_branco.png';

export default function Heading(){
  return(
    <header>
      <nav className={ styles.navbarStyle }>
        <div className={ styles.navBar__logo }>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <img className={ styles.navBar__logo_img } src={ Logo } alt="CodeChella Logo" lang='en'/>
          </Link>
        </div>
        <div className={ styles.navBar__links }>
          <div className={ styles.navBar__links__link }>
            <Link to="/experiencia" style={{ textDecoration: 'none' }}>
              <p className={ styles.link }>A experiência</p>
            </Link>
          </div>
          <div className={ styles.navBar__links__link }>
            <Link to="/mapa" style={{ textDecoration: 'none' }}>
              <p className={ styles.link } >Mapa de Setores</p>
            </Link>
          </div>
          <div className={ styles.navBar__links__link }>
            <Link to="/informacoes" style={{ textDecoration: 'none' }}>
              <p className={ styles.link } >Informações</p>
            </Link>
          </div>
          <div className={ styles.navBar__links__link }>
            <Link to="/ingressos" style={{ textDecoration: 'none' }}>
              <p className={ styles.link } >Ingresso</p>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}