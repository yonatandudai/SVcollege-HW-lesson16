import React, { createContext, useState } from "react";

export const SmartHouseContext = createContext();

export const SmartHouseProvider = ({ children }) => {
    const [rooms, setRooms] = useState([]);
    
    // Function to add a room
    const addRoom = (room) => {
        setRooms([...rooms, room]);
    };

    // Function to update a room (e.g., adding devices)
    const updateRoom = (roomName, updatedRoom) => {
        setRooms(rooms.map(r => r.name === roomName ? updatedRoom : r));
    };

    return (
        <SmartHouseContext.Provider value={{ rooms, addRoom, updateRoom }}>
            {children}
        </SmartHouseContext.Provider>
    );
};
