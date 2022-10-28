import { useState, useEffect, useRef } from "react";

export const ScrollAnimation = () => {
  const [background, setBackground] = useState("pink");
  const divRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const div = divRef.current;
      const { y } = div.getBoundingClientRect();
      console.log(div.getBoundingClientRect())
      // console.log(y);
      const backgroundColor = y <= 0 ? "lightgreen" : "pink";
      setBackground(backgroundColor);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <h1 className="text-5xl font-bold">Scroll Animation</h1>
      <div
        ref={divRef}
        style={{
          height: "180vh",
          background,
        }}
      >
        <h1 className="text-5xl">Scroll to change background-color</h1>
      </div>
    </div>
  );
};
