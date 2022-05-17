import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const MyAppoinment = () => {
    const [user] = useAuthState(auth);
    const [appoinments, setAppoinments] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/booking?patient=${user.email}`, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setAppoinments(data);
            });
    }, [user]);
    return (
        <div>
            <h4>My Appoinment: {appoinments.length}</h4>
            <table className="table table-success table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Treatment</th>
                        <th scope="col">Date</th>
                        <th scope="col">Time</th>
                    </tr>
                </thead>
                <tbody>
                    {appoinments.map((app) => (
                        <tr key={app._id}>
                            <td>{app.treatmentId}</td>
                            <td>{app.treatment}</td>
                            <td>{app.date}</td>
                            <td>{app.slot}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MyAppoinment;
