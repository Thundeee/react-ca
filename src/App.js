import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Product from './pages/Product';
import Contact from './pages/Contact';
import Checkout from './pages/Checkout';
import CheckoutSuccess from './pages/CheckoutSuccess';


 function App() {




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
