import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
import { createContext, useState } from 'react';




export const CartContext = createContext(false);
export const CartLengthContext = createContext(0)

function App() {
  const [text, setTest] = useState(false);
  const [length,SetLength]=useState(0);

  return (
    <CartContext.Provider value={[text, setTest]}>
      <CartLengthContext.Provider value={[length,SetLength]}>
        <div className="App">
          <Header></Header>
          <Products></Products>

        </div>
      </CartLengthContext.Provider>

    </CartContext.Provider>

  );
}

export default App;
