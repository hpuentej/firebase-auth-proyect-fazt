


import React, { useState, useEffect, useRef } from "react";

export const RenderApp = () => {
  const [text, setText] = useState("");
  const rendersRef = useRef(12);
  console.log(rendersRef);
 
  useEffect(() => {
    console.log("Renders");
    // setRenders(renders + 1);
  })

  return (
    <div>
      <h1 className="text-6xl font-bold mb-3">RenderApp</h1>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <h1 className="text-4xl font-semibold">{`Renders: 0`}</h1>
    </div>
  );
};
