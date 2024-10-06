import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./Pages/Layout/Layout.tsx";
import {ReactLenis} from "@studio-freight/react-lenis";
import Home from "./Pages/Home/Home.tsx";
import { Helmet } from 'react-helmet';
function App() {

    const lenisOptions = {
        lerp: 0.1,
        duration: 1.5,
        smoothTouch: false, //smooth scroll for touch devices
        smooth: true,
    };


    return (
        <div>
            <Helmet>
                <meta property="og:title" content="Rahul|Portfolio" />
                <meta property="og:description" content="I'm Rahul, a Full Stack Developer specializing in building engaging, and accessible web experiences. Currently, I'm focused on building tech solutions for fast-growing startups." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.rahulkrishna.me/" />
                <meta property="og:image" content="https://drive.google.com/file/d/12CxtMN599pQExFzWsppgPxIeeK_A4PC8/view?usp=sharing" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Rahul|Portfolio" />
                <meta name="twitter:description" content="I'm Rahul, a Full Stack Developer specializing in building engaging, and accessible web experiences." />
                <meta name="twitter:image" content="https://drive.google.com/file/d/12CxtMN599pQExFzWsppgPxIeeK_A4PC8/view?usp=sharing" />
                <title>Dynamic Page Title</title>
            </Helmet>


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
