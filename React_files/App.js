import logo from './logo.svg';
import './App.css';
// import {Button} from 'react-bootstrap'
import Header from './Header'
import { BrowserRouter, Route,Routes} from 'react-router-dom';
import Register from './register';
import Login from './login';
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';
import Protected from './protected';
import Product_list from './product_list';
import SearchProduct from './searchProduct';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="product_list" element={<Protected Cmp={Product_list} />} />
          <Route path="add" element={<Protected Cmp={AddProduct} />} />
          <Route path="Update/:id" element={<Protected Cmp={UpdateProduct} />} />
          <Route path="search" element={<Protected Cmp={SearchProduct} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
