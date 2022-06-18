import logo from "./logo.svg";
import "./App.css";
import AuthScreen from "./pages/AuthScreen";
import { useState } from "react";
import HomeScreen from "./pages/HomeScreen";

function App() {
   const [loggedIn, setLoggedIn] = useState(localStorage.getItem('jwt')?true:false);
  
  return(
   <div className="">{loggedIn ? <HomeScreen setLoggedIn={setLoggedIn} /> : <AuthScreen setLoggedIn={setLoggedIn} />}</div>
  )
}

export default App;
