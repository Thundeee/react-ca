import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";
import CheckoutSuccess from "./pages/CheckoutSuccess";
import { theme } from "./theme/theme";
import { ThemeProvider } from "@mui/material";
import "./index.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/checkoutSuccess" element={<CheckoutSuccess />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="*" element={<div>404 Error page not found</div>} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
