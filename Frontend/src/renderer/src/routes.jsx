import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/homepage/index";
import CriaCurriculo from "./pages/curriculo/criar/index";
import AnexaCurriculo from "./pages/curriculo/anexar/index";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route />
                <Route path="/" element={<HomePage />} ></Route>
                <Route path="/curriculo/cadastro" element={<CriaCurriculo />}> </Route>
                <Route path="/curriculo/anexo" element={<AnexaCurriculo />}> </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes