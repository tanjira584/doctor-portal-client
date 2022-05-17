import React from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";

const User = () => {
    const {
        data: users,
        isLoading,
        refetch,
    } = useQuery("users", () =>
        fetch("http://localhost:5000/user", {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        }).then((res) => res.json())
    );
    if (isLoading) {
        return <p className="text-center">Loading...</p>;
    }
    const makeAdmin = (email) => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: "PUT",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        })
            .then((res) => {
                if (res.status === 403) {
                    toast.error("Failed to Make an admin");
                }
                return res.json();
            })
            .then((data) => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully made an admin`);
                }
            });
    };
    return (
        <div>
            <h4>All Users</h4>
            <div>
                <table className="table table-success table-striped">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user._id}>
                                <th>1</th>
                                <td>{user.email}</td>
                                <td>
                                    {user.role !== "admin" && (
                                        <button
                                            onClick={() =>
                                                makeAdmin(user.email)
                                            }
                                            className="btn btn-sm btn-success"
                                        >
                                            Make Admin
                                        </button>
                                    )}
                                </td>
                                <td>
                                    <button className="btn btn-sm btn-danger">
                                        Remove User
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default User;
