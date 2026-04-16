import "./login.css";
import LoginBackground from "./components/LoginBackground.tsx";
import LoginInfo from "./components/LoginInfo.tsx";
import LoginForm from "./components/LoginForm.tsx";

const Login = () => {
    return (
        <section className="login-page">
            <LoginBackground />

            <div className="login-shell">
                <LoginInfo />
                <LoginForm />
            </div>
        </section>
    );
};

export default Login;