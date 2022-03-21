import { Fragment, useState } from "react";
import Modal from "../../UI/Modal";
import AddToCartIcon from "../../../assets/icons/add_cart.svg";
const ListItems = ({ data, onAdd, onRemove }) => {
    const [quantity, changeQuantity] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const decrementQuantity = (e) => {
        e.stopPropagation();
        if (quantity == 1) onRemove(data.id);
        if (quantity > 0) changeQuantity(quantity - 1);
    };

    const incrementQuantity = (e) => {
        e.stopPropagation();
        onAdd(data.id);
        changeQuantity(quantity + 1);
    };
    const handleModal = () => {
        setShowModal((previousState) => !previousState);
    };
    return (
        <Fragment>
            <div onClick={handleModal} className={"item-card"}>
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
            {showModal && (
                <Modal onClose={handleModal}>
                    <div className="item-card__modal">
                        <div className="img-wrap">
                            <img
                                className={"img-fluid"}
                                src={`assets/${data.thumbnail}`}
                                alt="Item thumbnail"
                            />
                        </div>
                        <div className="meta">
                            <h3> {data.title} </h3>
                            <div className={"item-card__information"}>
                                <div className={"pricing"}>
                                    <span> ₹{data.discountedPrice} </span>
                                    <small>
                                        <strike> ₹{data.price} </strike>
                                    </small>
                                </div>
                            </div>
                            <p>{data.description}</p>
                            {quantity < 1 ? (
                                <button
                                    className={"cart-add cart-add__modal"}
                                    onClick={incrementQuantity}
                                >
                                    <span> Add to Cart! </span>
                                    <img src={AddToCartIcon} alt="Cart Icon" />
                                </button>
                            ) : (
                                <div className="cart-addon cart-addon__modal">
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
                    </div>
                </Modal>
            )}
        </Fragment>
    );
};

export default ListItems;
