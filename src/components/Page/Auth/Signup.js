import React from "react";
import Footer from "../../share/Footer";
import Header from "../../share/Header";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Signup = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div>
            <Header></Header>
            <div className="py-5">
                <div className="w-25 mx-auto py-5">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="p-4 shadow"
                    >
                        <h4 className="text-center mb-4">Signup</h4>

                        <div className="mb-3">
                            <input
                                type="text"
                                placeholder="Enter name"
                                className="form-control"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: "Name is Required",
                                    },
                                })}
                            />
                            <div>
                                {errors.name?.type === "required" && (
                                    <p className="m-0 text-danger">
                                        {errors.name.message}
                                    </p>
                                )}
                            </div>
                        </div>

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
                        </div>
                        <div className="mb-3">
                            <input
                                className="w-100 btn btn-primary mb-2"
                                type="submit"
                                value="Signup"
                            />
                            <p className="m-0">
                                Already Have An Account{" "}
                                <Link to="/login">Please Login Here</Link>
                            </p>
                        </div>

                        <div className="d-flex align-items-center">
                            <div className="border w-50"></div>
                            <div className="mx-4">OR</div>
                            <div className="border w-50"></div>
                        </div>
                        <div className="google-btn mt-4">
                            <button className="btn btn-outline-secondary w-100">
                                CONTINUE WITH GOOGLE
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Signup;
