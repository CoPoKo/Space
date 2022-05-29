const recaptcha = async (secret: any, token: any, ip: any) => {
  const res: any = await fetch(
    new Request("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${secret}&response=${token}&remoteip=${ip}`,
    })
  ).then(e => e.json())
  if (res.success && res.score >= 0.6) {
    return true;
  } else {
    return false;
  }
};
const Captcha = {
  recaptcha,
};
export default Captcha;
