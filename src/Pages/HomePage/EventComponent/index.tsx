import styles from './EventComponent.module.css';

import { IoTicketSharp } from 'react-icons/io5'

export default function Event(props: any){
  return(
    <div className={ styles.event }>
      <div className={ styles.event__left }>
        <img className={ styles.event__img } src={ props.imgEvent } alt="Foto do evento" lang='pt-BR'/>
      </div>
      <div className={ styles.event__right }>
        <p className={ styles.event__right_date } lang='pt-BR'>{ props.date }</p>
        <p className={ styles.event__right__desc } lang='pt-BR'>{ props.desc }</p>
        <button className={ styles.event__right__btn } lang='pt-BR'>Comprar Ingresso! <IoTicketSharp/></button>
      </div>
    </div>
  )
}