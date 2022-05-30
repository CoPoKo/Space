const recaptcha: (secret: string, token: string, ip: string) => Promise<boolean> = async (secret, token, ip) => {
  return fetch(
    new Request("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${secret}&response=${token}&remoteip=${ip}`,
    })
  )
    .then(e => e.json())
    .then((e: any) => {
      if (e.success && e.score >= 0.6) {
        return true;
      } else {
        return false;
      }
    });
};
const Captcha = {
  recaptcha,
};
export default Captcha;
