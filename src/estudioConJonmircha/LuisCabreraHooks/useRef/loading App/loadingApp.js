import React, { useState } from "react";
import { Card } from "./card";

export const LoadingApp = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>{!show? 'Show' : 'Hide'}</button>
      {show && <Card />}
    </div>
  );
};
