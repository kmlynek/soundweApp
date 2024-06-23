import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import Layout from "./layout/Layout";
import Wokal from "./pages/Wokal";
import Gitary from "./pages/Gitary";
import LoginPage from "./pages/LoginPage";
import ONas from "./pages/ONas";
import Miasta from "./pages/Miasta";
import WszystkieOgloszenia from "./pages/WszystkieOgloszenia";
import UstawieniaKonta from "./pages/UstawieniaKonta";
import Pomoc from "./pages/Pomoc";
import Dj from "./pages/Dj";
import InstrumentySmyczkowe from "./pages/InstrumentySmyczkowe";
import InstrumentyDete from "./pages/InstrumentyDete";
import InstrumentyPerkusyjne from "./pages/InstrumentyPerkusyjne";
import InstrumentyKlawiszowe from "./pages/InstrumentyKlawiszowe";
import { UserProvider } from "./components/UserContext";
import  Warszawa from "./pages/Warszawa";
import  Krakow  from "./pages/Krakow";
import  Gdansk  from "./pages/Gdansk";
import  Wroclaw  from "./pages/Wroclaw";
import  Poznan  from "./pages/Poznan";
import  Rzeszow  from "./pages/Rzeszow";
import RegisterForm from "./components/RegisterForm";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<App />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="rejestracja" element={<RegisterForm />} />
            <Route path="o-nas" element={<ONas />} />
            <Route path="miasta" element={<Miasta />} />
            <Route path="wszystkie-ogloszenia" element={<WszystkieOgloszenia />} />
            <Route path="ustawienia-konta" element={<UstawieniaKonta />} />
            <Route path="pomoc" element={<Pomoc />} />
            <Route path="gitary" element={<Gitary />} />
            <Route path="wokal" element={<Wokal />} />
            <Route path="instrumenty-klawiszowe" element={<InstrumentyKlawiszowe />} />
            <Route path="instrumenty-perkusyjne" element={<InstrumentyPerkusyjne />} />
            <Route path="instrumenty-dete" element={<InstrumentyDete />} />
            <Route path="instrumenty-smyczkowe" element={<InstrumentySmyczkowe />} />
            <Route path="dj" element={<Dj />} />
            <Route path="ogloszenia/warszawa" element={<Warszawa />} />
            <Route path="ogloszenia/krakow" element={<Krakow />} />
            <Route path="ogloszenia/gdansk" element={<Gdansk />} />
            <Route path="ogloszenia/wroclaw" element={<Wroclaw />} />
            <Route path="ogloszenia/poznan" element={<Poznan />} />
            <Route path="ogloszenia/rzeszow" element={<Rzeszow/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>
);
