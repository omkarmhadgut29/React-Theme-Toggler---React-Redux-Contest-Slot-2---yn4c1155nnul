import React, { useState } from "react";
import "../styles/App.css";

const App = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [styles, setStyles] = useState({
        color: "rgb(0,0,0)",
        backgroundColor: "rgb(255,255,255)",
    });
    const dark = () => {
        setStyles({
            color: "rgb(255,255,255)",
            backgroundColor: "rgb(0,0,0)",
        });
    };

    const light = () => {
        setStyles({
            color: "rgb(0,0,0)",
            backgroundColor: "rgb(255,255,255)",
        });
    };

    return (
        <>
            <div id="main" style={styles}>
                {isDarkMode ? (
                    <>
                        <h1>Dark Mode Activated</h1>
                        <button
                            onClick={() => {
                                setIsDarkMode(!isDarkMode);
                                dark();
                            }}
                        >
                            Switch to Light Mode
                        </button>
                    </>
                ) : (
                    <>
                        <h1>Light Mode Activated</h1>
                        <button
                            onClick={() => {
                                setIsDarkMode(!isDarkMode);
                                light();
                            }}
                        >
                            Switch to Dark Mode
                        </button>
                    </>
                )}
            </div>
        </>
    );
};

export default App;
