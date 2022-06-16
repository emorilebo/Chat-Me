import logo from "./logo.svg";
import "./App.css";
import AuthScreen from "./pages/AuthScreen";
import { useState } from "react";
import HomeScreen from "./pages/HomeScreen";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return <div className="">{isLoggedIn ? <HomeScreen /> : <AuthScreen />}</div>;
}

export default App;
