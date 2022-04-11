import { Fragment } from "react";
import Modal from "./Modal";
import OrderSuccessImage from "../../assets/icons/order_success.svg";
const OrderSuccess = ({ onClose, orderid }) => {
    return (
        <Fragment>
            <Modal onClose={onClose}>
                <div className="order-container">
                    <div className="order-container--success">
                        <img
                            src={OrderSuccessImage}
                            alt="Order Succesful Image"
                            className="img-fluid"
                        />
                        <div className="message">
                            <h1>Order Successfully placed!</h1>
                            <span>
                                {/* Order ID: {Math.random().toString(32).slice(2)} */}
                                Order ID: #{orderid}
                            </span>
                        </div>
                    </div>
                </div>
            </Modal>
        </Fragment>
    );
};

export default OrderSuccess;
