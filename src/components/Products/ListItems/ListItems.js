import AddToCartIcon from "../../../assets/icons/add_cart.svg";
const ListItems = ({ data }) => {
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
                        <strike> ₹{data.originalPrice} </strike>
                    </small>
                </div>
                <div className={"title"}>
                    <h3> {data.title} </h3>
                </div>
            </div>
            <button className={"cart-add"}>
                <span> Add to Cart! </span>
                <img src={AddToCartIcon} alt="Cart Icon" />
            </button>
        </div>
    );
};

export default ListItems;
