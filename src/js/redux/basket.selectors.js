import { createSelector } from 'reselect';

export const BTSBasketContentsSelector = (state) => state;

export const BTSBasketItemCountSelector = createSelector(
    BTSBasketContentsSelector,
    items => {
        let count = 0;
        items.forEach(
            (item) => count += item.qty
        );
        return count;
    }
);
