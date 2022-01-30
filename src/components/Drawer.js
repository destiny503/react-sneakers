import React from 'react';
import AppContext from "../context";
import Info from "./Info";
import axios from "axios";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

function Drawer({ onRemove, onClose, items = [] }) {
    const { cartItems, setCartItems } = React.useContext(AppContext)
    const [orderId, setOrderId] = React.useState(null)
    const [isOrderComplete, setIsOrderComplete] = React.useState(false)
    const [isLoading, setIsLoading] = React.useState(false)

    const onClickOrder = async () => {
        try {
            setIsLoading(true)
            const { data } = await axios.post("https://61f425bc10f0f7001768c84d.mockapi.io/orders", {
                items: cartItems,

            })
            await axios.put("https://61f425bc10f0f7001768c84d.mockapi.io/cart", [])
            setOrderId(data.id)
            setIsOrderComplete(true)
            setCartItems([])

            for (let i = 0; i < cartItems.length; i++) {
                let item = cartItems[i];
                await axios.delete('/cart/' + item.id)
                await delay(1000)
            }

        } catch (error) {
            alert('Не удалось создать заказ :(')
        }
        setIsLoading(false)
    }

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

                                <div key={obj.id} className="cartItem d-flex align-center mb-20">
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
                            <button disabled={isLoading} onClick={onClickOrder} className="greenButton">
                                Оформить заказ
                                <img src="/img/arrow.svg" alt="Arrow" />
                            </button>
                        </div>
                    </div>
                ) : (
                    <Info
                        title={isOrderComplete ? "Заказ оформлен" : "Корзина пустая"}
                        desc={isOrderComplete ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке` : "Добавьте товары, чтобы сделать заказ"}
                        image={isOrderComplete ? "/img/complete.jpg" : "/img/empty-cart.jpg"} />
                )}
            </div>
        </div>
    )
}

export default Drawer;