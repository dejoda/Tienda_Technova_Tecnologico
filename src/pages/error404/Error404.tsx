import "./Error404.css";
import ErrorBackground from "./components/ErrorBackground.tsx";
import ErrorContent from "./components/ErrorContent.tsx";
import ErrorVisual from "./components/ErrorVisual.tsx";

const Error404=()=>{
    return (
        <section className="error-page">
            <ErrorBackground />

            <div className="error-grid">
                <ErrorContent />
                <ErrorVisual />
            </div>
        </section>
    )
}

export default Error404;