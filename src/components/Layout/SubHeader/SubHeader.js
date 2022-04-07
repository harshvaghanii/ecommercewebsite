import { NavLink } from "react-router-dom";
const SubHeader = () => {
    return (
        <div>
            <div className={"subheader-container"}>
                <ul>
                    <li>
                        <NavLink exact to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/category-1">Category 1</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/category-2">Category 2</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/category-3">Category 3</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/category-4">Category 4</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SubHeader;
