export function Quote({ quote, getRandomQuote }) { 
  console.log(quote)
  const {cita, autor} = quote

  return (
    <>

      <h1 className="text-4xl">{cita}</h1>
      <span className="text-2xl">{autor}</span>
    </>
  );
}
