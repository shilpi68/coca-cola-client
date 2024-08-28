import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import { ImSpinner9 } from "react-icons/im";
import SocialLogin from "../../component/SocialLogin/SocialLogin";


const Login = () => {

  const { signin,loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  console.log('state in the location login page',location.state)

  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signin(email, password)
      .then(result => {
        const user = result.user;
        console.log(user)
        Swal.fire({
          title: "user login Successful",
          showClass: {
            popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `
          },
          hideClass: {
            popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `
          }
        });
        navigate(from, { replace: true })
      })


  }
  return (
    <>
      <Helmet>
        <title>Coco-cola | Log In</title>
      </Helmet>
      <div className="hero bg-base-200 min-h-screen">
        <div >
          <div >
            <h1 className="text-5xl font-bold mb-9">Login now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleLogin} className="card-body hover:bg-gradient-to-r from-indigo-300  to-pink-300   ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
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
            <SocialLogin></SocialLogin>
            <p
              className="m-10  hover:bg-gradient-to-r from-indigo-300  to-pink-300  ">
              <small>New Here?<Link to='/signup'>Create an account</Link></small></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;