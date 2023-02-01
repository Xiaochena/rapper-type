import * as crypto from "crypto";
import * as path from "path";
import { mkdirp } from "mkdirp";
import * as fs from "fs";

const packageJson = require("../package.json");
/** 获取当前包名 */
export function getPackageName() {
  return packageJson.name;
}

/** 获取文件md5 */
export function getMd5(fileContent: string) {
  const hash = crypto.createHash("md5");
  hash.update(fileContent);
  return hash.digest("hex");
}

export function writeFile(filepath: string, contents: string) {
  return new Promise((resolve, reject) => {
    mkdirp(path.dirname(filepath)).then(() => {
      fs.writeFile(filepath, contents, (err) => {
        if (err) return reject(`写入文件失败: ${filepath}, ${err}`);
        resolve("写入文件成功");
      });
    });
  });
}
