import React, {useContext } from "react";
import { SmartHouseContext } from "../components/SmartHouseContext";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();
    const {rooms} = useContext(SmartHouseContext);

    return (
        <div className="flex flex-col items-center justify-start h-screen text-base">
            <h1 className="mt-4 text-4xl">Smart house</h1>
            <div className="flex flex-row items-center justify-center gap-6 mt-8">
                {rooms.map((room, index) => (
                    <div key={index}
                        className="w-20 h-20 flex items-center justify-center text-3xl border border-black cursor-pointer"
                        style={{ backgroundColor: room.color }}
                        onClick={() => navigate(`/room${room.name}`)}>
                    {room.name}
                    </div>
                ))}
            </div>
            <div className="flex items-end justify-center w-full h-full mb-10">
                <button onClick={() => navigate('/addroom')}
                    className='w-50 h-50 bg-sky-600 rounded-full flex items-center justify-center text-9xl cursor-pointer'>+</button>
            </div>
        </div>
    )
}
