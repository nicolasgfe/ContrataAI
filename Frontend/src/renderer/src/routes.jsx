import { HashRouter, Route, Routes } from "react-router-dom";
import React from 'react';

import HomePage from "./pages/homepage/index";
import CriaCurriculo from "./pages/curriculo/criar/index";
import AnexaCurriculo from "./pages/curriculo/anexar/index";
import Concluido from "./pages/concluido/index";

const AppRoutes = () => (
        <HashRouter>
            <Routes>
                <Route path="/" element={<HomePage />} ></Route>
                <Route path="/curriculo/cadastro" element={<CriaCurriculo />}> </Route>
                <Route path="/curriculo/anexo" element={<AnexaCurriculo />}> </Route>
                <Route path="/curriculo/concluido" element={<Concluido />}> </Route>
            </Routes>
        </HashRouter> 
)

export default AppRoutes;