export const catApi = async () => {
  const res = await fetch("https://catfact.ninja/fact");
  const text = await res.json();
  const allText = text.fact
  const threeWords = allText.split(' ').slice(0,3).join(' ')
  return {threeWords, allText}
};
