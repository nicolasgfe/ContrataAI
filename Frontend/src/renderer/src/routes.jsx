import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/homepage/index";
import CriaCurriculo from "./pages/curriculo/criar/index";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route />
                <Route path="/" element={<HomePage />} ></Route>
                <Route path="/cadastro/curriculo" element={<CriaCurriculo />}> </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes