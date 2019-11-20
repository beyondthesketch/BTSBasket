import React from 'react';

export const ProductComponent = (
    {
        name,
        description,
        id,
        price,
        handleAddToBasket
    }
) => {
    return (
        <article>
            <h1>{ name }</h1>
            <div>
                <strong>{ price }</strong>
            </div>
            <p>{ description }</p>
            <button
                onClick={ () => handleAddToBasket( {
                    id,
                    name,
                    price,
                    url: '#'
                } ) }
            >Add to basket</button>
        </article>
    );
}