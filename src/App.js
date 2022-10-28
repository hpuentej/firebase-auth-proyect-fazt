import { useState } from "react";

import { Routes, Route } from "react-router-dom";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { Home } from "./components/Home";
import { Dios, ShowInfo } from "./components/SecretMsg";
import { ToDo } from "./tasks/main";
import { Ejemplo } from "./estudioConJonmircha/ejemploContador";
import { Ejemplo2 } from "./estudioConJonmircha/cicloDeVida";
import { TutorialReact0 } from "./estudioConJonmircha/tutorialReact0";
import { Contador } from "./estudioConJonmircha/contadorHook";
import { FilterableProductTable } from "./estudioConJonmircha/pensandoEnReact/filterableProductTable";
import dataProducts from "./estudioConJonmircha/assets/dataProducts.json";
import { Calculator } from "./estudioConJonmircha/calculadorTemperatura/calculatorMain";
import { RelojHooks } from "./estudioConJonmircha/relojHooks";
import { CicloDeVida } from "./estudioConJonmircha/LuisCabreraHooks/cicloDeVidaHooks";
import { FetchCard } from "./estudioConJonmircha/LuisCabreraHooks/fetchCard";
import { ResizeApp } from "./estudioConJonmircha/LuisCabreraHooks/resizeApp";
import { ConditionalApp } from "./estudioConJonmircha/LuisCabreraHooks/conditionalApp";
import {FocusApp} from "./estudioConJonmircha/LuisCabreraHooks/useRef/focusApp"
import {CopyApp} from "./estudioConJonmircha/LuisCabreraHooks/useRef/copyApp"
import {MediaPlayer} from "./estudioConJonmircha/LuisCabreraHooks/useRef/mediaPlayer"
import {ScrollAnimation} from "./estudioConJonmircha/LuisCabreraHooks/useRef/scrollAnimation"
import {RenderApp} from "./estudioConJonmircha/LuisCabreraHooks/useRef/renderApp"
import {PokeApi} from "./estudioConJonmircha/pokemonApi/pokeApi"

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="container bg-cyan-800 text-black text-center overflow-hidden mx-auto">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/creacion"
          element={
            <>
              <Dios />
              <ShowInfo />
            </>
          }
        />
        <Route path="/task" element={<ToDo />} />
        <Route path="/practicando" element={<Ejemplo />} />
        <Route path="/ejemplo2" element={<Ejemplo2 />} />
        <Route path="/tutorialReact0" element={<TutorialReact0 />} />
        <Route path="/contadorHook" element={<Contador />} />
        <Route
          path="/mock"
          element={<FilterableProductTable dataProducts={dataProducts} />}
        />
        <Route path="/calctemp" element={<Calculator />} />
        <Route path="/reloj" element={<RelojHooks />} />
        <Route
          path="/cicloDeVida"
          element={
            <div>
              <button onClick={() => setShow(!show)}>Show/Hide</button>
              {show && <CicloDeVida />}
            </div>
          }
        />
        <Route path="/fetchCard" element={<FetchCard />} />
        <Route
          path="/resizeApp"
          element={
            <div>
              <button onClick={() => setShow(!show)}>Show/Hide</button>
              {show && <ResizeApp />}
            </div>
          }
        />
        <Route path="/conditionalApp" element={<ConditionalApp/>} />
        <Route path="/focus" element={<FocusApp/>} />
        <Route path="/copy" element={<CopyApp/>} />
        <Route path="/mediaPlayer" element={<MediaPlayer/>} />
        <Route path="/scroll" element={<ScrollAnimation/>} />
        <Route path="/renderapp" element={<RenderApp/>} />
        <Route path="/pokemon" element={<PokeApi/>} />
      </Routes>
    </div>    
  );
}

export default App;
