import ListItems from "./ListItems/ListItems";
const Products = () => {
    const data = [
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
    ];
    return (
        <div className={"product-list"}>
            <div className={"product-list--wrapper"}>
                <ListItems data={data[0]} />
                <ListItems data={data[1]} />
            </div>
        </div>
    );
};

export default Products;
