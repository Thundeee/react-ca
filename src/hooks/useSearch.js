import {useState, useContext } from 'react';
import { ItemContext } from '../context/itemGetter';

const useSearch = (query) => {
  const { items, isLoading, isError } = useContext(ItemContext);
  console.log("query: ", query);

  const searchItems = () => {
    return items.filter((item) => {
      return item.title.toLowerCase().includes(query.toLowerCase());
    });
  };

  console.log("searchItems: ", searchItems());
  return [searchItems()];
};

export default useSearch;