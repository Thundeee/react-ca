import { Link } from 'react-router-dom';
import { useState } from 'react';
import useSearch from '../hooks/useSearch';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchItems] = useSearch(searchQuery);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };  

  return (
    <header>
      <div className='search'>
        <input type='text' placeholder='Search...' value={searchQuery} onChange={handleSearchInputChange} />
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