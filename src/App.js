import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
import { createContext, useState } from 'react';


export const CartContext = createContext(false);

function App() {
  const [text, setTest] = useState(false);

  return (
    <CartContext.Provider value={[text, setTest]}>
      <div className="App">
        <Header></Header>
        <Products></Products>
      </div>
    </CartContext.Provider>

  );
}

export default App;
