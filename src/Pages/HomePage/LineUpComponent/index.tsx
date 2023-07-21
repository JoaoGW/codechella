import styles from './LineUp.module.css';

export default function LineUp(props: any) {
  return (
    <div className={ styles.lineup__content }>
      <p className={ styles.date }>{ props.date }</p>
      <div className={ styles.date_lineLeft }></div>
      <div className={ styles.date_lineRight }></div>
      <p className={ styles.show_name }>{ props.showName }</p>
      <div className={ styles.show_singers }>
        <p className={ styles.show_artists }>{ props.artist1 }</p>
        <p className={ styles.show_artists }>{ props.artist2 }</p>
        <p className={ styles.show_artists }>{ props.artist3 }</p>
        <p className={ styles.show_artists }>{ props.artist4 }</p>
        <p className={ styles.show_artists }>{ props.artist5 }</p>
        <p className={ styles.show_artists }>{ props.artist6 }</p>
        <p className={ styles.show_artists }>{ props.artist7 }</p>
        <p className={ styles.show_artists }>{ props.artist8 }</p>
        <p className={ styles.show_artists }>{ props.artist9 }</p>
        <p className={ styles.show_artists }>{ props.artist10 }</p>
        <p className={ styles.show_artists }>{ props.artist11 }</p>
        <p className={ styles.show_artists }>{ props.artist12 }</p>
        <p className={ styles.show_artists }>{ props.artist13 }</p>
      </div>
    </div>
  )
}