import Products from "./components/Products/Products";
import Header from "./components/Layout/Header/Header";
import SubHeader from "./components/Layout/SubHeader/SubHeader";
import { useState } from "react";

const App = () => {
    const [cartItems, setCartItems] = useState([]);
    const [cartAction, setCartAction] = useState({
        id: "",
        type: "",
    });
    const handleAddItems = (item) => {
        const data = [...cartItems];
        const index = data.findIndex((i) => i.id === item.id);
        if (index > -1) {
            data[index] = item;
        } else {
            data.push(item);
        }
        setCartItems([...data]);
    };

    const handleRemoveItems = (item) => {
        const data = [...cartItems];
        const index = data.findIndex((i) => i.id == item.id);
        if (item.quantity > 0) {
            data[index] = item;
        } else {
            data.splice(index, 1);
        }
        setCartItems([...data]);
    };
    const handleCartAction = (id, type) => {
        setCartAction({
            id,
            type,
        });
    };
    return (
        <div>
            <Header
                count={cartItems.length}
                items={cartItems}
                cartAction={handleCartAction}
            />
            <SubHeader />
            <Products
                onAddItem={handleAddItems}
                onRemoveItem={handleRemoveItems}
                onCartItemStateChange={cartAction}
            />
        </div>
    );
};

export default App;
