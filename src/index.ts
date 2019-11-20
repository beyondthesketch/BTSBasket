import { BTSBasket } from './js/basket';

declare global {
    interface Window {
        Foo: BTSBasket
    }
}

window.Foo = new BTSBasket('GBP');

window.Foo.addItem(
    {
        id: 123,
        price: 20.00,
        name: 'foo'
    },
    1
);
