const Fetch = {
  Text: async function (req: string | Request) {
    return fetch(req).then(e => e.text())
  },
  JSON: async function (req: string | Request) {
    return fetch(req).then(e => e.json())
  }
};
export default Fetch;
