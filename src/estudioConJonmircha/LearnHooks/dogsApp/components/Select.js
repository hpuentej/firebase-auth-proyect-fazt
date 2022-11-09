import { Error } from "./Error";

export const Select = ({ breeds, updateDogImage, error, loading }) => {
  return (
    <>
      {breeds ? (
        <select
          className="p-2 mb-5 shadow-md text-center appearance-none
                        outline-slate-400 outline "
          onChange={(e) => {
            updateDogImage(e.target.value);
          }}
        >
          <option value={0}>Choose a breed of dog</option>
          {breeds.map((breed) => (
            <option key={breed.id} value={breed.id}>
              {breed.name}
            </option>
          ))}
        </select>
      ) : (
        error && <Error error={'Error en las razas'} />
      )}
    </>
  );
};
