import React from 'react'
import styles from './Card.module.scss'

function Card({ onPlus, onClickFavorite, title, price, imageUrl }) {
  const [isAdded, setIsAdded] = React.useState(false)

  const onClickPlus = () => {
    !isAdded && onPlus({title, price, imageUrl})
    setIsAdded(!isAdded)
  }

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onClickFavorite}>
        <img src="/img/btn-unliked.svg" alt="Unliked" />
      </div>
      <img width={133} height={112} src={imageUrl} />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        <img className={styles.plus} onClick={onClickPlus} src={isAdded 
          ? "/img/btn-checked.svg" 
          : "/img/btn-unchecked.svg"} alt="Plus" />
      </div>
    </div>
  )
}
export default Card;