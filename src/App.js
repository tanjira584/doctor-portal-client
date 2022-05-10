import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Page/Home/Home";

function App() {
    return (
        <div className="">
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
            </Routes>
        </div>
    );
}

export default App;
