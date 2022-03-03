import React from "react";
import axios from "axios";
import Card from "../components/Card";
import { Link } from "react-router-dom";

function Orders() {
    const [orders, setOrders] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)
    const [noData, setNoData] = React.useState(true)

    React.useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get('https://61f425bc10f0f7001768c84d.mockapi.io/orders')
                setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []))
                setIsLoading(false)
                if (data.length > 0) setNoData(false)
            } catch (error) {
                alert('Ошибка при запросе заказов')
            }
        })()
    }, [])

    return (
        <div className="content p-40">
            <div className="content-inner d-flex align-center justify-between mb-40">
                <h1>Мои заказы</h1>
            </div>
            <div className="orders d-flex flex-wrap justify-center">
                {
                    (isLoading
                        ? [...Array(8)]
                        : orders).map((item, index) =>
                            <Card
                                key={index}
                                loading={isLoading}
                                {...item}
                            />)
                }
                {
                    (noData) &&
                    <div className="empty d-flex flex-column align-center">
                        <img src="img/ordersEmpty.png" alt="orders empty" />
                        <h2>У вас нет заказов</h2>
                        <p className="opacity-6">Оформите заказ и он тут обязательно появится!</p>
                        <Link to="/">
                            <button className="greenButtonEmpty mt-20">
                                <img src="img/arrow.svg" alt="Arrow" />
                                Вернуться назад
                            </button>
                        </Link>
                    </div>
                }
            </div>
        </div>
    )
}

export default Orders