import React, { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <div className={`App ${theme}`}>
            <header className="App-header">
                <h1>Welcome to React Test Site</h1>
                <WelcomeMessage />
                <button className="theme-toggle" onClick={toggleTheme}>
                    Switch to {theme === "light" ? "Dark" : "Light"} Theme
                </button>
            </header>

            <main className="App-main">
                <section className="feature-section">
                    <h2>Interactive Features</h2>
                    <Counter />
                </section>

                <section className="info-section">
                    <h2>About This Site</h2>
                    <p>
                        This is a simple React test website that demonstrates basic React concepts including components, state management, and event handling.
                    </p>
                    <ul>
                        <li>✅ React components</li>
                        <li>✅ State management with useState</li>
                        <li>✅ Event handling</li>
                        <li>✅ Conditional rendering</li>
                        <li>✅ CSS styling</li>
                    </ul>
                </section>
            </main>

            <footer className="App-footer">
                <p>Built with ❤️ using React</p>
            </footer>
        </div>
    );
}

export default App;
