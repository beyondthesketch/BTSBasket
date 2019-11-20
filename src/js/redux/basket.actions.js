export const BTSBASKET_ADD_ITEM = 'BTSBASKET_ADD_ITEM';
export const BTSBasketAddItemAction = (item, qty = 1) => {
    return {
        type: BTSBASKET_ADD_ITEM,
        item,
        qty
    };
};

export const BTSBASKET_REMOVE_ITEM = 'BTSBASKET_REMOVE_ITEM';
export const BTSBasketRemoveItemAction = (itemId, qty = 1) => {
    return {
        type: BTSBASKET_REMOVE_ITEM,
        itemId,
        qty
    };
};
