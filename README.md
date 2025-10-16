# Simple React Test Site

A simple test website built with React that demonstrates basic React concepts including components, state management, and event handling.

## Features

-   🎨 **Theme Toggle**: Switch between light and dark themes
-   🔢 **Interactive Counter**: Demonstrates React state management with useState
-   ⏰ **Dynamic Content**: Shows current time that updates on page refresh
-   📱 **Responsive Design**: Works on both desktop and mobile devices
-   🎯 **Component Architecture**: Modular React components

## What This Site Demonstrates

-   ✅ React functional components
-   ✅ State management with `useState` hook
-   ✅ Event handling and user interactions
-   ✅ Conditional rendering
-   ✅ CSS styling and responsive design
-   ✅ Component composition

## Getting Started

### Prerequisites

-   Node.js (version 14 or higher)
-   npm (comes with Node.js)

### Installation

1. Navigate to the project directory:

    ```bash
    cd /Users/jrbussard/repos/testsite
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the development server:

    ```bash
    npm start
    ```

4. Open your browser and visit `http://localhost:3000`

### Available Scripts

-   `npm start` - Runs the app in development mode
-   `npm build` - Builds the app for production
-   `npm test` - Launches the test runner
-   `npm eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
testsite/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── components/         # React components
│   │   ├── Counter.js      # Interactive counter component
│   │   └── WelcomeMessage.js # Welcome message component
│   ├── App.js             # Main App component
│   ├── App.css            # App-specific styles
│   ├── index.js           # Entry point
│   └── index.css          # Global styles
├── package.json           # Dependencies and scripts
└── README.md             # This file
```

## How to Use

1. **Theme Toggle**: Click the "Switch to Dark Theme" button to toggle between light and dark modes
2. **Counter**: Use the +, -, and Reset buttons to interact with the counter
3. **Time Display**: The welcome message shows the current time (updates on page refresh)

## Customization

You can easily customize this site by:

-   Modifying the components in the `src/components/` directory
-   Updating styles in `src/App.css`
-   Adding new features and components
-   Changing the color scheme in the CSS variables

## Technologies Used

-   **React** - JavaScript library for building user interfaces
-   **React Hooks** - For state management and side effects
-   **CSS3** - For styling and responsive design
-   **Create React App** - For project setup and build tools

## License

MIT License - feel free to use this code for learning and testing purposes!
