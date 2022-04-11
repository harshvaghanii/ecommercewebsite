import { Fragment, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import Loader from "../UI/Loader";
import { useDispatch } from "react-redux";
import { handleLogIn, handleSignUp } from "../../actions/auth";
import { useHistory } from "react-router-dom";
const Auth = () => {
    const { type } = useParams();
    const history = useHistory();
    const [details, setDetails] = useState({
        email: "",
        password: "",
    });
    const [loader, setLoader] = useState(false);
    const dispatch = useDispatch();
    const handleInput = (e) => {
        setDetails({
            ...details,
            [e.target.name]: e.target.value,
        });
    };
    useEffect(() => {
        return () => {
            setLoader(false);
            setDetails({
                email: "",
                password: "",
            });
        };
    }, []);
    const handleSubmission = (e) => {
        e.preventDefault();
        if (type == "signup") {
            setLoader(true);
            dispatch(
                handleSignUp(details, (data) => {
                    if (data.error) {
                        console.log(`${data.error}`);
                    } else {
                        history.replace("/");
                    }
                    setLoader(false);
                })
            );
        } else {
            setLoader(true);
            dispatch(
                handleLogIn(details, (data) => {
                    if (data.error) {
                        console.log(data.response);
                    } else {
                        history.push("/");
                    }
                    setLoader(false);
                })
            );
        }
    };

    return (
        <Fragment>
            <div className="auth-container">
                <div className="auth-container--box">
                    <div className="tab-selector">
                        <NavLink exact to={"/login"}>
                            Login
                        </NavLink>
                        <NavLink exact to={"/signup"}>
                            SignUp
                        </NavLink>
                    </div>
                    <form onSubmit={handleSubmission}>
                        <div className="input-wrap">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter Email"
                                value={details.email}
                                onChange={handleInput}
                                required
                            />
                        </div>
                        <div className="input-wrap">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Enter Password"
                                value={details.password}
                                onChange={handleInput}
                                required
                            />
                        </div>
                        <div className="button-wrap">
                            <button className="login-btn">
                                {type == "login" ? "Login" : "Signup"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            {loader && <Loader />}
        </Fragment>
    );
};

export default Auth;
