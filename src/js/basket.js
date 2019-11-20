export class BTSBasket {
    constructor(
        currency = 'GBP',
        items
    ) {
        let _items =  items instanceof Map ? items : new Map();

        Object.defineProperty(
            this,
            'currency',
            {
                get: () => currency
            }
        );

        Object.defineProperty(
            this,
            'contents',
            {
                get: () => _items,
            }
        );

        Object.defineProperty(
            this,
            'itemCount',
            {
                get: () => {
                    let count = 0;
                    _items.forEach(
                        (item) => count += item.qty
                    );
                    return count;
                }
            }
        );

        Object.defineProperty(
            this,
            'basketTotalValue',
            {
                get: () => {
                    let totalPrice = 0;
                    _items.forEach(
                        (item) => totalPrice += (item.price * item.qty)
                    );
                    return totalPrice;
                }
            }
        );
    }

    addItem(
        item,
        qty = 1,
        completeFn
    ) {
        if (!item.id || !item.price || !item.name) {
            console && console.warn('BTSBasket: Invalid item provided');
            return null;
        }
        if (this.contents.has(item.id)) {
            console.log('updating item in basket');
            const newQty = ((this.contents.get(item.id) && this.contents.get(item.id).qty) || 1) + qty;

            this.contents.set(
                item.id,
                {
                    ...item,
                    qty: newQty
                }
            );
        }
        else {
            console.log('adding item to basket');
            this.contents.set(
                item.id,
                {
                    ...item,
                    qty,
                }
            );
        }

        if (completeFn && typeof completeFn === 'function') {
            completeFn(item, qty, this.contents);
        }
    }

    removeItem(
        itemId,
        qty = 1,
        completeFn
    ) {
        if (this.contents.has(itemId)) {
            console.log(`removing ${qty} items of ${itemId}`);
            const item = this.contents.get(itemId);
            const newQty = this.contents.get(itemId).qty - qty;

            newQty < 1
                ?
                this.contents.delete(itemId)
                :
                this.contents.set(
                    itemId,
                    {
                        ...item,
                        qty: newQty
                    }
                );

            if (completeFn && typeof completeFn === 'function') {
                completeFn(itemId, qty, this.contents);
            }
        }
    }
}