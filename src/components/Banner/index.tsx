import styles from './Banner.module.css';

export default function Banner(props: any){
  return(
    <div className={ styles.banner }>
      <img className={ styles.banner__photo } src={ props.bannerImg } alt="Banner da Página" lang='pt-BR' style={{ objectPosition: props.objPos }}/>
      <h1 className={ styles.banner__text } lang="pt-BR">{ props.bannerTxt }</h1>
    </div>
  )
}