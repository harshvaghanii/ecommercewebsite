import Products from "./components/Products/Products";
import Header from "./components/Layout/Header/Header";
import SubHeader from "./components/Layout/SubHeader/SubHeader";
import NotFound from "./components/UI/404";
import Auth from "./components/Auth/Auth";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isLoggedIn } from "./actions/auth";

const App = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth);
    useEffect(() => {
        dispatch(isLoggedIn((response) => {}));
    }, []);

    return (
        <BrowserRouter>
            <div>
                <Header />
                <SubHeader />
                <Switch>
                    {!user.idToken && (
                        <Route exact path={"/:type(login|signup)"}>
                            <Auth />
                        </Route>
                    )}
                    <Redirect to="/" from="/login" />
                    <Redirect to="/" from="/signup" />
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
