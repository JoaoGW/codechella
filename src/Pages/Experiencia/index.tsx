import PatternPage from "../../components/PatternPage";

import styles from './Experiencia.module.css';

import bannerImg from '../../assets/Images/banner_experiencia.webp';
import AcessibilidadeImg from '../../assets/Images/acessibilidade.webp';
import SustentabilidadeImg from '../../assets/Images/sustentabilidade.webp';
import AtracoesImg from '../../assets/Images/atracoes.webp';
import Banner from "../../components/Banner";

export default function Experiencia(){
  return(
    <PatternPage>
      <Banner bannerImg={ bannerImg } bannerTxt={ 'A Experiência' }/>
      <div className={ styles.experiencia }>
        <section className={ styles.acessibilidade }>
          <div>
            <img className={ styles.images__intros } src={ AcessibilidadeImg } alt="Uma mulher negra dançando com diversos confetes de festa" lang="pt-BR"/>
          </div>
          <span>
            <h2 className={ styles.title } lang="pt-BR">Acessibilidade e Inclusão</h2>
            <p className={ styles.infos } lang="pt-BR">
              Nosso evento tenta abraçar um público mais amplo em todos os sentidos, 
              de todas as idades, corpos, gostos e pensamentos!  Isso está presente no  
              espaço físico, na sinalização, no treinamento da equipe de apoio, na 
              comunicação em libras, braile, visual e tátil. Além disso, dispomos de 
              ingressos gratuitos para pessoas com deficiência e acompanhantes, 
              pessoas idosas e crianças!
            </p>
          </span>
        </section>
        <section className={ styles.sustentabilidade }>
          <span className={ styles.span__hide_mobile }>
            <h3 className={ styles.title__inv } lang="pt-BR">Sustentabilidade</h3>
            <p className={ styles.infos } lang="pt-BR">
              Queremos estar aqui celebrando daqui a 50, 100 anos! Por isso, levamos o 
              futuro do nosso planeta a sério. Nosso festival é carbono zero, com utilização 
              de copos retornáveis, coleta e destinação adequada de resíduos, e transporte 
              coletivo.
            </p>
          </span>
          <div>
            <img className={ styles.images__intros } src={ SustentabilidadeImg } alt="Uma pessoa segurando uma sacola com diversos itens que iriam para a lixeira comum e dando um fim apropriado a estes itens recicláveis" lang="pt-BR"/>
          </div>
          <span className={ styles.span__show_mobile }>
            <h3 className={ styles.title__inv } lang="pt-BR">Sustentabilidade</h3>
            <p className={ styles.infos } lang="pt-BR">
              Queremos estar aqui celebrando daqui a 50, 100 anos! Por isso, levamos o 
              futuro do nosso planeta a sério. Nosso festival é carbono zero, com utilização 
              de copos retornáveis, coleta e destinação adequada de resíduos, e transporte 
              coletivo.
            </p>
          </span>
        </section>
        <section className={ styles.atracoes }>
          <div>
            <img className={ styles.images__intros } src={ AtracoesImg } alt="Uma roda-gigante muito alta visto de baixo por uma pessoa" lang="pt-BR"/>
          </div>
          <span>
            <h4 className={ styles.title } lang="pt-BR">Atrações</h4>
            <p className={ styles.infos } lang="pt-BR">
              Intervenções artísticas e culturais para todos os gostos! Durante os intervalos 
              dos shows, nossa experiência contará com recreação para crianças, oficina de 
              cerâmica, origami, circo e aquarela! Além disso, nosso espaço contra com 3 praças 
              de alimentação, roda gigante e outros brinquedos!
            </p>
          </span>
        </section>
      </div>
    </PatternPage>
  )
}