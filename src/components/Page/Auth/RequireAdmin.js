import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";

import { signOut } from "firebase/auth";
import auth from "../../../firebase.init";
import useAdmin from "../../../hooks/useAdmin";

const RequireAdmin = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);
    const location = useLocation();

    if (loading || adminLoading) {
        return <p className="text-center">Loading...</p>;
    }

    if (!user || !admin) {
        return <Navigate to="/" state={{ from: location }} replace></Navigate>;
    }
    return children;
};

export default RequireAdmin;
