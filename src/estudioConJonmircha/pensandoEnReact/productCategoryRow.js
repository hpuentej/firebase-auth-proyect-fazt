export function ProductCategoryRow({ type }) {
  return (
    <>
      <h1 className="bg-sky-400 text-slate-800 px-24 flex justify-start uppercase font-semibold">
        {type}
      </h1>
    </>
  );
}
