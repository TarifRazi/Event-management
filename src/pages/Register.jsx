import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

import { FaEye, FaEyeSlash } from 'react-icons/fa';


const Register = () => {

    const [regError, setRegError] = useState('');
    const [regSuccess, setRegSuccess] = useState('');
    const [showPassword, setShowPassWord] = useState(false)

    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate()

    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, photo, email, password);

        setRegError('')
        setRegSuccess('')

        if (password.length < 6) {
            setRegError("Password must be at least 6 character or longer");
            return;
        }
        else if (!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/.test(password)) {
            setRegError('Must have capital and special character');
            return;
        }

        const registrationGreetings = () => toast("Thanks for login...")


        // create user
        createUser(email, password)
            .then(result => {
                setRegSuccess('User created successfully')
                console.log(result.user)
                {
                    registrationGreetings()
                    navigate('/')
                }
            })
            .catch(error => {
                console.error(error);
                setRegError(error.message);
            })
    }

    return (
        <div className="text-center min-h-screen bg-base-200">
            <div className="hero-content  flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input required type="text" name="name" placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input required type="text" name="photo" placeholder="Photo URL" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input required type="email" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="password"
                                className="input input-bordered" required />
                            <span className="mt-2" onClick={() => setShowPassWord(!showPassword)}>
                                {
                                    showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                }
                            </span>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>

                </div>
                <p className="text-center ">Already have account? please <Link className="text-blue-800 font-bold" to='/login'>Login</Link></p>
            </div>
            {
                regError && <p className="text-red-600">{regError}</p>
            }
            {
                regSuccess && <p className="text-green-500">{regSuccess}</p>
            }
        </div>
    );
};

export default Register;