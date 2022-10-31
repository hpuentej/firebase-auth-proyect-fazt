import React, { useState, useEffect } from "react";
import { Quote } from "./components/Quote";
import { Spinner } from "./components/Spinner";

// const QuoteExample = {
//   cita: "Something idea",
//   autor: "Yo mismo",
// };

export const BreakingBadApi = () => {
  const [quote, setQuote] = useState("");

  const getRandomQuote = async () => {
    const url = "https://www.breakingbadapi.com/api/quote/random";
    const res = await fetch(url);
    const [newQuote] = await res.json();
    const { quote: cita, author: autor } = newQuote;

    setQuote({
      cita,
      autor,
    });
  };

  useEffect(() => {
    getRandomQuote();
  }, []);

  return (
    <div className="bg-green-600 overflow-hidden flex flex-col flex-center">
      <picture className="flex justify-center my-4">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/77/Breaking_Bad_logo.svg"
          alt="logo"
        />
      </picture>
      <button
        className="text-2xl text-white bg-orange-400 m-2 p-1 rounded-xl
         hover:bg-orange-300 hover:text-orange-500
          hover:font-semibold self-center" 
        onClick={getRandomQuote}
      >
        Get Another
      </button>

      {!quote ? (
        <Spinner />
      ) : (
        <Quote quote={quote} getRandomQuote={getRandomQuote} />
      )}
    </div>
  );
};
