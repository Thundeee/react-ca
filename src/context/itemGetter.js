import React, { createContext } from "react";
import useApi from "../hooks/useApi";
import { BASE_URL } from "../utils/constant";

const ItemContext = createContext();

export const ItemProvider = ({ children }) => {
  const { data: items, isLoading, isError } = useApi(BASE_URL);

  for (let i = 0; i < items.length; i++) {
    items[i].discount = false;
    items[i].originalPrice = items[i].price;
    if (items[i].originalPrice > items[i].discountedPrice) {
      items[i].discount = Math.round(
        ((items[i].price - items[i].discountedPrice) / items[i].price) * 100
      );
      items[i].price = items[i].discountedPrice;
      items[i].discount = items[i].discount + "%";
    }
  }
  console.log(items);

  return (
    <ItemContext.Provider value={{ items, isLoading, isError }}>
      {children}
    </ItemContext.Provider>
  );
};

export { ItemContext };
