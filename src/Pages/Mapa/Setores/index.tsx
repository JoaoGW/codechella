import styles from './Setores.module.css';

export default function Setores(props: any){
  return(
    <div className={ styles.setor } style={{ marginTop: props.marginTop }}>
      <div className={ styles.img__container }>
        <img className={ styles.setor__img } src={ props.setorImg } alt="Imagem do Setor" lang='pt-BR'/>
      </div>
      <span>
        <p className={ styles.local }>{ props.local }</p>
        <p className={ styles.desc }>{ props.desc }</p>
      </span>
    </div>
  )
}