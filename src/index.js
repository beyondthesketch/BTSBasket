import React from 'react';
import ReactDOM from 'react-dom';
import { BTSBasket } from './js/basket';

import { ProductComponent } from './demo/components/product.component';
import { BasketComponent } from './demo/components//basket.component';

self.Basket = new BTSBasket('GBP');

const renderBasket = () => {
    ReactDOM.render(
        <BasketComponent
            contents={ self.Basket.contents }
            totalCount={ self.Basket.itemCount}
            totalPrice={ self.Basket.basketTotalValue }
            currency={ self.Basket.currency }
        />,
        document.getElementById('basket')
    );
}

renderBasket();
ReactDOM.render(
    <div>
        <ProductComponent
            id={123}
            name="Widget"
            price={4.99}
            description="Quality Widgets"
            handleAddToBasket={
                (item) => self.Basket.addItem(
                    item,
                    1,
                    (item) => {
                        console.log(`${item.name} (${item.id} added to basket)`);
                        renderBasket();
                    }
                )
            }
        />
        <ProductComponent
            id={456}
            name="Doodad"
            price="8.99"
            description="High performance Doodads"
            handleAddToBasket={
                (item) => self.Basket.addItem(
                    item,
                    1,
                    () => {
                        console.log(`${item.name} (${item.id} added to basket)`);
                        renderBasket();
                    }
                )
            }
        />
    </div>,
    document.getElementById('root')
);
