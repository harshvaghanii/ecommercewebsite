import axios from "axios";
import { useEffect, useState } from "react";
import ListItems from "./ListItems/ListItems";
import Loader from "../UI/Loader";

const Products = ({ onAddItem, onRemoveItem }) => {
    const url = "https://toykart-3ba5e-default-rtdb.firebaseio.com/items.json";
    const [items, setItem] = useState([]);
    const [loader, setLoader] = useState(true);
    // The below array is used to store the id of the elements that are already present in thea cart
    const [itemArray, setItemArray] = useState([]);

    const onAdd = (id) => {
        // if (itemArray.indexOf(id) > -1) return;
        // setItemArray([...itemArray, id]);
        // onAddItem();
        let data = [...items];
        const index = items.findIndex((i) => i.id == id);
        data[index].quantity += 1;
        setItem([...data]);
        onAddItem(data[index]);
        // if (items[id].quantity == 1) onAddItem();
    };

    const onRemove = (id) => {
        // const index = itemArray.indexOf(id);
        // let items = [...itemArray];
        // items.splice(index, 1);
        // setItemArray([...items]);
        // onRemoveItem();
        let data = [...items];
        const index = items.findIndex((i) => i.id == id);
        if (data[index].quantity !== 0) {
            data[index].quantity -= 1;
            setItem([...data]);
            onRemoveItem(data[index]);
        }
    };
    // Effect Hook

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

    return (
        <div className={"product-list"}>
            {loader && <Loader />}
            <div className={"product-list--wrapper"}>
                {items.map((element) => {
                    return (
                        <ListItems
                            key={`${element.id}`}
                            data={element}
                            onAdd={onAdd}
                            onRemove={onRemove}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Products;
