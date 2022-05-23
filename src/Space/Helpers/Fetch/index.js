let Fetch = {
  Text: async function (req) {
    return await (await fetch(req)).text()
  },
  JSON: async function (req) {
    return await (await fetch(req)).json()
  }
};
export default Fetch;
