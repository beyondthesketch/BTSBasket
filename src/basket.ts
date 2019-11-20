import { BasketItemInterface } from './interfaces/basket-item.interface';

export class BTSBasket {
    private items: Map<number|string, BasketItemInterface> = new Map();

    constructor(currency: string) {

        Object.defineProperty(
            this,
            'items',
            {
                value: new Map()
            }
        );

        Object.defineProperty(
            this,
            'currency',
            {
                get: () => currency
            }
        );
    }

    public get contents(): Map<string|number, BasketItemInterface> {
        return this.items;
    }

    public get itemCount(): number {
        let count = 0;
        this.items.forEach(
            (item) => count += item.qty
        );
        return count;
    }

    public get basketTotalValue(): number {
        let totalPrice = 0;
        this.items.forEach(
            (item) => totalPrice += (item.price * item.qty)
        );
        return totalPrice;
    }

    public addItem(item: BasketItemInterface, qty: number = 1) {
        if (this.items.has(item.id)) {
            console.log('updating item in basket');
            const newQty = this.items.get(item.id).qty + qty;

            this.items.set(
                item.id,
                {
                    ...item,
                    qty: newQty
                }
            );
        }
        else {
            console.log('adding item to basket');
            this.items.set(
                item.id,
                {
                    ...item,
                    qty,
                }
            );
        }
    }

    removeItem(itemId: string|number, qty: number = 1) {
        if (this.items.has(itemId)) {
            console.log(`removing ${qty} items of ${itemId}`);
            const item = this.items.get(itemId);
            const newQty = this.items.get(itemId).qty - qty;

            newQty < 1
                ?
                this.items.delete(itemId)
                :
                this.items.set(
                    itemId,
                    {
                        ...item,
                        qty: newQty
                    }
                );
        }
    }
}

