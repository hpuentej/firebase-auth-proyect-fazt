import React, { useState, useEffect, useRef } from "react";

export const RenderApp = () => {
  const [text, setText] = useState("");

  // 
  const rendersRef = useRef(1);

  useEffect(() => {
    rendersRef.current = rendersRef.current + 1;
  });

  return (
    <div>
      <h1 className="text-6xl font-bold mb-3">RenderApp</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="outline-none mb-2 rounded-sm px-1 py-0.5"
      />
      <h1 className="text-4xl font-semibold">
        {`Renders: ${rendersRef.current + 1}`}{" "}
      </h1>
    </div>
  );
};

