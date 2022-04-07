import Products from "./components/Products/Products";
import Header from "./components/Layout/Header/Header";
import SubHeader from "./components/Layout/SubHeader/SubHeader";
import NotFound from "./components/UI/404";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <SubHeader />
                <Switch>
                    <Route exact path={"/404"}>
                        <NotFound />
                    </Route>
                    <Route exact path="/:category?">
                        <Products />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default App;
