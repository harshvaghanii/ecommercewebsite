// export const addItemEventHandler = (item) => {
//     return (dispatch) => {
//         dispatch({
//             type: "ADD_ITEM",
//             payload: {
//                 item: item,
//             },
//         });
//     };
// };

export const addItemEventHandler = (item) => {
    return {
        type: "ADD_ITEM",
        payload: {
            item: item,
        },
    };
};

export const removeItemEventHandler = (id) => {
    return {
        type: "REMOVE_ITEM",
        payload: {
            id: id,
        },
    };
};

export const emptyCart = () => {
    return {
        type: "CLEAR_CART",
    };
};
