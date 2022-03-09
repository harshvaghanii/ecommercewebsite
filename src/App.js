import Products from "./components/Products/Products";
import Header from "./components/Layout/Header/Header";
import SubHeader from "./components/Layout/SubHeader/SubHeader";

function App() {
    return (
        <div>
            <Header />
            <SubHeader></SubHeader>
            <Products />
        </div>
    );
}

export default App;
