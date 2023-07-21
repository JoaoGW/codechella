import styles from './Footing.module.css';

import WhatsApp from '../../assets/Icons/zap.png';
import Twitch from '../../assets/Icons/twitch.png';
import Instagram from '../../assets/Icons/insta.png';
import Twitter from '../../assets/Icons/twitter.png';

export default function Footing(){
  return(
    <footer>
      <div className={ styles.footing }>
        <div className={ styles.footing__left }>
          <div className={ styles.footing__left_logo }></div>
          <div className={ styles.footing__left_socials }>
            <p className={ styles.footing__left_socials_info }>Acesse nossas redes:</p>
            <img className={ styles.footing__left_socials_social } src={ WhatsApp } alt="WhatsApp" />
            <img className={ styles.footing__left_socials_social } src={ Twitch } alt="Twitch" />
            <img className={ styles.footing__left_socials_social } src={ Instagram } alt="Instagram" />
            <img className={ styles.footing__left_socials_social } src={ Twitter } alt="Twitter" />
          </div>
        </div>
        <div className={ styles.footing__right }>
          <div className={ styles.footing__right_developed }>
            <p className={ styles.footing__right_developed_info }>Desenvolvido por GWBR Technologies</p>
            <p className={ styles.footing__right_developed_info }>Julho de 2023</p>
          </div>
        </div>
      </div>
    </footer>
  )
}