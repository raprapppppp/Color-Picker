import React, { useState } from "react";

export default function Color() {
  const [color, setColor] = useState("#fff");

  function handleColorChange(e) {
    setColor(e.target.value);
  }

  return (
    <div className="color-picker-container" style={{ borderColor: color }}>
      <h1 style={{ color: color }}>Color Picker</h1>
      <div className="color-display" style={{ backgroundColor: color }}>
        <p>Selected Color: {color}</p>
      </div>
      <label className="label" style={{ color: color }}>
        Select Color
      </label>
      <br />
      <input type="color" value={color} onChange={handleColorChange} />
    </div>
  );
}
