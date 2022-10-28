export function Pokemon({ id, name, avatar }) {
  return (
    <figure className="bg-blue-700 rounded-lg mb-2 outline outline-2 outline-red-800 p-2">
      <img src={avatar} alt={`pokemon N° ${id} Unknow `} />
      <figcaption className="text-yellow-300">{name}</figcaption>
    </figure>
  );
}  
