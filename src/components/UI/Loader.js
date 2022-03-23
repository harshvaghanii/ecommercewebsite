import ReactDom from "react-dom";
export const Backdrop = (props) => {
    const handleClick = (e) => {
        if (props.onClose) {
            props.onClose(e);
        }
    };
    return <div onClick={handleClick} className="loader-overlay"></div>;
};

const Loader = () => {
    return ReactDom.createPortal(
        <>
            <Backdrop />
            <div className="loading-dots">
                <div>Please wait...</div>
                <div className="loading-dots--dot"></div>
                <div className="loading-dots--dot"></div>
                <div className="loading-dots--dot"></div>
            </div>
        </>,
        document.getElementById("loader-node")
    );
};

export default Loader;
