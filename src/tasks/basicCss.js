import { Link } from "react-router-dom";

export const Margenes = () => {
  return (
    <>
      <div className="flex bg-cyan-100 text-black h-96 flex-col">
        <p className="self-start">Hans Puente</p>
        <div className="bg-amber-200 p-4 m-2">Box-1</div>
        <div className="bg-amber-400 p-4 m-2 self-center flex-grow">Box-2</div>
        <div className="bg-amber-600 p-4 m-2 self-end flex-grow">Box-3</div>
        <Link to="#" className="self-start">Peru al mundial</Link>
      </div>
    </>
  );
};
