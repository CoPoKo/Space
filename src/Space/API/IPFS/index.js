import Space from "../../Space"

const IPFS = {
  Put: async (s) => {
    if (!s) {
      s = "Hello World!"
    }
    const set = await Space.Helpers.Setting("IPFS");
    const API = set.API;
    let formdata = new FormData();
    formdata.append("file", Buffer.from(s));
    return await fetch(new Request(API + "/api/v0/add", {
      method: "POST",
      headers: {
        "accept": "application/json",
      },
      body: formdata,
    }));
  },
  Get: async (hash) => {
    return await fetch("https://cloudflare-ipfs.com/ipfs/" + hash);
  }
};
export default IPFS;
