import React from 'react';

import { MiniBasketComponent } from './min-basket.component'

export const BasketComponent = (
    {
        contents,
        totalCount,
        totalPrice,
        currency
    }
) => {
    return (
        <aside>
            <h1>Basket</h1>
            <p>{ totalCount } item{ totalCount > 1 ? '' : 's' }</p>
            <p>
                <strong>{ currency } { totalPrice }</strong>
            </p>
            <MiniBasketComponent
                contents={ contents }
                basketTotal={ totalPrice }
            />
        </aside>
    );
}