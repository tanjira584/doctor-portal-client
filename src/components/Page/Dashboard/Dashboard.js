import React from "react";
import Header from "../../share/Header";
import Footer from "../../share/Footer";
import { Link, Outlet } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import useAdmin from "../../../hooks/useAdmin";

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div>
            <Header></Header>
            <h2 className="text-center py-3 border-bottom">
                Welcome to Your Dashboard
            </h2>
            <div className="container-md">
                <div className="row py-2">
                    <div className="col-md-3">
                        <ul>
                            <li>
                                <Link to="/dashboard">My Appoinment</Link>
                            </li>
                            <li>
                                <Link to="/dashboard/review">My Review</Link>
                            </li>
                            <li>
                                <Link to="/dashboard/history">My History</Link>
                            </li>
                            {admin && (
                                <li>
                                    <Link to="/dashboard/users">All Users</Link>
                                </li>
                            )}
                        </ul>
                    </div>
                    <div className="col-md-9">
                        <Outlet />
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;
