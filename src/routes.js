import PageDefault from "components/PageDefault";
import Advertise from "pages/Advertise";
import Cart from "pages/Cart";
import Categorie from "pages/Categorie";
import Home from "pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<PageDefault />} >
                    <Route index element={<Home />} />
                    <Route path='/categoria/:nameCategorie' element={<Categorie />} />
                    <Route path='/carrinho' element={<Cart />} />
                    <Route path='/anuncie' element={<Advertise />} />
                </Route>
            </Routes>
        </BrowserRouter >
    );
}