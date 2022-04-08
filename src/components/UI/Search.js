import { Fragment, useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
const SearchBox = () => {
    const history = useHistory();

    const [search, setSearch] = useState("");
    const { search: queryString } = useLocation();
    const handleSubmission = (e) => {
        e.preventDefault();
        history.push({
            search: `search=${search}`,
        });
    };

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    useEffect(() => {
        const queryParams = new URLSearchParams(history.location.search).get(
            "search"
        );
        setSearch(queryParams || "");
    }, [queryString]);

    return (
        <Fragment>
            <form onSubmit={handleSubmission}>
                <input
                    name="search"
                    type="text"
                    id="search"
                    value={search}
                    onChange={handleSearch}
                    placeholder="Enter product name, category"
                />
                <button type="submit">
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
                </button>
            </form>
        </Fragment>
    );
};

export default SearchBox;
