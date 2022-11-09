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
import { CicloDeVida } from "./estudioConJonmircha/LearnHooks/cicloDeVidaHooks";
import { FetchCard } from "./estudioConJonmircha/LearnHooks/fetchCard";
import { ResizeApp } from "./estudioConJonmircha/LearnHooks/resizeApp";
import { ConditionalApp } from "./estudioConJonmircha/LearnHooks/conditionalApp";
import {FocusApp} from "./estudioConJonmircha/LearnHooks/useRef/focusApp"
import {CopyApp} from "./estudioConJonmircha/LearnHooks/useRef/copyApp"
import {MediaPlayer} from "./estudioConJonmircha/LearnHooks/useRef/mediaPlayer"
import {ScrollAnimation} from "./estudioConJonmircha/LearnHooks/useRef/scrollAnimation"
import {RenderApp} from "./estudioConJonmircha/LearnHooks/useRef/renderApp"
import {LoadingApp} from "./estudioConJonmircha/LearnHooks/useRef/loading App/loadingApp"
import {PokeApi} from "./estudioConJonmircha/pokemonApi/pokeApi"
import {NewApp} from "./estudioConJonmircha/LearnHooks/Memorize/newApp"
import { CustomContador } from "./estudioConJonmircha/LearnHooks/custom hooks/customContador";
import { CustomTodoApp } from "./estudioConJonmircha/LearnHooks/custom hooks/customTodoApp";
import { BreakingBadApi } from "./estudioConJonmircha/LearnHooks/breakingBadApi/BreakingBadApi";
import { DogsApi } from "./estudioConJonmircha/LearnHooks/dogsApp/DogsApi"
import { LearnChildren } from "./estudioConJonmircha/LearnHooks/children/LearnChildren"
import { MovieApp } from "./estudioConJonmircha/LearnHooks/useContext/MovieApp"
import { Position } from "./learnCSS/Position"
import { Formulario } from "./estudioConJonmircha/Formularios/Formulario";


function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="bg-cyan-800 text-center overflow-hidden mx-auto pt-3 pb-4">
    {/* <div> */}
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
        <Route path="/loading" element={<LoadingApp/>}/>
        <Route path="/pokemon" element={<PokeApi/>} />
        <Route path="/newApp" element={<NewApp/>} />
        <Route path="/customContador" element={<CustomContador/>}/>
        <Route path="/customTodoApp" element={<CustomTodoApp/>}/>
        <Route path="/breakingBad" element={<BreakingBadApi/>} />
        <Route path="/dogsApi" element={<DogsApi/>}/>
        <Route path="/children" element={<LearnChildren/>}/>
        <Route path="/movies" element={<MovieApp/>}/>
        <Route path="/learnCSS" element={<Position/>}/>
        <Route path="form" element={<Formulario/>} />
      </Routes>
    </div>    
  );
}

export default App;
