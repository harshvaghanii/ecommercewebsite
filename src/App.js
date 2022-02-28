import ListItems from "./components/ListItems";
function App() {
    const data = [
        {
            id: 0,
            originalPrice: 450,
            discountedPrice: 340,
            thumbnail: "placeholder.png",
        },
        {
            id: 1,
            originalPrice: 120,
            discountedPrice: 80,
            thumbnail: "placeholder.png",
        },
        {
            id: 2,
            originalPrice: 70,
            discountedPrice: 45,
            thumbnail: "placeholder.png",
        },
    ];

    return (
        <div>
          <ListItems data = {data[0]} />
          <ListItems data = {data[1]} />
          <ListItems data = {data[2]} />
        </div>
    );
}

export default App;
