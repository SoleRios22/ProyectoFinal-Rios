
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"; 
import Footer from "./components/Footer/Footer";
import {ItemListWithSearch } from './components/ItemList/ItemList';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import Header from "./components/Header/Header";

  function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="app-container">
          <Header />
          
       
          <div className="layout-wrapper">
            <div className="sidebar">
              <NavBar />
            </div>
            <div className="main-content">
              <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/category/:category" element={<ItemListContainer />} />
                <Route path="/detail/:productId" element={<ItemDetailContainer />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="*" element={<h1>404 Not Found</h1>} />
              </Routes>
            </div>
          </div>

          <Footer />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App