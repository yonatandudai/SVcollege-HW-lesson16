import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { SmartHouseContext } from "../components/SmartHouseContext";
import { Link } from "react-router-dom";

export default function Room() {
    const { roomNameRoom } = useParams(); //This is now "roomA", "roomeli", etc.
    // ✅ Remove "room" from the end of the string to get the actual room name
    const roomName = roomNameRoom.replace("room", "");
    const { rooms, updateRoom } = useContext(SmartHouseContext);
    const room = rooms.find((r) => r.name === roomName);
    
    const [selectedDevice, setSelectedDevice] = useState('');
    const [addDeviceSectionVisible, setAddDeviceSectionVisible] = useState(false);

    if (!room) {
        return <p className="text-xl text-red-600">Room not found!</p>;
    }

    function handleAddDevice() {
        if (selectedDevice === '') {
            alert('Please select a device');
            return;
        }
        if (room.devices.length >= 5) {
            alert("You can only add up to 5 devices per room");
            setAddDeviceSectionVisible(false);
            return;
        }
        const newDevices = [...room.devices, { id: room.devices.length+1, name: selectedDevice, status: "off" }];
        updateRoom(roomName, { ...room, devices: newDevices });
        setSelectedDevice('');
        setAddDeviceSectionVisible(false);
    }

    function changeDeviceStatus(deviceId) {
        const updatedDevices = room.devices.map((device) => {
            if (device.id === deviceId) {
                const newStatus = device.status === 'on' ? 'off' : 'on';
                const newColor = newStatus === 'on' ? 'green' : 'red';
                return { ...device, status: newStatus, color: newColor };
            }
            return device;
        });
        updateRoom(roomName, { ...room, devices: updatedDevices }); // Persist changes in context
    }

    return (
        <div className="relative flex flex-col items-center w-120 h-80 border border-lime-600">
            <Link to="/" className="absolute top-6 left-6 text-2xl text-blue-900 font-bold cursor-pointer">Back</Link>
            <div className="text-4xl mt-5">Smart house</div>
            {/* Room details */}
            <div className="absolute top-18 left-6 flex flex-col items-start text-lg text-black">
            <p>Room name: {room.name}</p>
            <p>Room type: {room.type}</p>
            </div>
            <button onClick={() => setAddDeviceSectionVisible(true)}
                className="absolute bottom-6 left-6 w-25 h-10 bg-sky-600 text-blue-900 text-base font-bold cursor-pointer">
                Add Device
            </button>
            {/* Device Section */}
            {addDeviceSectionVisible && (
            <div className="absolute bottom-6 left-40 w-full">
                <select
                    className="border border-lime-600 text-center text-lg focus:border-lime-600 focus:outline-none px-2 py-1 w-50"
                    value={selectedDevice}
                    onChange={(e) => setSelectedDevice(e.target.value)}>
                    <option value="">Choose device</option>
                    <option value="Air Conditioner">Air Conditioner</option>
                    <option value="Lamp">Lamp</option>
                    <option value="Stereo System">Stereo System</option>
                    <option value="Boiler">Boiler</option>
                </select>
                <button className="ml-4 bg-sky-600 text-blue-900 px-3 py-2 font-bold cursor-pointer"
                    onClick={handleAddDevice}>
                    Add
                </button>
            </div>)}

            {/* Display Added Devices */}
            <div className="absolute top-18 right-6 flex flex-col gap-2">
                {room.devices.length > 0 ? (
                    room.devices.map((device, index) => (
                        <div key={index}
                            className="bg-red-500 w-35 h-6 px-3 text-black cursor-pointer"
                            style={{ backgroundColor: device.color }}
                            onClick={() => changeDeviceStatus(device.id)}>
                            {device.name}
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500">No devices added yet.</p>
                )}
            </div>
        </div>
    );
}
