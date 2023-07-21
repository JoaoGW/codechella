import { useState } from 'react';
import { Link } from "react-router-dom";

import Banner from "../../components/Banner";
import PatternPage from "../../components/PatternPage";

import styles from './Ingressos.module.css';

import bannerImg from '../../assets/Images/banner_garanta.webp';
import rightArrow from '../../assets/Icons/right-arrow.png';

export default function Ingressos(){  

  const url = 'ingresso.json';
  const [ data, setData ] = useState({
    name: "",
    email: "",
    ticket: "",
    date: "",
  })

  function handleSubmit(event: any){
    const newData: any = { ...data }
    newData[event.target.id] = event.target.value;
    setData(newData);
  }

  function submitData(event: any){
    event.preventDefault();
  }

  if(window.innerWidth > 820){
    return(
      <PatternPage>
        <Banner bannerImg={ bannerImg } bannerTxt={ 'Garanta seu Ingresso' } objPos={ '0 -500px' }/>
        <div className={ styles.ingresso }>
          <h2 className={ styles.title } lang='pt-BR'>Preencha o formulário a seguir:</h2>
          <form className={ styles.ingressos } onSubmit={ (event) => submitData(event) }>
            <div className={ styles.ingressos__nome }>
              <label className={ styles.ingressos__label } lang="pt-BR">Nome Completo:</label>
              <br/>
              <input className={ styles.ingressos__field } type="text" onChange={ (event) => handleSubmit(event) } id="name" value={ data.name }/>
            </div>
            <div className={ styles.ingressos__email }>
              <label className={ styles.ingressos__label } lang="pt-BR">Email:</label>
              <br/>
              <input className={ styles.ingressos__field } type="mail" onChange={ (event) => handleSubmit(event) } id="email" value={ data.email }/>
            </div>
            <div className={ styles.ingressos__tipo }>
              <label className={ styles.ingressos__label } lang="pt-BR">Tipo de ingresso</label>
              <br/>
              <input className={ styles.ingressos__field } list="tickettype" name="tickets" placeholder='Tipo de Ingresso' onChange={ (event) => handleSubmit(event) } id="ticket" value={ data.ticket }/>
              <datalist id='tickettype'>
                <option value="Pista Comum" lang="pt-BR"/>
                <option value="Pista Premium" lang="pt-BR"/>
                <option value="Cadeiras" lang="pt-BR"/>
              </datalist>
            </div>
            <div className={ styles.ingressos__nascimento }>
              <label className={ styles.ingressos__label } lang="pt-BR">Data de nascimento:</label>
              <br/>
              <input className={ styles.ingressos__field } type="date" onChange={ (event) => handleSubmit(event) } id="date" value={ data.date }/>
            </div>
            <Link className={ styles.link } to='/ingresso' style={{ textDecoration: 'none' }}>
              <div className={ styles.ingressos__enviar }>
                <button className={ styles.ingressos__enviar_botao } type="submit" lang="pt-BR">Avançar!</button>
                <img className={ styles.ingressos__enviar_seta } src={ rightArrow } alt="#" />
              </div>
            </Link>
          </form>
        </div>
      </PatternPage>
    )
  }else if(window.innerWidth > 450){
    return(
      <PatternPage>
        <Banner bannerImg={ bannerImg } bannerTxt={ 'Garanta seu Ingresso' } objPos={ '0 -150px' }/>
        <div className={ styles.ingresso }>
          <h2 className={ styles.title } lang='pt-BR'>Preencha o formulário a seguir:</h2>
          <form className={ styles.ingressos } onSubmit={ (event) => submitData(event) }>
            <div className={ styles.ingressos__nome }>
              <label className={ styles.ingressos__label } lang="pt-BR">Nome Completo:</label>
              <br/>
              <input className={ styles.ingressos__field } type="text" onChange={ (event) => handleSubmit(event) } id="name" value={ data.name }/>
            </div>
            <div className={ styles.ingressos__email }>
              <label className={ styles.ingressos__label } lang="pt-BR">Email:</label>
              <br/>
              <input className={ styles.ingressos__field } type="mail" onChange={ (event) => handleSubmit(event) } id="email" value={ data.email }/>
            </div>
            <div className={ styles.ingressos__tipo }>
              <label className={ styles.ingressos__label } lang="pt-BR">Tipo de ingresso</label>
              <br/>
              <input className={ styles.ingressos__field } list="tickettype" name="tickets" placeholder='Tipo de Ingresso' onChange={ (event) => handleSubmit(event) } id="ticket" value={ data.ticket }/>
              <datalist id='tickettype'>
                <option value="Pista Comum" lang="pt-BR"/>
                <option value="Pista Premium" lang="pt-BR"/>
                <option value="Cadeiras" lang="pt-BR"/>
              </datalist>
            </div>
            <div className={ styles.ingressos__nascimento }>
              <label className={ styles.ingressos__label } lang="pt-BR">Data de nascimento:</label>
              <br/>
              <input className={ styles.ingressos__field } type="date" onChange={ (event) => handleSubmit(event) } id="date" value={ data.date }/>
            </div>
            <Link className={ styles.link } to='/ingresso' style={{ textDecoration: 'none' }}>
              <div className={ styles.ingressos__enviar }>
                <button className={ styles.ingressos__enviar_botao } type="submit" lang="pt-BR">Avançar!</button>
                <img className={ styles.ingressos__enviar_seta } src={ rightArrow } alt="#" />
              </div>
            </Link>
          </form>
        </div>
      </PatternPage>
    )
  }else{
    return(
      <PatternPage>
        <Banner bannerImg={ bannerImg } bannerTxt={ 'Garanta seu Ingresso' } objPos={ '0 0' }/>
        <div className={ styles.ingresso }>
          <h2 className={ styles.title } lang='pt-BR'>Preencha o formulário a seguir:</h2>
          <form className={ styles.ingressos } onSubmit={ (event) => submitData(event) }>
            <div className={ styles.ingressos__nome }>
              <label className={ styles.ingressos__label } lang="pt-BR">Nome Completo:</label>
              <br/>
              <input className={ styles.ingressos__field } type="text" onChange={ (event) => handleSubmit(event) } id="name" value={ data.name }/>
            </div>
            <div className={ styles.ingressos__email }>
              <label className={ styles.ingressos__label } lang="pt-BR">Email:</label>
              <br/>
              <input className={ styles.ingressos__field } type="mail" onChange={ (event) => handleSubmit(event) } id="email" value={ data.email }/>
            </div>
            <div className={ styles.ingressos__tipo }>
              <label className={ styles.ingressos__label } lang="pt-BR">Tipo de ingresso</label>
              <br/>
              <input className={ styles.ingressos__field } list="tickettype" name="tickets" placeholder='Tipo de Ingresso' onChange={ (event) => handleSubmit(event) } id="ticket" value={ data.ticket }/>
              <datalist id='tickettype'>
                <option value="Pista Comum" lang="pt-BR"/>
                <option value="Pista Premium" lang="pt-BR"/>
                <option value="Cadeiras" lang="pt-BR"/>
              </datalist>
            </div>
            <div className={ styles.ingressos__nascimento }>
              <label className={ styles.ingressos__label } lang="pt-BR">Data de nascimento:</label>
              <br/>
              <input className={ styles.ingressos__field } type="date" onChange={ (event) => handleSubmit(event) } id="date" value={ data.date }/>
            </div>
            <Link className={ styles.link } to='/ingresso' style={{ textDecoration: 'none' }}>
              <div className={ styles.ingressos__enviar }>
                <button className={ styles.ingressos__enviar_botao } type="submit" lang="pt-BR">Avançar!</button>
                <img className={ styles.ingressos__enviar_seta } src={ rightArrow } alt="#" />
              </div>
            </Link>
          </form>
        </div>
      </PatternPage>
    )
  }
}