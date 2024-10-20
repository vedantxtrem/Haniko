import { log } from "console";
import React from "react";

const honeyTypes = [
  "Pure Honey",
  "Jamun Honey",
  "Mustard Honey",
  "Multiflora Honey",
  "Litchi Honey",
];


function duplicateArray(arr: any, n: any) {
  return Array.from({ length: n }, () => arr).flat();
}

function Promotion() {
  const duplicatedHoneyTypes = duplicateArray(honeyTypes, 10);

  return (
    <div className="relative overflow-hidden bg-yellow-400 py-4">
      <div className="flex animate-marquee items-center h-full">
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
