import React from 'react';
import './App.css';
import { AppContextProvider, AppContext } from "./AppContext"
import Routes from "./Routes"
import Navbar from "./Components/Navbar"
import Characters from "./Components/Characters";
import Episodes from "./Components/Episodes";
import Register from "./Components/Register"

Register.contextType = AppContext;
Characters.contextType = AppContext;
Episodes.contextType = AppContext;

function App() {
  return (
    <AppContextProvider>
      <div className="App">
          <Navbar/>
          <Routes/>
      </div>
    </AppContextProvider>
  );
}

export default App;
