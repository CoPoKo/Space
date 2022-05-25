import Space from "../../Space"

async function Unsplash(keywords) {
  if (!keywords) {
    keywords = "nature,water,sky,blue,sea"
  }
  return "https://source.unsplash.com/1600x900/?" + keywords
}
export default Unsplash;
