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

import axios from "axios";

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

export const orderItem = (callback) => {
    return async (dispatch, getState) => {
        try {
            const { auth, cart } = getState();
            if (!auth.idToken)
                return callback({
                    error: true,
                    message: "Please login and try again!",
                });
            const uid = auth.localID;
            const response = await axios.post(
                `https://toykart-3ba5e-default-rtdb.firebaseio.com/orders/${uid}.json?auth=${auth.idToken}`,
                {
                    ...cart,
                }
            );
            dispatch(emptyCart());
            return callback({
                error: false,
                data: response.data,
            });
        } catch (e) {
            return callback({
                error: true,
                message: e || "Some error occured!",
            });
        }
    };
};
