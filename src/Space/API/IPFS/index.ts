import Space from "../../Space"

const IPFS = {
  Put: async (s: string) => {
    if (!s) {
      s = "Hello World!"
    }
    const set = await Space.Helpers.Setting("IPFS");
    const API = set.API;
    const formdata = new FormData();
    formdata.append("file", new Blob([Buffer.from(s)], { type: "text/plain" }));
    return await fetch(new Request(API + "/api/v0/add", {
      method: "POST",
      headers: {
        "accept": "application/json",
      },
      body: formdata,
    }));
  },
  Get: async (hash: string) => {
    return await fetch("https://cloudflare-ipfs.com/ipfs/" + hash);
  }
};
export default IPFS;
