import {
    BTSBASKET_ADD_ITEM,
    BTSBASKET_REMOVE_ITEM
} from './basket.actions';

const initialState = new Map();

export const BTSBasketReducer = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case BTSBASKET_ADD_ITEM:
            if (state.has(item.id)) {
                console.log('updating item in basket');
                const newQty = state.get(item.id).qty + qty;
    
                const newState = new Map(state);

                newState.set(
                    item.id,
                    {
                        ...item,
                        qty: newQty
                    }
                );
            }
            else {
                console.log('adding item to basket');
                const newState = new Map(state);

                newState.set(
                    item.id,
                    {
                        ...item,
                        qty,
                    }
                );
            }
            return newState;
        case BTSBASKET_REMOVE_ITEM:
            if (state.has(itemId)) {
                console.log(`removing ${qty} items of ${itemId}`);
                const newState = new Map(state);
                const item = state.get(itemId);
                const newQty = state.get(itemId).qty - qty;
    
                newQty < 1
                    ?
                    newState.delete(itemId)
                    :
                    newState.set(
                        itemId,
                        {
                            ...item,
                            qty: newQty
                        }
                    );
            }
            return newState;
        default:
            return state;
    }
}