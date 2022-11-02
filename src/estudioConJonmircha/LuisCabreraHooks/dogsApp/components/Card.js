import { Spinner } from "./Spinner";

export const Card = ({ chosenBreed, updateDogImage, loading }) => {
  if (loading) return <Spinner />;

  return (
    <>
      <div className="flex flex-col hover:transf">
        <div className="flex flex-col items-center">
          <img
            className="w-2/3"
            src={chosenBreed.url}
            alt="Dog"
            onClick={() => updateDogImage(chosenBreed.id)}
          />
          <h1 className="text-center p-5 text-3xl font-serif">
            {chosenBreed.name}
          </h1>
        </div>
      </div>
    </>
  );
};
