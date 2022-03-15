import { useState } from "react";
import ListItems from "./ListItems/ListItems";
const Products = () => {
    const [items, setItem] = useState([
        {
            id: 0,
            title: "Title of Item 1",
            originalPrice: 450,
            discountedPrice: 340,
            thumbnail: "placeholder.png",
        },
        {
            id: 1,
            title: "Title of Item 2",
            originalPrice: 120,
            discountedPrice: 80,
            thumbnail: "placeholder.png",
        },
        {
            id: 2,
            title: "Title of Item 3",
            originalPrice: 499,
            discountedPrice: 249,
            thumbnail: "placeholder.png",
        },
    ]);

    return (
        <div className={"product-list"}>
            <div className={"product-list--wrapper"}>
                {items.map((props) => {
                    return <ListItems key={`${props.id}`} data={props} />;
                })}
            </div>
        </div>
    );
};

export default Products;
