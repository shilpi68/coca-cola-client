import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { ImSpinner9 } from "react-icons/im";


const SignUp = () => {

    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const{ createUser,updateUserProfile,loading} = useContext(AuthContext)
    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log(data);
        createUser(data.email,data.password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser)
            updateUserProfile(data.name,data.photoURL)
            .then(() =>{
                console.log("user profile info updated")
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "User Created Successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate('/')
                })
            .catch(error =>console.log(error))
        })

    };
    return (
        <>
            <Helmet>
                <title>Coco-cola | Sign Up</title>
            </Helmet>
            <div className="hero bg-base-200 min-h-screen">
                <div >
                    <div >
                        <h1 className="text-5xl font-bold mb-9">Sign Up!</h1>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500   ">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" required />
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" {...register("photoURL", { required: true })}  placeholder="Photo URL" className="input input-bordered" required />
                                {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" required />
                                {errors.email && <span className="text-red-700">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[0-9])(?=.*[a-z])/
                                })} name="password" placeholder="password" className="input input-bordered" required />
                                {errors.password?.type === 'required' && <p className="text-red-600"> password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600"> password must be 6 characters</p>}
                                {errors.password?.type === 'maxLength' && <p className="text-red-600"> password must be less then 20 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600"> password must be one lower case,one number</p>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div >
                                <button
                                type="Submit"
                                className="bg-rose-500 w-full rounded-md py-3 text-white"
                                >
                                    {
                                        loading ?
                                        <ImSpinner9 className="animate-spin m-auto"></ImSpinner9> :
                                         "Continue"
                                    }
                                </button>
                            </div>
                           
                        </form>
                        <p
                            className="m-10 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                            <small>Already have an account<Link to='/login'>please Login</Link></small></p>
                    </div>
                </div>
            </div>
        </>
    );
};


export default SignUp;