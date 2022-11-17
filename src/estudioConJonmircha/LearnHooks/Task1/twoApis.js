import React, { useState, useEffect } from "react";
import { catApi } from "./catApi";
import { giphyApi } from "./giphyApi";

// Pages to use
// https://catfact.ninja  - Cat random facts
// https://developers.giphy.com/docs/ - Giphy API

export function TwoApis() {
  const [catText, setCatText] = useState({ threeWords: "", allText: "" });
  const [giphy, setGiphy] = useState("jeje");

  useEffect(() => {
    catApi()
      .then((text) =>
        setCatText({ threeWords: text.threeWords, allText: text.allText })
      )
      .catch((e) => {
        console.log(e);
      });
  }, []);

  useEffect(() => {
    giphyApi(catText.threeWords).then((giftUrl) => {
      setGiphy(giftUrl);
    });
  }, [catText.threeWords]);

  return (
    <>
      <section className="container flex justify-evenly items-center mx-auto">
        <img className="mr-2" src={giphy} alt="Gift random" />
        <h1 className="text-3xl">{catText.threeWords}</h1>
      </section>
    </>
  );
}
