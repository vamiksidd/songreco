import React from "react";
import Signup from "./Pages/Signup";
import NotFound from "./Pages/NotFound";
import Home from "./Pages/Home";
import About from "./Pages/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Layout from "./Layout";
import History from "./Pages/History";
import Playlist from "./Pages/Playlist";
import Favourites from "./Pages/Favourites";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {/* Nested routes inside Sidebar */}
          <Route index element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/playlist" element={<Playlist />} />
          <Route path="/favourites" element={<Favourites />} />

          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
