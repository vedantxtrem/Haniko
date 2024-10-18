import { log } from "console";
import React from "react";

const honeyTypes = [
  "Wildflower Honey - Rich & Floral!",
  "Manuka Honey - Antibacterial Properties!",
  "Clover Honey - Sweet & Delicate!",
  "Buckwheat Honey - Bold & Dark!",
  "Orange Blossom Honey - Citrusy & Light!",
  "Acacia Honey - Mild & Buttery!",
];

// Function to duplicate an array n times
function duplicateArray(arr: any, n: number) {
  return Array.from({ length: n }, () => arr).flat();
}

function Promotion() {
  const duplicatedHoneyTypes = duplicateArray(honeyTypes, 100);
//   console.log(duplicatedHoneyTypes);
  

  return (
    <div className="relative overflow-hidden bg-yellow-400 py-4">
      <div className="marquee flex space-x-16 animate-marquee items-center h-full w-[200%]">
        {duplicatedHoneyTypes.map((honey, index) => (
          <h1
            key={index}
            className="font-harman text-4xl font-bold text-white min-w-max"
          >
            {honey}
          </h1>
        ))}
      </div>
    </div>
  );
}

export default Promotion;
