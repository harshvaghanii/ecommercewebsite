import { Fragment, useState } from "react";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import OrderSuccess from "../UI/OrderSuccess";
import { useDispatch, useSelector } from "react-redux";
import {
    addItemEventHandler,
    removeItemEventHandler,
    emptyCart,
} from "../../actions/actions";

const Cart = () => {
    const [showModal, setShowModal] = useState(false);
    const [orderStatus, setOrderStatus] = useState(false);
    const handleModal = (e) => {
        e.stopPropagation();
        setShowModal((previousState) => !previousState);
    };

    // Redux logic

    const cartItems = useSelector((state) => state.items);
    const dispatch = useDispatch();
    const totalAmount = useSelector((state) => state.totalAmount);
    const dispatchEvent = (item, type) => {
        if (type === 1) {
            dispatch(addItemEventHandler(item));
        } else {
            dispatch(removeItemEventHandler(item.id));
        }
    };

    const handleOrderItems = (e) => {
        e.stopPropagation();
        setOrderStatus((previousState) => !previousState);
        setShowModal(false);
        dispatch(emptyCart());
    };
    return (
        <Fragment>
            <div className="cart-container" onClick={handleModal}>
                <button>
                    <span data-items={cartItems.length}>Cart</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-shopping-cart-plus"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="white"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <circle cx="6" cy="19" r="2" />
                        <circle cx="17" cy="19" r="2" />
                        <path d="M17 17h-11v-14h-2" />
                        <path d="M6 5l6.005 .429m7.138 6.573l-.143 .998h-13" />
                        <path d="M15 6h6m-3 -3v6" />
                    </svg>
                </button>

                {showModal && (
                    <Modal onClose={handleModal}>
                        <div className="checkout-modal">
                            <h2>Checkout Modal</h2>
                            <div className="checkout-modal_list">
                                {cartItems.length < 1 ? (
                                    <div className="empty-cart">
                                        The cart is empty!
                                    </div>
                                ) : (
                                    cartItems.map((i) => {
                                        return (
                                            <CartItem
                                                props={i}
                                                key={i.id}
                                                onIncrement={(item) => {
                                                    dispatchEvent(item, 1);
                                                }}
                                                onDecrement={(item) => {
                                                    dispatchEvent(item, -1);
                                                }}
                                            />
                                        );
                                    })
                                )}
                            </div>
                            {cartItems.length > 0 && (
                                <div className="checkout-modal_footer">
                                    <div className="totalAmount">
                                        <h4>Total Amount:</h4>
                                        <h4>{totalAmount} INR</h4>
                                    </div>
                                    <button onClick={handleOrderItems}>
                                        Order Now
                                    </button>
                                </div>
                            )}
                        </div>
                    </Modal>
                )}

                {orderStatus && <OrderSuccess onClose={handleOrderItems} />}
            </div>
        </Fragment>
    );
};

export default Cart;
