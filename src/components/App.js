import React from "react";

// Import necessary components
import About from './About';
import Home from './Home';
import NavBar from './NavBar';

// Define the App component
const App = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
};

export default App;
