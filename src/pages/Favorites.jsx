import React from "react";
import Card from "../components/Card";
import AppContext from '../context';
import { Link } from "react-router-dom";

function Favorites() {
    const { favorites, onAddToFavorite } = React.useContext(AppContext)

    return (
        <div className="content p-40">
            <div className="content-inner d-flex align-center justify-between mb-40">
                <h1>Избранное</h1>
            </div>
            <div className="d-flex flex-wrap justify-center">
                {
                    (favorites.length > 0)
                        ? favorites.map((item, index) => <Card
                            key={index}
                            favorited={true}
                            onFavorite={onAddToFavorite}
                            {...item} />)
                        : <div className="empty d-flex flex-column align-center">
                            <img src="img/favEmpty.png" alt="favorites empty" />
                            <h2>Тут ничего нет :(</h2>
                            <p className="opacity-6">Вы ещё ничего не добавили в избранное</p>
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

export default Favorites