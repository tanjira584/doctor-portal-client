import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Page/Home/Home";
import PageAppoinment from "./components/Page/PageAppoinment/PageAppoinment";

function App() {
    return (
        <div className="">
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route
                    path="/appoinment"
                    element={<PageAppoinment></PageAppoinment>}
                ></Route>
            </Routes>
        </div>
    );
}

export default App;
