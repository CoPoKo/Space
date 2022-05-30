const Text: (req: string | Request) => Promise<string> = async (req) => {
  return fetch(req).then(e => e.text())
}
const JSON: (req: string | Request) => Promise<any> = async (req) => {
  return fetch(req).then(e => e.json())
}
const Blob: (req: string | Request) => Promise<Blob> = async (req) => {
  return fetch(req).then(e => e.blob())
}
const ArrayBuffer: (req: string | Request) => Promise<ArrayBuffer> = async (req) => {
  return fetch(req).then(e => e.arrayBuffer())
}
const FormData: (req: string | Request) => Promise<FormData> = async (req) => {
  return fetch(req).then(e => e.formData())
}
const Fetch = {
  Text,
  JSON,
  Blob,
  ArrayBuffer,
  FormData,
};
export default Fetch;
