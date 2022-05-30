import Setting from "../../../../Helpers/Setting";
import HandleMessage from "../../HandleMessage";

const ReplyMaster = async (that: HandleMessage) => {
  const ctx = that.ctx
  const set = await Setting("TelegrafBot")
  const ADMIN_NAME = set.ADMIN_NAME
  ctx.reply(`@${ADMIN_NAME}`)
};

export default ReplyMaster;
