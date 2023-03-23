import React, { createContext } from 'react';
import useApi from '../hooks/useApi';

const ItemContext = createContext();

export const ItemProvider = ({ children }) => {
    const { data: items, isLoading, isError } = useApi(
        'https://api.noroff.dev/api/v1/online-shop'
    );

    for (let i = 0; i < items.length; i++) {
        items[i].discount = false;
        items[i].originalPrice = items[i].price;
        if (items[i].price > items[i].discountedPrice) {
            items[i].discount = Math.round(
                (items[i].price - items[i].discountedPrice) / items[i].price * 100
            );
            items[i].price = items[i].discountedPrice;            
            items[i].discount = items[i].discount + '%';

            
        }   
        console.log(items[i].price);
        items[i].price = new Intl.NumberFormat('nb-Nb', { style: 'currency', currency: 'nok' }).format(items[i].price)
        console.log(items[i].price);
    }

    return (
        <ItemContext.Provider value={{ items, isLoading, isError }}>
            {children}
        </ItemContext.Provider>
    );
};



export {ItemContext}