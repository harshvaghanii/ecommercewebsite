import axios from "axios";
import { useEffect, useState } from "react";
import ListItems from "./ListItems/ListItems";
import Loader from "../UI/Loader";

const Products = ({ onAddItem, onRemoveItem, onCartItemStateChange }) => {
    const url = "https://toykart-3ba5e-default-rtdb.firebaseio.com/items.json";
    const [items, setItem] = useState([]);
    const [loader, setLoader] = useState(true);

    const onIncrement = (id) => {
        let data = [...items];
        const index = items.findIndex((i) => i.id == id);
        data[index].quantity += 1;
        setItem([...data]);
        onAddItem(data[index]);
    };

    const onDecrement = (id) => {
        let data = [...items];
        const index = items.findIndex((i) => i.id == id);
        if (data[index].quantity !== 0) {
            data[index].quantity -= 1;
            setItem([...data]);
            onRemoveItem(data[index]);
        }
    };
    // Effect Hooks

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url);
                const transformedData = response.data.map((element, index) => {
                    return {
                        ...element,
                        id: index,
                        quantity: 0,
                    };
                });
                setItem(transformedData);
            } catch (error) {
                console.log(error);
            } finally {
                setLoader(false);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        if (onCartItemStateChange.type == 1) {
            onIncrement(onCartItemStateChange.id);
        } else if (onCartItemStateChange.type == -1) {
            onDecrement(onCartItemStateChange.id);
        }
    }, [onCartItemStateChange]);

    return (
        <div className={"product-list"}>
            {loader && <Loader />}
            <div className={"product-list--wrapper"}>
                {items.map((element) => {
                    return (
                        <ListItems
                            key={`${element.id}`}
                            data={element}
                            onAdd={onIncrement}
                            onRemove={onDecrement}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Products;
