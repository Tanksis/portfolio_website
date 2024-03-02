import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/about");
    };

    return (
        <main className="main home nes-container is-dark is-rounded"
        onClick={handleClick}>
            <div className="title">
                <h1 className="title-text title-text--primary">Eyad ElKhodary</h1>
                <h2 className="title-text title-text--secondary">Software Engineer</h2>
                <h2 className="title-text title-text--tertiary nes-pointer flash">
                    - Click to Start -
                </h2>
            </div>
        </main>

    );
};

export default Home;