import { Routes, Route} from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import NotFound404 from '../pages/NotFound404';
import Products from '../pages/Products';
import Detail from '../pages/Detail';
import Cart from '../pages/Cart';


const Router = () => {
    return ( 
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/cat/:type" element={<Products/>}/>
            <Route path="/detail/:id" element={<Detail/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path='*' element={<NotFound404/>}/>
        </Routes>
     );
};

export default Router;

