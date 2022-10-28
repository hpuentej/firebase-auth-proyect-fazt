import { useState, useRef } from "react";

export const CopyApp = () => {
  const [text, setText] = useState("jeje!!");
  const [copied, setCopied] = useState(false);

  const inputRef = useRef()

  const handleCopy = () => {
    const input = inputRef.current
    // input.focus()
    input.select()
    document.execCommand("copy")
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 2000)

  };

  return (
    <>
      <input ref={inputRef} type="text" value={text} onChange={(e) => setText(e.target.value)}/>
      <button onClick={handleCopy}>Copy</button>
      {copied && <p>Copied!</p>}
    </>
  );
};
