import "./register.css";
import RegisterBackground from "./components/RegisterBackground.tsx";
import RegisterInfo from "./components/RegisterInfo.tsx";
import RegisterForm from "./components/RegisterForm.tsx";

const Register = () => {
    return (
        <section className="register-page">
            <RegisterBackground />

            <div className="register-shell">
                <RegisterForm />
                <RegisterInfo />
            </div>
        </section>
    );
};

export default Register;