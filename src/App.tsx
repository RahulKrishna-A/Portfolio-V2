import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./Pages/Layout/Layout.tsx";

function App() {

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout/>}>
                        {/*<Route path={"/"} element={<Home/>}></Route>*/}
                    </Route>
                </Routes>
            </BrowserRouter>

        </div>
    )
}

export default App
