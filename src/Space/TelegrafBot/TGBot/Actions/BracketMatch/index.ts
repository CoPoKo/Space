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
import HandleMessage from "../../HandleMessage";

async function BracketMatch(that: HandleMessage): Promise<void> {
  const ctx = that.ctx;
  const message = ctx.message["text"];
  const left = ["(", "（", "【", "《", "＜", "﹝", "<", "[", "«", "‹", "〔", "〈", "{", "［", "「", "｛", "〖", "『"];
  const right = [")", "）", "】", "》", "＞", "﹞", ">", "]", "»", "›", "〕", "〉", "}", "］", "」", "｝", "〗", "』"];
  const stack = [];
  const result = [];
  const stackMatch = [];
  for (let i = 0; i < message.length; i++) {
    if (left.includes(message[i]) || right.includes(message[i])) {
      stack.push(message[i]);
    }
  }
  if (stack.length) {
    let port = stack.pop();
    while (port) {
      if (left.includes(port)) {
        if (stackMatch.length) {
          const temp = stackMatch.pop();
          if (temp != right[left.indexOf(port)]) {
            result.push(right[left.indexOf(port)]);
          }
        } else {
          result.push(right[left.indexOf(port)]);
        }
      }
      if (right.includes(port)) {
        stackMatch.push(port);
      }
      port = stack.pop();
    }
    let resultStr = "";
    result.forEach(e => {
      if (e) {
        resultStr += e;
      }
    });
    await ctx.reply(resultStr);
  }
}

export default BracketMatch;
