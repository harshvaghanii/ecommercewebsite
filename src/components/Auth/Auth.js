import { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import Loader from "../UI/Loader";
import axios from "axios";
const Auth = () => {
    const { type } = useParams();
    const [details, setDetails] = useState({
        email: "",
        password: "",
    });
    const [loader, setLoader] = useState(false);

    const handleInput = (e) => {
        setDetails({
            ...details,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmission = (e) => {
        e.preventDefault();
        if (type == "signup") {
            handleSignUp();
        }
    };

    const handleSignUp = async () => {
        try {
            setLoader(true);
            const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA8enYP_u5ncneEztR4ABd_Z1BbqAIMBq4`;
            const response = await axios.post(url, {
                email: details.email,
                password: details.password,
                returnSecureToken: true,
            });
            console.log(response);
        } catch (error) {
            console.log(error.response.data.error.message);
        } finally {
            setLoader(false);
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
