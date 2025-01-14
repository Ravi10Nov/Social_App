import { Link } from "react-router-dom";
import "./register.scss"

const Register = () => {
    return (
        <div className="register">
            <div className="cart">
                <div className="left">
                    <h1>Social Plateform</h1>
                    <p>Welcome back! Please log in to your account to continue. Enter your username and password. Enjoy your stay!</p>
                    <span>Do you have account?</span>
                    <Link to='/login'>
                        <button>Login</button>
                    </Link>
                </div>
                <div className="right">
                    <h1>Login</h1>
                    <form>
                        <input type="text" placeholder="Username" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <input type="text" placeholder="Name" />
                        <button>Register</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register;