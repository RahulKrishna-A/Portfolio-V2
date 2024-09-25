import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./Pages/Layout/Layout.tsx";
import {ReactLenis} from "@studio-freight/react-lenis";
import Home from "./Pages/Home/Home.tsx";

function App() {

    const lenisOptions = {
        lerp: 0.1,
        duration: 1.5,
        smoothTouch: false, //smooth scroll for touch devices
        smooth: true,
    };


    return (
        <div>
            <ReactLenis root options={lenisOptions}>
                <BrowserRouter>
                    <Routes>
                        <Route element={<Layout/>}>
                            <Route path={"/"} element={<Home/>}></Route>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </ReactLenis>
        </div>
    )
}

export default App
