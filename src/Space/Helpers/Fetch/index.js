const Fetch = {
  Text: async function (req) {
    return fetch(req).then(e => e.text())
  },
  JSON: async function (req) {
    return fetch(req).then(e => e.json())
  }
};
export default Fetch;
