import { Fragment, useState } from "react";
import Modal from "../../UI/Modal";
import AddToCartIcon from "../../../assets/icons/add_cart.svg";
import { useSelector, useDispatch } from "react-redux";
import {
    addItemEventHandler,
    removeItemEventHandler,
} from "../../../actions/actions";

// Imports completed

const ListItems = ({ data }) => {
    const item = useSelector((state) =>
        state.cart.items.find((i) => i.id === data.id)
    );

    const dispatch = useDispatch();

    const [showModal, setShowModal] = useState(false);

    const incrementQuantity = (e) => {
        e.stopPropagation();
        dispatch(addItemEventHandler(data));
    };

    const decrementQuantity = (e) => {
        e.stopPropagation();
        dispatch(removeItemEventHandler(data.id));
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
                {!item || item.quantity < 1 ? (
                    <button className={"cart-add"} onClick={incrementQuantity}>
                        <span> Add to Cart! </span>
                        <img src={AddToCartIcon} alt="Cart Icon" />
                    </button>
                ) : (
                    <div className="cart-addon">
                        <button onClick={decrementQuantity}>
                            <span> - </span>
                        </button>
                        <span> {item.quantity} </span>
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
                            {!item || item.quantity < 1 ? (
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
                                    <span> {item.quantity} </span>
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
