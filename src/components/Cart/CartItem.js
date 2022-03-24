const CartItem = ({ props }) => {
    console.log(props);
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
                    <button>-</button>
                    <span className="counter">{props.quantity}</span>
                    <button>+</button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
