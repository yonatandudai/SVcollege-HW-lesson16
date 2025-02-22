import React, { useState, useContext } from "react";
import { SmartHouseContext } from "../components/SmartHouseContext";
import { useNavigate  } from "react-router";

export default function AddRoom() {
    const navigate = useNavigate();
    const {rooms, addRoom} = useContext(SmartHouseContext);
    const [roomName, setRoomName] = useState('');
    const [roomType, setRoomType] = useState('');
    const [roomColor, setRoomColor] = useState('');

    function handleCreateRoom() {
        if (roomType=='' || roomName.length < 1) {
            alert('ERROR');
            return;
        }
        if (rooms.some((r) => r.name === roomName)) {
            alert("Room name already exists. Please choose a different name.");
            return;
        }
        addRoom({ name: roomName, type: roomType, color: roomColor, devices: [] });
        navigate('/');
    }   

    return (
        <div className="flex flex-col items-center justify-start w-120 h-80 border border-lime-600">
            <div className="mt-4 text-4xl">Smart house</div>
            <select required value={roomType} onChange={(e) => setRoomType(e.target.value)} className="w-70 h-10 border border-lime-600 text-center mt-6 text-2xl focus:border-lime-600 focus:outline-none">
            <option value="">Choose new room</option>
            {/* <!-- Available Options --> */}
            <option value="Bedroom">Bedroom</option>
            <option value="Kitchen">Kitchen</option>
            <option value="Bathroom">Bathroom</option>
            </select>
            <input 
                type="text" 
                maxLength="9" 
                placeholder="Room name" 
                className="w-70 border border-lime-600 text-center placeholder-black focus:border-lime-600 focus:outline-none mt-6 text-2xl"
                value={roomName}
                onChange={(e) => setRoomName(e.target.value)}/>
            <input 
                type="text" 
                placeholder="Room color" 
                className="w-70 border border-lime-600 text-center placeholder-black focus:border-lime-600 focus:outline-none mt-6 text-2xl"
                value={roomColor}
                onChange={(e) => setRoomColor(e.target.value)}/> 
            <div className="w-70 flex justify-start mt-8">
                <button onClick={handleCreateRoom} className="w-32 h-10 bg-sky-600 text-blue-900 text-3xl font-bold cursor-pointer">Create</button>
            </div>
        </div>
    )
}
