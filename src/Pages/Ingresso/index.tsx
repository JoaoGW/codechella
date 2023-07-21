import PatternPage from "../../components/PatternPage";
import Banner from "../../components/Banner";

import styles from './Ingresso.module.css';

import bannerImg from '../../assets/Images/banner_ingresso.webp';
import Logo from '../../assets/Images/logo.png';
import QRCode from '../../assets/Images/qrcode.png';

export default function Ingresso(){
  if(window.innerWidth > 820){
    return(
      <PatternPage>
        <Banner bannerImg={ bannerImg } bannerTxt={ 'Seu ingresso está aqui!' } objPos={ '0 -300px' }/>
        <div className={ styles.ingresso }>
          <h2 className={ styles.ingresso__titulo } lang="pt-BR">Uhul, agora sim! Seu ingresso está aqui, apresente na entrada do evento e divirta-se!</h2>
          <div className={ styles.ingresso__corpo }>
            <img className={ styles.logo } src={ Logo } alt="#" />
            <div className={ styles.ingresso__corpo_infos }>
              <div>
                <img className={ styles.qrcode } src={ QRCode } alt="Código QR a ser lido pelo fiscal na entrada" lang="pt-BR"/>
              </div>
              <div className={ styles.ingresso__corpo__textos }>
                <p className={ styles.ingresso__nome } lang="pt-BR">Nome Qualquer</p>
                <p className={ styles.ingresso__infos } lang="pt-BR">Ingresso Cortesia</p>
                <p className={ styles.ingresso__infos } lang="pt-BR">Pista Premium</p>
                <p className={ styles.ingresso__infos } lang="pt-BR">Data do Evento: 19/11</p>
                <p className={ styles.ingresso__infos } lang="pt-BR">Local: São Paulo, SP</p>
              </div>
            </div>
          </div>
        </div>
      </PatternPage>
    )
  }else if(window.innerWidth > 450){
    return(
      <PatternPage>
        <Banner bannerImg={ bannerImg } bannerTxt={ 'Seu ingresso está aqui!' } objPos={ '0 -100px' }/>
        <div className={ styles.ingresso }>
          <h2 className={ styles.ingresso__titulo } lang="pt-BR">Uhul, agora sim! Seu ingresso está aqui, apresente na entrada do evento e divirta-se!</h2>
          <div className={ styles.ingresso__corpo }>
            <img className={ styles.logo } src={ Logo } alt="#" />
            <div className={ styles.ingresso__corpo_infos }>
              <div>
                <img className={ styles.qrcode } src={ QRCode } alt="Código QR a ser lido pelo fiscal na entrada" lang="pt-BR"/>
              </div>
              <div className={ styles.ingresso__corpo__textos }>
                <p className={ styles.ingresso__nome } lang="pt-BR">Nome Qualquer</p>
                <p className={ styles.ingresso__infos } lang="pt-BR">Ingresso Cortesia</p>
                <p className={ styles.ingresso__infos } lang="pt-BR">Pista Premium</p>
                <p className={ styles.ingresso__infos } lang="pt-BR">Data do Evento: 19/11</p>
                <p className={ styles.ingresso__infos } lang="pt-BR">Local: São Paulo, SP</p>
              </div>
            </div>
          </div>
        </div>
      </PatternPage>
    )
  }else{
    return(
      <PatternPage>
        <Banner bannerImg={ bannerImg } bannerTxt={ 'Seu ingresso está aqui!' } objPos={ '0 0' }/>
        <div className={ styles.ingresso }>
          <h2 className={ styles.ingresso__titulo } lang="pt-BR">Uhul, agora sim! Seu ingresso está aqui, apresente na entrada do evento e divirta-se!</h2>
          <div className={ styles.ingresso__corpo }>
            <img className={ styles.logo } src={ Logo } alt="#" />
            <div className={ styles.ingresso__corpo_infos }>
              <div>
                <img className={ styles.qrcode } src={ QRCode } alt="Código QR a ser lido pelo fiscal na entrada" lang="pt-BR"/>
              </div>
              <div className={ styles.ingresso__corpo__textos }>
                <p className={ styles.ingresso__nome } lang="pt-BR">Nome Qualquer</p>
                <p className={ styles.ingresso__infos } lang="pt-BR">Ingresso Cortesia</p>
                <p className={ styles.ingresso__infos } lang="pt-BR">Pista Premium</p>
                <p className={ styles.ingresso__infos } lang="pt-BR">Data do Evento: 19/11</p>
                <p className={ styles.ingresso__infos } lang="pt-BR">Local: São Paulo, SP</p>
              </div>
            </div>
          </div>
        </div>
      </PatternPage>
    )
  }
}