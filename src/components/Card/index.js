import React from 'react'
import styles from './Card.module.scss'

function Card({ favorited = false, onPlus, onFavorite, title, price, imageUrl, id }) {

  const [isAdded, setIsAdded] = React.useState(false)
  const [isFavorite, setIsFavorite] = React.useState(favorited)

  const onClickPlus = () => {
    !isAdded && onPlus({ title, price, imageUrl })
    setIsAdded(!isAdded)
  }

  const onClickFavorite = () => {
    onFavorite({ title, price, imageUrl, id })
    setIsFavorite(!isFavorite)
  }

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onClickFavorite}>
        <img src={isFavorite
          ? "/img/btn-liked.svg"
          : "/img/btn-unliked.svg"} alt="Like" />
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