import axios from "axios";
import { useEffect, useState } from "react";
import ListItems from "./ListItems/ListItems";
import Loader from "../UI/Loader";
import { useParams, useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Products = () => {
    const { category } = useParams();
    let slug = category ? `items-${category}.json` : `items.json`;
    const { search } = useLocation();
    const queryParams = new URLSearchParams(search).get("search");
    if (queryParams) {
        slug += `?search=${queryParams}`;
    }
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
    }, [category, queryParams]);

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
