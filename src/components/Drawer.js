function Drawer({ onRemove, onClose, items = [] }) {
    return (
        <div className="overlay">
            <div className="drawer">
                <h2 className="d-flex justify-between mb-30">
                    Корзина
                    <img className="removeBtn cu-p" onClick={onClose} src="/img/btn-remove.svg" alt="Remove" />
                </h2>

                {items.length > 0 ? (
                    <div className="d-flex flex-column flex">
                        <div className="items flex">
                            {items.map((obj) => (

                                <div className="cartItem d-flex align-center mb-20">
                                    <div style={{ backgroundImage: `url(${obj.imageUrl})` }} className="cartItemImg"></div>
                                    <div className="mr-20 flex">
                                        <p className="mb-5">{obj.title}</p>
                                        <b>{obj.price} руб.</b>
                                    </div>
                                    <img onClick={() => onRemove(obj.id)} className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
                                </div>
                            ))}
                        </div>

                        <div className="cartTotalBlock">
                            <ul>
                                <li>
                                    <span>Итого:</span>
                                    <div></div>
                                    <b>21 498 руб.</b>
                                </li>
                                <li>
                                    <span>Налог 5%:</span>
                                    <div></div>
                                    <b>1074 руб.</b>
                                </li>
                            </ul>
                            <button className="greenButton">
                                Оформить заказ
                                <img src="/img/arrow.svg" alt="Arrow" />
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="cartEmpty d-flex align-center justify-center flex-column flex">
                        <img className="mb-20" width="120px" src="/img/empty-cart.jpg" alt="EmptyCart" />
                        <h2>Корзина пустая</h2>
                        <p className="opacity-6">Добавьте товары, чтобы сделать заказ</p>
                        <button onClick={onClose} className="greenButton">
                            <img src="/img/arrow.svg" alt="Arrow" />
                            Вернуться назад
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Drawer;