const url =
  "http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=3a56a21142a249569c54d5212aa63b56";

export async function getNews() {
  let result = await fetch(url).then(response => response.json());
  return result.articles;
}
    




