import { useState, useRef } from "react";

export const FocusApp = () => {
  const [text, setText] = useState("");
  const inputRef = useRef(); 
  const inputRef2 = useRef(); 

  const handleFocus = () => {
    const input = inputRef.current;
    // input.value = 'Hans Junior Puente Jara'
    input.select()
    input.focus()
  };

  const handleFocus2 = () => {
    const input = inputRef2.current;
    console.log(inputRef2)
    console.log(input.checked);
    console.log(input.type);
    console.log(input.autofocus);
    console.log(input.baseURI);
    console.log(input.size);
    console.log(input.tagName)
    input.checked = true
  };

  return (
    <>
      <h1 className="text-2xl text-yellow-600 font-semibold mb-2 ">FocusApp</h1>
      <div className="mb-4">
        <input
          ref={inputRef}
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="mr-2 focus:outline-none focus:ring-2 focus:ring-yellow-600
            rounded-md px-2"
        />
        <button
          onClick={handleFocus}
          className="p-1 bg-yellow-400 rounded-lg
          hover:bg-yellow-300  hover:font-semibold"
        >
          Focus
        </button>
      </div>

      <input type="checkbox" ref={inputRef2} hidden={false}/>
      <button onClick={handleFocus2}>Click</button>
    </>
  );
};
