import { Link } from 'react-router-dom';
import { useState } from 'react';
import useSearch from '../hooks/useSearch';
import { useContext } from 'react';
import { ItemContext } from '../context/itemGetter';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchItems] = useSearch(searchQuery);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);


  };  
  const { isLoading, isError } = useContext(ItemContext);


  return (
    <header>
      <div className='search'>
        <input type='text' placeholder='Search...' value={searchQuery} onChange={handleSearchInputChange} />
        
        <ul className='searchList'>
        {isLoading && <div>Loading...</div>}
        {isError && <div>Error...</div>}
          {searchItems && searchItems.map((item) => (
            <li key={item.id}>
              <Link to={`/product/${item.id}`}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>

        <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
          <li>
            <Link to='/checkout'>Checkout</Link>
          </li>
        </ul>
  
      </nav>
      </header>
    );
  };
  
  export default Header;