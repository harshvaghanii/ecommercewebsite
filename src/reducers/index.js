import { combineReducers } from "redux";
import authReducer from "./auth";

const mainReducer = (
    state = {
        items: [],
        totalAmount: 0,
    },
    action
) => {
    const { type, payload } = action;
    let items, amount, index;

    switch (type) {
        case "ADD_ITEM":
            items = [...state.items];
            index = items.findIndex((i) => i.id == payload.item.id);
            if (index > -1) {
                items[index] = {
                    ...items[index],
                    quantity: items[index].quantity + 1,
                };
            } else {
                items.push({
                    ...payload.item,
                    quantity: 1,
                });
            }
            amount = state.totalAmount + payload.item.discountedPrice;
            return {
                ...state,
                items: items,
                totalAmount: amount,
            };
        case "REMOVE_ITEM":
            items = [...state.items];
            index = items.findIndex((i) => i.id == payload.id);
            amount = state.totalAmount - items[index].discountedPrice;
            if (items[index].quantity == 1) {
                items.splice(index, 1);
            } else {
                items[index] = {
                    ...items[index],
                    quantity: items[index].quantity - 1,
                };
            }
            return {
                ...state,
                items: items,
                totalAmount: amount,
            };
        case "CLEAR_CART":
            return {
                items: [],
                totalAmount: 0,
            };

        default:
            return state;
    }
};

export default combineReducers({
    cart: mainReducer,
    auth: authReducer,
});
