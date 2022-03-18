import axios from "axios";
import { useEffect, useState } from "react";
import ListItems from "./ListItems/ListItems";
const Products = () => {
    const url = "https://toykart-3ba5e-default-rtdb.firebaseio.com/items.json";
    const [items, setItem] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url);
                const transformedData = response.data.map((element, index) => {
                    return {
                        ...element,
                        id: index,
                    };
                });
                setItem(transformedData);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

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
