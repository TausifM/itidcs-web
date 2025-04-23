
"use client"
import { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

// Updated path to existing MapComponent file
const Map = dynamic(() => import("../component/mapcomponent"), { ssr: false });

export default function TravelGuide() {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const locations = [
    { name: "Kyoto, Japan", image: "/kyoto.jpg", description: "A city rich in history and culture..." },
    { name: "Marrakech, Morocco", image: "/marrakech.jpg", description: "A vibrant city that tantalizes..." },
    { name: "Santorini, Greece", image: "/santorini.jpg", description: "Known for stunning sunsets..." },
    { name: "Cape Town, South Africa", image: "/capetown.jpg", description: "Nestled between the ocean..." },
    { name: "Reykjavik, Iceland", image: "/reykjavik.jpg", description: "The capital of Iceland is..." },
    { name: "Cusco, Peru", image: "/cusco.jpg", description: "Once the capital of the Inca Empire..." },
    { name: "Queenstown", image: "/queenstown.jpg", description: "Known as the adventure capital..." },
    { name: "Barcelona, Spain", image: "/barcelona.jpg", description: "A city that blends modernity..." },
    { name: "Banff, Canada", image: "/banff.jpg", description: "Located in the heart of the Canadian Rockies..." }
  ];

  return (
    <>
      <div className="flex px-4 py-6 gap-4 mt-10">
        <div className="flex-1 grid grid-cols-3 gap-4">
          {locations.map((loc, idx) => (
            <div key={idx} className="bg-white shadow-md rounded overflow-hidden">
              <Image src={loc.image} alt={loc.name} width={400} height={300} className="w-full h-48 object-cover" />
              <div className="p-3">
                <h3 className="font-bold text-lg">{loc.name}</h3>
                <p className="text-sm text-gray-600">{loc.description}</p>
              </div>
            </div>
          ))}

          {/* Pagination */}
          <div className="col-span-3 flex justify-center space-x-2 mt-4">
            {[1, 2, 3, 4].map(n => (
              <button key={n} className="px-3 py-1 border rounded hover:bg-gray-200">{n}</button>
            ))}
          </div>
        </div>

        <div className="w-[400px]">
          <Map selectedLocation={selectedLocation} onSelect={setSelectedLocation} />
        </div>
      </div>

    </>
  )
}
