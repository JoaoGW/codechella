import PatternPage from "../../components/PatternPage";
import Banner from "../../components/Banner";
import ItemLegenda from "./ItemLegenda";

import styles from './Mapa.module.css';

import bannerImg from '../../assets/Images/banner_mapa.webp';
import mapaSetores from '../../assets/Images/mapasetores.png';

import assentos from '../../data/assentos.json';
import { locais } from '../../data/locais';
import Setores from "./Setores";

export default function Mapa(){
  if(window.innerWidth > 820){
    return(
      <PatternPage>
        <Banner bannerImg={ bannerImg } bannerTxt={ 'Mapa de Setores' } objPos={ '0 -830px' }/>
        <div className={ styles.mapa }>
          <section className={ styles.setores }>
            <div className={ styles.setores__mapa_container }>
              <img className={ styles.setores__mapa } src={ mapaSetores } alt="Mapa de Setores" lang="pt-BR"/>
            </div>
            <div className={ styles.setores__legenda }>
              <h2 lang="pt-BR">Legenda:</h2>
              <ul>
                { assentos.map((data) => (
                  <li>
                    <ItemLegenda key={ data.id } cor={ data.cor } nome={ data.nome }/>
                  </li>
                ))}
              </ul>
            </div>
          </section>
          <section className={ styles.detalhes }>
            <h3 className={ styles.detalhes__titulo } lang="pt-BR">Mais detalhes sobre os setores:</h3>
            <div className={ styles.detalhes__locais }>
              { locais.map((data) => (
                <Setores key={ data.id } marginTop={ data.marginTop } setorImg={ data.setorImg } local={ data.local } desc={ data.desc }/>
              ))}
            </div>
          </section>
        </div>
      </PatternPage>
    )
  }else if(window.innerWidth > 450){
    return(
      <PatternPage>
        <Banner bannerImg={ bannerImg } bannerTxt={ 'Mapa de Setores' } objPos={ '0 -190px' }/>
        <div className={ styles.mapa }>
          <section className={ styles.setores }>
            <div className={ styles.setores__mapa_container }>
              <img className={ styles.setores__mapa } src={ mapaSetores } alt="Mapa de Setores" lang="pt-BR"/>
            </div>
            <div className={ styles.setores__legenda }>
              <h2 lang="pt-BR">Legenda:</h2>
              <ul>
                { assentos.map((data) => (
                  <li>
                    <ItemLegenda key={ data.id } cor={ data.cor } nome={ data.nome }/>
                  </li>
                ))}
              </ul>
            </div>
          </section>
          <section className={ styles.detalhes }>
            <h3 className={ styles.detalhes__titulo } lang="pt-BR">Mais detalhes sobre os setores:</h3>
            <div className={ styles.detalhes__locais }>
              { locais.map((data) => (
                <Setores key={ data.id } marginTop={ data.marginTop } setorImg={ data.setorImg } local={ data.local } desc={ data.desc }/>
              ))}
            </div>
          </section>
        </div>
      </PatternPage>
    )
  }else{
    return(
      <PatternPage>
        <Banner bannerImg={ bannerImg } bannerTxt={ 'Mapa de Setores' } objPos={ '0 -48px' }/>
        <div className={ styles.mapa }>
          <section className={ styles.setores }>
            <div className={ styles.setores__mapa_container }>
              <img className={ styles.setores__mapa } src={ mapaSetores } alt="Mapa de Setores" lang="pt-BR"/>
            </div>
            <div className={ styles.setores__legenda }>
              <h2 lang="pt-BR">Legenda:</h2>
              <ul>
                { assentos.map((data) => (
                  <li>
                    <ItemLegenda key={ data.id } cor={ data.cor } nome={ data.nome }/>
                  </li>
                ))}
              </ul>
            </div>
          </section>
          <section className={ styles.detalhes }>
            <h3 className={ styles.detalhes__titulo } lang="pt-BR">Mais detalhes sobre os setores:</h3>
            <div className={ styles.detalhes__locais }>
              { locais.map((data) => (
                <Setores key={ data.id } marginTop={ data.marginTop } setorImg={ data.setorImg } local={ data.local } desc={ data.desc }/>
              ))}
            </div>
          </section>
        </div>
      </PatternPage>
    )
  }
}