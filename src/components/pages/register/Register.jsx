import { useContext, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);

    const { createUser } = useContext(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const accepted = e.target.terms.checked;
        console.log(accepted)

        if (password.length < 6) {
            return Swal.fire(
                'Oops!',
                'Password should be at least 6 characters',
                'error'
            )
        }
        else if (!/[A-Z]/.test(password)) {
            return Swal.fire(
                'Oops!',
                'Your password should have at least one upper case characters.',
                'error'
            )
        }
        else if (!accepted) {
            Swal.fire(
                'Oops!',
                'Please accept our terms and conditions',
                'error'
            )
            return;
        }

        createUser(email, password)
            .then(res => {
                console.log(res.user)
                Swal.fire(
                    'Good job!',
                    'Success Sign Up!',
                    'success'
                )
            })
            .catch(err => {
                console.log(err.message)
                Swal.fire(
                    'Oops!',
                    err.message,
                    'error'
                )
            })
    }
    return (
        <div>
            <div className="text-center">
                <div className="mx-auto md:w-1/3 mt-20">
                    <h2 className="text-3xl mb-8 mx-auto flex justify-center text-zinc-600 font-medium">Please Register</h2>
                    <form onSubmit={handleRegister}>
                        <input required type="email" className="mb-4 w-full py-2 px-4 border-b-teal-200 border-b-2" name="email" placeholder="Email Address" id="" />
                        <br />
                        <div className="mb-4 relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                className="w-full py-2 px-4 border-b-teal-200 border-b-2"
                                name="password" required
                                placeholder="Password" id="" />
                            <span className="absolute top-3 right-3" onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                            </span>
                        </div>
                        <br />
                        <div className="mb-2">
                            <input type="checkbox" name="terms" id="terms" />
                            <label className="ml-1" htmlFor="terms">Accept our <a href="">Terms and conditions</a></label>
                        </div>
                        <br />
                        <input className="btn btn-success mb-4 w-full font-bold text-white" type="submit" value="Register" />
                    </form>
                    <p>Already have an account? <Link to={'/login'}><a href="" className="text-amber-500 underline">Login</a></Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;