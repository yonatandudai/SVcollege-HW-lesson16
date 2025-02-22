import React, {useState} from "react";
import { SmartHouseProvider } from "./components/SmartHouseContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddRoom from "./pages/AddRoom";
import Room from "./components/Room";

function App() {
  const [rooms, setRooms] = useState([]);

  return (
    <SmartHouseProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addroom" element={<AddRoom />} />
        <Route path="/:roomNameRoom" element={<Room />} />
      </Routes>
    </BrowserRouter>
    </SmartHouseProvider>
  )
}

export default App
