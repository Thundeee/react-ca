import { Link } from 'react-router-dom';
import { useState } from 'react';
import useSearch from '../../hooks/useSearch';
import { useContext } from 'react';
import { ItemContext } from '../../context/itemGetter';
import { useSelector } from 'react-redux';
import { Badge, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {
  HeaderWrapper,
  SearchWrapper,
  SearchInput,
  SearchList,
  SearchListItem,
} from './styles';

import { useTheme } from '@mui/material/styles';



const Header = () => {
  const theme = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchItems] = useSearch(searchQuery);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };  

  const { isLoading, isError } = useContext(ItemContext);
  
  const count = useSelector((state) => state.cartHandling.quantity);
  console.log(count);

  let cartLength = count ? count : 0;


  const handleSelection = () => {
    setSearchQuery('');
  };

  return (
    <HeaderWrapper theme={theme}>
      <Link to={'/'}> <h1>QuickShop</h1></Link>

      <SearchWrapper>
        <SearchInput
          type='text'
          placeholder='Search...'
          value={searchQuery}
          onChange={handleSearchInputChange}
        />

        {searchQuery && (
          <SearchList>
            {isLoading && <div>Loading...</div>}
            {isError && <div>Error...</div>}
            {searchItems &&
              searchItems.map((item) => (
                <SearchListItem key={item.id} onClick={handleSelection}>
                  <Link to={`/product/${item.id}`}>{item.title}</Link>
                </SearchListItem>
              ))}
          </SearchList>
        )}
      </SearchWrapper>

      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
          <li>
            <Badge badgeContent={cartLength} color='secondary'>
              <IconButton>
                <Link to='/checkout'>
                  <ShoppingCartIcon fontSize='large' />
                </Link>
              </IconButton>
            </Badge>
          </li>
        </ul>
      </nav>
    </HeaderWrapper>
  );
};
  
export default Header;