import React, { createContext } from 'react';
import useApi from '../hooks/useApi';

const ItemContext = createContext();

export const ItemProvider = ({ children }) => {
    const { data: items, isLoading, isError } = useApi(
        'https://api.noroff.dev/api/v1/online-shop'
    );


    return (
        <ItemContext.Provider value={{ items, isLoading, isError }}>
            {children}
        </ItemContext.Provider>
    );
};



export {ItemContext}