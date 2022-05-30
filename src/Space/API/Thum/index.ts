async function Thum(opt: any = {}) {
  if (!opt.url) {
    opt.url = "https://www.google.com"
  }
  if (!opt.width) {
    opt.width = "1024"
  }
  if (!opt.height) {
    opt.height = "1200"
  }
  if (!opt.wait) {
    opt.wait = "2"
  }
  return "https://image.thum.io/get/width/" + opt.width + "/crop/" + opt.height + "/wait/" + opt.wait + "/" + opt.url
}
export default Thum;
