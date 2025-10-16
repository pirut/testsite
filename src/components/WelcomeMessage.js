import React from "react";

function WelcomeMessage() {
    const currentTime = new Date().toLocaleTimeString();

    return (
        <div className="welcome-message">
            <p>
                Hello! The current time is: <strong>{currentTime}</strong>
            </p>
            <p>This message updates every time you refresh the page!</p>
        </div>
    );
}

export default WelcomeMessage;
