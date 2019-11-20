import React from 'react';

export const MiniBasketComponent = (
    {
        contents,
        basketTotal
    }
) => {
    return (
        <article>
            <h1>Basket</h1>
            <ul>
                {
                    contents && (contents.size > 0) && (
                        Array.from(contents).map(
                            (item, i) => (
                                <li
                                    key={item[1].id}
                                >
                                    <h2>{ item[1].name }</h2>
                                    <small>{ item[1].id }</small>
                                    <p>Qty: { item[1].qty }</p>
                                    <p>{ item[1].price * item[1].qty }</p>
                                    <button

                                    >Remove</button>
                                </li>
                            )
                        )
                    )

                }
            </ul>
            <p>
                <strong>
                    TOTAL: { basketTotal }
                </strong>
            </p>
        </article>
    );
}