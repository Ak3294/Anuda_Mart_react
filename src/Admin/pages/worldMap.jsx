import React from "react";
import { VectorMap } from "@react-jvectormap/core";
import { worldMill } from "@react-jvectormap/world";

const WorldMap = () => {
  // Coordinates for New Delhi, India
  const markers = [
    {
      latLng: [28.6139, 77.209],
      name: "India",
      style: { fill: "#333333", r: 8 },
    },
    {
      latLng: [39.8283, -98.5795],
      name: "United States",
      style: { fill: "#333333", r: 8 },
    }, // United States (coordinates for center)
    {
      latLng: [72.9316, -40.1734],
      name: "Greenland",
      style: { fill: "#333333", r: 8 },
    }, // Greenland (coordinates for center)
    {
      latLng: [44.0165, 21.0059],
      name: "Serbia",
      style: { fill: "#333333", r: 8 },
    }, // Serbia (coordinates for center)
    {
      latLng: [-14.235, -51.9253],
      name: "Brazil",
      style: { fill: "#333333", r: 8 },
    }, // Brazil (coordinates for center)
    {
      latLng: [-33.8688, 151.2093],
      name: "Sydney",
      style: { fill: "#333333", r: 8 },
    }, // Sydney, Australia (coordinates for center)
    {
      latLng: [61.524, 105.3188],
      name: "Russia",
      style: { fill: "#333333", r: 8 },
    }, // Russia (coordinates for center)
  ];

  return (
    <div className="flex justify-center items-center w-full h-full md:align-middle">
      <VectorMap
        map={worldMill}
        regionStyle={{
          initial: {
            fill: "#EEF0F7", // Set countries color to grey
          },
        }}
        backgroundColor="#FFFFFF"
        containerClassName="w-full h-full"
        markers={markers}
        markerStyle={{
          initial: {
            fill: "#EEF0F7", // Dark grey color for the marker
            stroke: "#9EE0FFD", // Border color
            "stroke-width": 2, // Border width
          },
          hover: {
            fill: "#3CC0FF", // Change color on hover if needed
            cursor: "pointer",
          },
        }}
        zoomOnScroll={true}
        zoomButtons={true}
      />
    </div>
  );
};

export default WorldMap;
