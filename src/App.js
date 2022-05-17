import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Page/Auth/Login";
import Signup from "./components/Page/Auth/Signup";
import Home from "./components/Page/Home/Home";
import PageAppoinment from "./components/Page/PageAppoinment/PageAppoinment";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RequireAuth from "./components/Page/Auth/RequireAuth";
import Dashboard from "./components/Page/Dashboard/Dashboard";
import MyAppoinment from "./components/Page/Dashboard/MyAppoinment";
import MyReview from "./components/Page/Dashboard/MyReview";
import MyHistory from "./components/Page/Dashboard/MyHistory";
import User from "./components/Page/Dashboard/User";
import RequireAdmin from "./components/Page/Auth/RequireAdmin";

function App() {
    return (
        <div className="">
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/signup" element={<Signup></Signup>}></Route>
                <Route
                    path="/appoinment"
                    element={
                        <RequireAuth>
                            <PageAppoinment></PageAppoinment>
                        </RequireAuth>
                    }
                ></Route>
                <Route
                    path="/dashboard"
                    element={
                        <RequireAuth>
                            <Dashboard></Dashboard>
                        </RequireAuth>
                    }
                >
                    <Route
                        index
                        element={<MyAppoinment></MyAppoinment>}
                    ></Route>
                    <Route
                        path="review"
                        element={<MyReview></MyReview>}
                    ></Route>
                    <Route
                        path="history"
                        element={<MyHistory></MyHistory>}
                    ></Route>
                    <Route
                        path="users"
                        element={
                            <RequireAdmin>
                                <User></User>
                            </RequireAdmin>
                        }
                    ></Route>
                </Route>
            </Routes>
            <ToastContainer />
        </div>
    );
}

export default App;
