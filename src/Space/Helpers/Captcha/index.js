const recaptcha = async (secret, token, ip) => {
  let res = await fetch(
    new Request("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${secret}&response=${token}&remoteip=${ip}`,
    })
  );
  res = await res.json();
  if (res.success && res.score >= 0.6) {
    return true;
  } else {
    return false;
  }
};
let Captcha = {
  recaptcha: recaptcha,
};
export default Captcha;
