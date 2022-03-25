const CartItem = ({ props, onIncrement, onDecrement }) => {
    const handleIncrement = (e) => {
        e.stopPropagation();
        onIncrement(props.id);
    };

    const handleDecrement = (e) => {
        e.stopPropagation();
        onDecrement(props.id);
    };
    return (
        <div className="checkout-modal_list-item">
            <div className="img-wrap">
                <img
                    className="img-fluid"
                    src={`/assets/${props.thumbnail}`}
                    alt={props.title}
                />
            </div>
            <div className="information">
                <div>
                    <h4>{props.title}</h4>
                    <div className="pricing">
                        <span>₹{props.discountedPrice}</span>
                        <small>
                            <strike>₹{props.price}</strike>
                        </small>
                    </div>
                </div>
                <div className="cart-addon cart-addon__modal">
                    <button onClick={handleDecrement}>-</button>
                    <span className="counter">{props.quantity}</span>
                    <button onClick={handleIncrement}>+</button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
