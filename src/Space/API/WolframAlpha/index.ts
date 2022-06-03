/*!
 * ==========================================================================
 * "CoPoKo Space" License
 * GNU General Public License version 3.0 (GPLv3)
 * ==========================================================================
 * This file is part of "CoPoKo Space"
 *
 * "CoPoKo Space" is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * "CoPoKo Space" is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with "CoPoKo Space". If not, see <http://www.gnu.org/licenses/>.
 * ==========================================================================
*/
import Space from "../../Space"

const WolframAlpha: (question: string) => Promise<{ en: string; cn: string; }> = async (question) => {
  const set = await Space.Helpers.Setting("WolframAlpha");
  const APPID = set.APPID;
  const s_en: any = await Space.API.GoogleTranslate(question, {
    "to": "en",
    "domain": "com"
  });
  const FetchURL = "https://api.wolframalpha.com/v1/spoken?appid=" + APPID + "&i=" + s_en.text
  let ans = await Space.Helpers.Fetch.Text(FetchURL)
  if (!/wolfram/g.test(question.toLowerCase())) {
    ans = ans.replace(/WolframAlpha/g, "Coco")
    ans = ans.replace(/Wolfram Alpha/g, "Coco")
    ans = ans.replace(/Wolfram/g, "Coco")
  }
  if (/mhuig/g.test(question.toLowerCase())) {
    ans = "Fun fact: @iMHuiG is the Big Fan of the 🤣 emoji."
  }
  if (/coco/g.test(question.toLowerCase())) {
    ans = "Coco is The Cat of MHuiG, Coco is also a computational knowledge engine or answer engine."
  }
  if (/^我是谁$/g.test(question.toLowerCase())) {
    ans = "You appear to be a human seeking computational knowledge."
  }
  ans = ans.replace(/No spoken result available/g, "I don't know.")
  const ans_cn: any = await Space.API.GoogleTranslate(ans, {
    "to": "zh-cn",
    "domain": "com"
  });
  return {
    en: ans,
    cn: ans_cn.text
  }
}
export default WolframAlpha;
