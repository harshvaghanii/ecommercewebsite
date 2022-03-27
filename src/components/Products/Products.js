import axios from "axios";
import { useEffect, useState } from "react";
import ListItems from "./ListItems/ListItems";
import Loader from "../UI/Loader";

const Products = () => {
    const url = "https://toykart-3ba5e-default-rtdb.firebaseio.com/items.json";
    const [items, setItem] = useState([]);
    const [loader, setLoader] = useState(true);

    // Effect Hooks

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
                    return <ListItems key={`${element.id}`} data={element} />;
                })}
            </div>
        </div>
    );
};

export default Products;
