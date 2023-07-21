import PatternPage from "../../components/PatternPage";

import styles from './HomePage.module.css';

import Banner from '../../assets/Images/banner.webp';
import BannerFooter from '../../assets/Images/banner_home_footer.webp';

import Event from "./EventComponent";
import LineUp from "./LineUpComponent";

import { dataEvents } from "../../data/events";
import lineups from "../../data/lineups.json";

export default function HomePage(){
  return(
    <PatternPage>
      <div className={ styles.banner }>
        <img src={ Banner } alt="CodeChella Banner" lang="pt-BR"/>
        <h1 className={ styles.banner__title } lang="pt-BR">Boas-vindas ao<br/>#CodeChella2023!</h1>
      </div>
      <section className={ styles.events }>
        { dataEvents.map((data) => (
          <Event imgEvent={ data.imgEv } date={ data.date } desc={ data.desc }/>
        ))}
      </section>
      <section className={ styles.lineup }>
        <h2 className={ styles.lineup__title }>/Line-Up/</h2>
        { lineups.map((data) => (
          <LineUp 
            key={ data.key } 
            date={ data.date } 
            showName={ data.showName } 
            artist1={ data.label1 }
            artist2={ data.label2 }
            artist3={ data.label3 }
            artist4={ data.label4 }
            artist5={ data.label5 }
            artist6={ data.label6 }
            artist7={ data.label7 }
            artist8={ data.label8 }
            artist9={ data.label9 }
            artist10={ data.label10 }
            artist11={ data.label11 }
            artist12={ data.label12 }
            artist13={ data.label13 }
          />
        ))}
      </section>
      <div className={ styles.banner__footer }>
        <img className={ styles.banner__footer__img } src={ BannerFooter } alt="Banner Dois do Evento" lang="en"/>
      </div>
    </PatternPage>
  )
}