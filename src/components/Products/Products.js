import axios from "axios";
import { useEffect, useState } from "react";
import ListItems from "./ListItems/ListItems";
import Loader from "../UI/Loader";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Products = () => {
    const { category } = useParams();
    const slug = category ? `items-${category}.json` : `items.json`;
    const url = `https://toykart-3ba5e-default-rtdb.firebaseio.com/${slug}`;
    const [items, setItem] = useState([]);
    const [loader, setLoader] = useState(true);
    const history = useHistory();
    const handleNotFound = () => {
        history.replace("/404");
    };

    // Effect Hooks

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url);
                const data = response.data;
                if (!data) {
                    handleNotFound();
                    return;
                }
                const transformedData = data.map((element, index) => {
                    return {
                        ...element,
                        id: index,
                    };
                });
                setItem(transformedData);
            } catch (error) {
                alert(error);
            } finally {
                setLoader(false);
            }
        };
        fetchData();

        return () => {
            setItem([]);
            setLoader(true);
        };
    }, [category]);

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
