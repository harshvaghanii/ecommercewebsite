import Products from "./components/Products/Products";
import Header from "./components/Layout/Header/Header";
import SubHeader from "./components/Layout/SubHeader/SubHeader";
import { useState } from "react";

const App = () => {
    return (
        <div>
            <Header />
            <SubHeader></SubHeader>
            <Products />
        </div>
    );
};

export default App;
