import { useState } from "react";
import AddToCartIcon from "../../../assets/icons/add_cart.svg";
const ListItems = ({ data }) => {
    const [quantity, changeQuantity] = useState(0);

    const decrementQuantity = (e) => {
        if (quantity > 0) changeQuantity(quantity - 1);
    };

    const incrementQuantity = (e) => changeQuantity(quantity + 1);

    return (
        <div className={"item-card"}>
            <img
                className={"img-fluid"}
                src={`assets/${data.thumbnail}`}
                alt="Item thumbnail"
            />
            <div className={"item-card__information"}>
                <div className={"pricing"}>
                    <span> ₹{data.discountedPrice} </span>
                    <small>
                        <strike> ₹{data.price} </strike>
                    </small>
                </div>
                <div className={"title"}>
                    <h3> {data.title} </h3>
                </div>
            </div>
            {quantity < 1 ? (
                <button className={"cart-add"} onClick={incrementQuantity}>
                    <span> Add to Cart! </span>
                    <img src={AddToCartIcon} alt="Cart Icon" />
                </button>
            ) : (
                <div className="cart-addon">
                    <button onClick={decrementQuantity}>
                        <span> - </span>
                    </button>
                    <span> {quantity} </span>
                    <button onClick={incrementQuantity}>
                        <span> + </span>
                    </button>
                </div>
            )}
        </div>
    );
};

export default ListItems;
