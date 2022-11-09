import { useState, useRef } from "react";

export const CopyApp = () => {
  const [text, setText] = useState("jeje!!");
  const [text2, setText2] = useState("");
  const [copied, setCopied] = useState(false);

  const inputRef = useRef();
  const input2Ref = useRef();

  const handleCopy = async () => {
    const input = inputRef.current;
    input.select();
    // document.execCommand("copy") 
    await navigator.clipboard.writeText(input.value);

    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const handlePaste = async () => {
    const text = await navigator.clipboard.readText();
    setText2(text);
  };

  return (
    <>
      <div className="flex flex-col items-center mb-2">
        <h1 className="text-2xl font-bold mb-2">Copy App</h1>
        <div className="mb-3">
          <input
            className="border-2 border-gray-300 p-2 rounded-md mr-2"
            ref={inputRef}
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button className=" bg-slate-500 rounded-md p-1 hover:bg-slate-400 " onClick={handleCopy}>Copy</button>
        </div>
        <div className="mb-3">
          <input
            className="border-2 border-gray-300 p-2 rounded-md mr-2"
            ref={input2Ref}
            type="text"
            value={text2}
            onChange={(e) => setText2(e.target.value)}
          />
          <button className=" bg-slate-500 rounded-md p-1 hover:bg-slate-400" onClick={handlePaste}>Paste</button>
        </div>
      </div>
      {copied && <h1 className="bg-fuchsia-400">Copied to the clipboard!</h1>}
    </>
  );
};
