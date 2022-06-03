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
import { Context } from "telegraf"
import { Update } from "telegraf/typings/core/types/typegram"
import TGBot from ".."
import IsInArray from "../../../Helpers/IsInArray"
import HandleMessage from "../HandleMessage"

function parseWorker(keys: string[], worker: HandleMessage, item: any) {
  if (IsInArray(keys, "admin")) {
    const AdminWorkflows = item.admin
    const ElseWorkflows = item.else
    worker.admin().then(e => {
      if (e) {
        for (const item of AdminWorkflows) {
          const keys = Object.keys(item)
          parseWorker(keys, worker, item)
          worker.cleanTrigger()
        }
      } else {
        for (const item of ElseWorkflows) {
          const keys = Object.keys(item)
          parseWorker(keys, worker, item)
          worker.cleanTrigger()
        }
      }
    })
  }
  if (IsInArray(keys, "random")) {
    worker.setRandom(Number(item.random))
  }
  if (IsInArray(keys, "re")) {
    worker.re(new RegExp(item.re))
  }
  if (IsInArray(keys, "includes")) {
    worker.includes(item.includes)
  }
  // arg 要在 cmd 之前
  if (IsInArray(keys, "arg")) {
    const args = Object.keys(item.arg)
    for (const arg of args) {
      worker.setArg(arg, item.arg[arg])
    }
  }
  if (IsInArray(keys, "cmd")) {
    worker.cmd(item.cmd)
  }
  if (IsInArray(keys, "reply")) {
    worker.reply(item.reply)
  }
  if (IsInArray(keys, "action")) {
    worker.action(TGBot.Actions[item.action])
  }
}
function ParseWorkflow(ctx: Context<Update>, workflows: any[]) {
  workflows.forEach(async (workflow: any) => {
    const worker: HandleMessage = new TGBot.HandleMessage(ctx)
    for (const item of workflow.workflow) {
      const keys = Object.keys(item)
      parseWorker(keys, worker, item)
      worker.cleanTrigger()
    }
    await worker.run()
  })
}
export default ParseWorkflow;