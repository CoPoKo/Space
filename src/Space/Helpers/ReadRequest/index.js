async function Body(request) {
  const { headers } = request;
  const contentType = headers.get("content-type") || "";

  if (contentType.includes("application/json")) {
    return JSON.stringify(await request.json());
  } else if (contentType.includes("application/text")) {
    return await request.text();
  } else if (contentType.includes("text/html")) {
    return await request.text();
  } else if (contentType.includes("form")) {
    const formData = await request.formData();
    const body = {};
    for (const entry of formData.entries()) {
      body[entry[0]] = entry[1];
    }
    return JSON.stringify(body);
  } else {
    const myBlob = await request.blob();
    // const objectURL = URL.createObjectURL(myBlob) // https://developers.cloudflare.com/workers/platform/changelog#1142021
    return myBlob;
  }
}

const getURLParameters = url =>
  (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
    (a, v) => (
      (a[v.slice(0, v.indexOf('='))] = decodeURIComponent(v.slice(v.indexOf('=') + 1))), a
    ),
    {}
  );

function URLParameters(request) {
  return getURLParameters(request.url)
}


const ReadRequest = {
  Body,
  URLParameters,
};
export default ReadRequest;
