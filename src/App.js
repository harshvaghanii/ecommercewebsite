import Products from "./components/Products/Products";
import Header from "./components/Layout/Header/Header";
import SubHeader from "./components/Layout/SubHeader/SubHeader";
import { useState } from "react";

const App = () => {
    const [cartItems, setCartItems] = useState(0);

    const handleAddItems = () => {
        setCartItems(cartItems + 1);
    };

    const handleRemoveItems = () => {
        setCartItems(cartItems - 1);
    };

    return (
        <div>
            <Header count={cartItems} />
            <SubHeader />
            <Products
                onAddItem={handleAddItems}
                onRemoveItem={handleRemoveItems}
            />
        </div>
    );
};

export default App;
