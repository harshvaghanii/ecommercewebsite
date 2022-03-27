export const addItemEventHandler = (item) => {
    return (dispatch) => {
        dispatch({
            type: "ADD_ITEM",
            payload: {
                item: item,
            },
        });
    };
};

export const removeItemEventHandler = (id) => {
    return (dispatch) => {
        dispatch({
            type: "REMOVE_ITEM",
            payload: {
                id: id,
            },
        });
    };
};

export const emptyCart = () => {
    return (dispatch) => {
        dispatch({
            type: "CLEAR_CART",
        });
    };
};
