import { useContext } from 'react';
import { ItemContext } from '../context/itemGetter';

const useSearch = (query) => {
  const { items } = useContext(ItemContext);
  console.log("query: ", query);

  if (query === '') {
    return [[]];
    
  }
  
  const searchItems = () => {
    return items.filter((item) => {
      return item.title.toLowerCase().includes(query.toLowerCase());
    });
  };

  console.log("searchItems: ", searchItems());
  return [searchItems()];
};

export default useSearch;