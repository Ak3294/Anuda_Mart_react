import React from "react";

export default function Avatar({ src, height, width, borderRadius, className}) {

  return (
    <>
      <div className="image">
        <img
          src={src}
          alt=""
          className={`${className}`}
          style={{ 
            height: `${height}`, 
            width: `${width}`, 
            borderRadius: `${borderRadius}` 
          }} 
        />
      </div>
    </>
  );
}
