import Faq from "react-faq-component";

import PatternPage from "../../components/PatternPage";
import Banner from "../../components/Banner";

import styles from './Informacoes.module.css';
import '../../styles/variables.css'

import bannerImg from '../../assets/Images/banner_informacoes.webp';

export default function Informacoes(){

  const data = {
    rows: [
      {
        title: "Quais serão as atrações?",
        content: `Teremos dois dias de shows, o primeiro (11/03) com bandas de rock, 
        e o segundo (12/03) com bandas pop. Confira o line-up em detalhes clicando 
        neste link!`,
      },
      {
        title: "Qual é a classificação etária?",
        content: `Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam 
        vitae convallis ex tortor sed dolor.`,
      },
      {
        title: "Quais são os setores disponíveis?",
        content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
        Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
        Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante.`,
      },
      {
        title: "Quais são os itens proibidos?",
        content: `Vivamus venenatis ultricies nibh in volutpat.
        Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate 
        arcu sed massa euismod dignissim.`,
      },
      {
        title: "O que levar no dia?",
        content: `Duis aute irure dolor in reprehenderit in voluptate velit esse 
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      }
    ],
  };

  const styleshed = {
    bgColor: '#2E7BA2',
    titleTextColor: "white",
    rowTitleColor: "white",
    rowContentColor: 'white',
    arrowColor: "white",
    rowContentPaddingTop: '16px',
    rowContentPaddingBottom: '16px',
    rowContentPaddingLeft: '16px',
    rowContentPaddingRight: '150px'
  };

  const config = {
    animate: true
  };

  if(window.innerWidth > 820){
    return(
      <PatternPage>
        <Banner bannerImg={ bannerImg } bannerTxt={ 'Informações Gerais' } objPos={ '0 -520px' }/>
        <section className={ styles.faq }>
          <h2 className={ styles.faq__title } lang="pt-BR">Perguntas Frequentes:</h2>
          <Faq data={ data } styles={ styleshed } config={ config }/>
        </section>
      </PatternPage>
    )
  }else if(window.innerWidth > 450){
    return(
      <PatternPage>
        <Banner bannerImg={ bannerImg } bannerTxt={ 'Informações Gerais' } objPos={ '0 -190px' }/>
        <section className={ styles.faq }>
          <h2 className={ styles.faq__title } lang="pt-BR">Perguntas Frequentes:</h2>
          <Faq data={ data } styles={ styleshed } config={ config }/>
        </section>
      </PatternPage>
    )
  }else{
    return(
      <PatternPage>
        <Banner bannerImg={ bannerImg } bannerTxt={ 'Informações Gerais' } objPos={ '0 0' }/>
        <section className={ styles.faq }>
          <h2 className={ styles.faq__title } lang="pt-BR">Perguntas Frequentes:</h2>
          <Faq data={ data } styles={ styleshed } config={ config }/>
        </section>
      </PatternPage>
    )
  }
}