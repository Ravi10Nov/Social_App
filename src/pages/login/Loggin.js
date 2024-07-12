import { Link } from "react-router-dom";
import "./login.scss"

const Loggin = () => {
    return (
        <div className="login">
            <div className="cart">
                <div className="left">
                    <h1>Hello World.</h1>
                    <p>Welcome back! Please log in to your account to continue. Enter your username and password. Enjoy your stay!</p>
                    <span>Don't you have account?</span>
                    <Link to="/register">
                        <button>Register</button>
                    </Link>
                </div>
                <div className="right">
                    <h1>Login</h1>
                    <form>
                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="Password" />
                        <button>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Loggin;