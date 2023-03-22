import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Product from './pages/Product';
import Contact from './pages/Contact';
import Checkout from './pages/Checkout';
import CheckoutSuccess from './pages/CheckoutSuccess';
import { useContext } from 'react';
import { ItemContext } from './context/itemGetter';


 function App() {

  const { items, isLoading, isError } = useContext(ItemContext);
  console.log(items);


  return (
    <>
    <Layout>
          <Routes>
    <Route index element={<Home/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/checkout' element={<Checkout/> } />
      <Route path='/checkoutSuccess' element={<CheckoutSuccess/>} />    
      <Route path='/product/:id' element={<Product/>} />
      <Route path="*" element={<div>Route not found</div>} />
    </Routes>

    </Layout>
  </>
  );
}

export default App;
