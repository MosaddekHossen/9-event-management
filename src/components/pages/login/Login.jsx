import { useContext, useRef } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Login = () => {
    const { signInUser, resetEmail } = useContext(AuthContext)
    const emailRef = useRef(null);

    // Login User
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInUser(email, password)
            .then(res => {
                console.log(res.user)
                Swal.fire('Good job!', 'Success Sign In!', 'success')

                // Verification email   
                // if (res.user.emailVerified) {
                //     Swal.fire('Good job!', 'Success Sign In!', 'success')
                // }
                // else {
                //     Swal.fire('Good job!', 'Please verify your email address!', 'success')
                // }
            })
            .catch(err => {
                console.log(err.message)
                Swal.fire('Oops!', err.message, 'error')
            })
    }

    // Reset Email
    const handleForgetPassword = () => {
        const email = emailRef.current.value;
        if (!email) {
            console.log("send", email)
            Swal.fire('Oops!', "Please write valid email", 'error')
            return;
        }
        else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            console.log("Please write a valid email")
            Swal.fire('Oops!', "Write valid email", 'error')
            return;
        }
        // error
        resetEmail(email)
            .then(res => {
                Swal.fire(
                    'Oops!',
                    'Check email!',
                    'success'
                )
                console.log(res.user)
            })
            .catch(err => {
                Swal.fire(
                    'Good job!',
                    'Check your email!',
                    'success'
                )
                console.log(err.message)
            })
    }

    return (
        <div className="justify-center my-20 flex">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <form onSubmit={handleLogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                ref={emailRef}
                                placeholder="Email"
                                className="input input-bordered"
                                required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" onClick={handleForgetPassword} className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p>Don’t have an account? <Link to={'/register'}><button href="" className="text-amber-500 underline">Create an account</button></Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;