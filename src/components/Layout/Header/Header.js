import Cart from "../../Cart/Cart";
import { NavLink } from "react-router-dom";
import SearchBox from "../../UI/Search";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../../actions/auth";
const Header = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const handleAuth = (e) => {
        e.preventDefault();
        history.push("/login");
    };
    const userStatus = useSelector((state) => state.auth);

    const logoutHandler = (e) => {
        dispatch(logoutUser());
    };

    return (
        <div>
            <header>
                <div className={"nav-brand"}>
                    <NavLink to="/">
                        <span>ToyKart</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-shopping-cart"
                            width="30"
                            height="30"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="white"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <circle cx="6" cy="19" r="2" />
                            <circle cx="17" cy="19" r="2" />
                            <path d="M17 17h-11v-14h-2" />
                            <path d="M6 5l14 1l-1 7h-13" />
                        </svg>
                    </NavLink>
                </div>
                <div className={"searchBox-container"}>
                    <SearchBox />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-search"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="white"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <circle cx="10" cy="10" r="7" />
                        <line x1="21" y1="21" x2="15" y2="15" />
                    </svg>
                </div>
                {userStatus && userStatus.idToken ? (
                    <div className="user-actions">
                        <button title="User Profile" className="material-icons">
                            account_circle
                        </button>
                        <button
                            onClick={logoutHandler}
                            title="Logout"
                            className="material-icons"
                        >
                            logout
                        </button>
                    </div>
                ) : (
                    <button className="login-btn" onClick={handleAuth}>
                        Login
                    </button>
                )}

                <Cart />
            </header>
        </div>
    );
};

export default Header;
