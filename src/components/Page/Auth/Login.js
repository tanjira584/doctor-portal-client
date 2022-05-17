import React, { useEffect } from "react";
import Footer from "../../share/Footer";
import Header from "../../share/Header";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import {
    useSignInWithGoogle,
    useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import useToken from "../../../hooks/useToken";

const Login = () => {
    const {
        register,
        handleSubmit,

        formState: { errors },
    } = useForm();
    const [signInWithGoogle, guser, gloading, gerror] =
        useSignInWithGoogle(auth);
    const [signInWithEmailAndPassword, user, loading, error] =
        useSignInWithEmailAndPassword(auth);
    const onSubmit = (data) => {
        signInWithEmailAndPassword(data.email, data.password);
        toast("User Logged in successfully");
    };
    const [token] = useToken(user || guser);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || "/";
    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate]);
    if (loading || gloading) {
        return <p className="text-center">Loading...</p>;
    }
    return (
        <div>
            <Header></Header>
            <div className="py-5">
                <div className="w-25 mx-auto p-5 mt-5 shadow rounded">
                    <form onSubmit={handleSubmit(onSubmit)} className="">
                        <h4 className="text-center mb-4">Login</h4>

                        <div className="mb-3">
                            <input
                                type="email"
                                placeholder="Enter email"
                                className="form-control"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email is Required",
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: "Please provide a valid email",
                                    },
                                })}
                            />
                            <div>
                                {errors.email?.type === "required" && (
                                    <p className="m-0 text-danger">
                                        {errors.email.message}
                                    </p>
                                )}
                                {errors.email?.type === "pattern" && (
                                    <p className="m-0 text-danger">
                                        {errors.email.message}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="mb-3">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Enter Password"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "Password is required",
                                    },
                                    minLength: {
                                        value: 6,
                                        message:
                                            "Your password must be gather then 6 characters",
                                    },
                                })}
                            />

                            <div>
                                {errors.password?.type === "required" && (
                                    <p className="m-0 text-danger">
                                        {errors.password.message}
                                    </p>
                                )}
                                {errors.password?.type === "minLength" && (
                                    <p className="m-0 text-danger">
                                        {errors.password.message}
                                    </p>
                                )}
                            </div>
                            <button className="btn px-0">
                                Password Reset?
                            </button>
                        </div>
                        <div className="mb-3">
                            <input
                                className="w-100 btn btn-primary mb-2"
                                type="submit"
                                value="Login"
                            />
                            <p className="m-0">
                                New to Doctor Portal{" "}
                                <Link to="/signup">Create a new account</Link>
                            </p>
                        </div>
                    </form>
                    <div className="d-flex align-items-center">
                        <div className="border w-50"></div>
                        <div className="mx-4">OR</div>
                        <div className="border w-50"></div>
                    </div>
                    <div className="google-btn mt-4">
                        <button
                            onClick={() => signInWithGoogle()}
                            className="btn btn-outline-secondary w-100"
                        >
                            CONTINUE WITH GOOGLE
                        </button>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;
