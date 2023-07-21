import styles from './Item.module.css';

export default function ItemLegenda(props: any){
  return(
    <div className={ styles.item_container }>
      <div className={ styles.item__square } style={{ background: props.cor }}></div>
      <div className={ styles.item__nome }>{ props.nome }</div>
    </div>
  )
}