import PageDefault from "components/PageDefault";
import Advertise from "pages/Advertise";
import Cart from "pages/Cart";
import Categorie from "pages/Categorie";
import Home from "pages/Home";
import Payment from "pages/Payment";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const routeAdvertise = 'anuncie';
export const routeCategorie = 'categoria';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<PageDefault />} >
                    <Route index element={<Home />} />
                    <Route path={`/${routeCategorie}/:nameCategorie`} element={<Categorie />} />
                    <Route path='carrinho' element={<Cart />} />
                    <Route path='anuncie/:nameCategorie' element={<Advertise />} />
                    <Route path='anuncie' element={<Advertise />} />
                    <Route path='pagamento' element={<Payment />} />
                </Route>
            </Routes>
        </BrowserRouter >
    );
}