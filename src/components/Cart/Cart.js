import { Fragment, useState } from "react";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import OrderSuccess from "../UI/OrderSuccess";
const Cart = ({ count, items, cartAction }) => {
    const [showModal, setShowModal] = useState(false);
    const [orderStatus, setOrderStatus] = useState(false);
    const handleModal = (e) => {
        e.stopPropagation();
        setShowModal((previousState) => !previousState);
    };

    const handleOrderItems = (e) => {
        e.stopPropagation();
        setOrderStatus((previousState) => !previousState);
        setShowModal(false);
    };

    return (
        <Fragment>
            <div className="cart-container" onClick={handleModal}>
                <button>
                    <span data-items={count}>Cart</span>
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
                                {count < 1 ? (
                                    <div className="empty-cart">
                                        The cart is empty!
                                    </div>
                                ) : (
                                    items.map((i) => {
                                        return (
                                            <CartItem
                                                props={i}
                                                key={i.id}
                                                onIncrement={(id) => {
                                                    cartAction(id, 1);
                                                }}
                                                onDecrement={(id) => {
                                                    cartAction(id, -1);
                                                }}
                                            />
                                        );
                                    })
                                )}
                            </div>
                            {count > 0 && (
                                <div className="checkout-modal_footer">
                                    <div className="totalAmount">
                                        <h4>Total Amount:</h4>
                                        <h4>
                                            {items.reduce(
                                                (previous, current) => {
                                                    return (
                                                        previous +
                                                        current.discountedPrice *
                                                            current.quantity
                                                    );
                                                },
                                                0
                                            )}{" "}
                                            INR
                                        </h4>
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
