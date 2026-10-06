import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import PS3 from "./pages/PS3";
import PS4 from "./pages/PS4";
import Xbox360 from "./pages/Xbox360";
import XboxOne from "./pages/XboxOne";
import GameDetail from "./pages/GameDetail";

import "./App.css";

export default function App() {

  return (
    <BrowserRouter>

      <div className="flex min-h-screen flex-col bg-[#050505]">

        <Navbar />

        <main className="flex-1">

          <Routes>

            <Route
              path="/"
              element={<Home />}
            />

            <Route
              path="/ps3"
              element={<PS3 />}
            />

            <Route
              path="/ps4"
              element={<PS4 />}
            />

            <Route
              path="/xbox360"
              element={<Xbox360 />}
            />

            <Route
              path="/xboxone"
              element={<XboxOne />}
            />

            <Route
              path="/juego/:id"
              element={<GameDetail />}
            />

          </Routes>

        </main>

        <Footer />

      </div>

    </BrowserRouter>
  );
}