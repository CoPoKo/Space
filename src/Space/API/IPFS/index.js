import Space from "../../Space"

const IPFS = {
  Put: async (s) => {
    if (!s) {
      s = "Hello World!"
    }
    const set = await Space.Helpers.Setting("IPFS");
    const API = set.API;
    return await fetch(new Request(API + "/api/v0/add", {
      method: "POST",
      headers: {
        "accept": "application/json",
        "Content-Type": 'multipart/form-data; boundary=----IPFS20363.283362394857.60938.67369538564',
      },
      body: `------IPFS20363.283362394857.60938.67369538564\r\n` +
        `Content-Disposition: form-data; name="path"\r\n` +
        `Content-Type: application/octet-stream\r\n\r\n` +
        s +
        `\r\n------IPFS20363.283362394857.60938.67369538564--`
    }));
  },
  Get: async (hash) => {
    return await fetch("https://cloudflare-ipfs.com/ipfs/" + hash);
  }
};
export default IPFS;
