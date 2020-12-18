/**
 * 描述: 封装md5方法
 */
const crypto = require("crypto");

export default function md5(needOperationTxt): string {
  return crypto.createHash("md5").update(needOperationTxt).digest("hex");
}
