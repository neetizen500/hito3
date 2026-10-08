import { useState } from "react";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import "./App.css";

function App() {
  // Navegación simple por estado (más adelante se reemplaza por rutas)
  const [page, setPage] = useState("home");

  return (
    <div>
      <Navbar setPage={setPage} />
      {page === "home" && <Home />}
      {page === "register" && <Register />}
      {page === "login" && <Login />}
      {page === "cart" && <Cart />}
      <Footer />
    </div>
  );
}

export default App;
