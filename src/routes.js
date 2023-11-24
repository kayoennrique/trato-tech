import PageDefault from "components/PageDefault";
import Home from "pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path='/'
                    element={<PageDefault />}
                >
                    <Route index element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter >
    );
}