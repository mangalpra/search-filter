import React from "react";
import './styles.css';

const ListItem = ({
    item: {coverSrc, title, price, deliveryFree, serviceTime, rating },
}) => (
    <div className="listItem-wrap">
        <img src={coverSrc} alt="item" />
        <header>
            <h4>{title}</h4>
            <span>⭐{rating}</span>
        </header>
        <footer>
            <p><b>{serviceTime}</b> <span>Delivery Fee ${deliveryFree}</span></p>
            <p>
                <b>${price}</b>
            </p>
        </footer>
    </div>
);

export default ListItem;