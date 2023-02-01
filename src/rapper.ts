import { format } from "json-schema-to-typescript/dist/src/formatter";
import { DEFAULT_OPTIONS } from "json-schema-to-typescript";
import url from "url";
// import chalk from "chalk";
// import * as ora from "ora";

import { createBaseRequestStr } from "./base-creator";
import {
  creatHeadHelpStr,
  getInterfaces,
  getIntfWithModelName,
  uniqueItfs,
} from "./tools";
import { Intf, IUrlMapper, RAPPER_TYPE } from "./types";
import { getMd5, writeFile } from "./utils";
import * as packageJson from "../package.json"

export interface IRapper {
  /** 必填，redux、normal 等 */
  type: RAPPER_TYPE;
  /** 必填，api仓库地址，从仓库的数据按钮可以获得 */
  apiUrl: string;
  /** 选填，rap平台前端地址，默认是 http://rap2.taobao.org */
  rapUrl?: string;
  /** 选填，生成出 rapper 的文件夹地址, 默认 ./src/rapper */
  rapperPath?: string;
  /** 选填，url映射，可用来将复杂的url映射为简单的url */
  urlMapper?: IUrlMapper;
  /** 选填，输出模板代码的格式 */
  codeStyle?: {};
  /** 选填，类型变换 type Selector<T> = T */
  resSelector?: string;
}

async function rapper({
  type = "normal",
  rapUrl = "http://rap2.duomai.cn",
  apiUrl = "http://rap2.duomai.cn:38080/repository/get?id=32&token=9EkIocIKn1AUXzKC1zUANOEBRyqmbMWl",
  rapperPath = "./src/rapper",
  urlMapper = (t) => t,
  resSelector = "type ResSelector<T> = T",
}: IRapper) {
  const rapperVersion: string = packageJson.version;
  // console.log(`当前rapper版本: ${chalk.grey(rapperVersion)}`);
  // const spinner = ora(chalk.grey("rapper: 开始检查版本"));
  /** 参数校验 */
  if (!type) {
    // return new Promise(() =>
    // spinner.fail(chalk.red("rapper: 请配置 type 参数"))
    // );
  } else if (!["normal", "redux"].includes(type)) {
    // return new Promise(() =>
    // spinner.fail(chalk.red("rapper: type 参数配置错误，请重新配置"))
    // );
  }
  const apiParams = url.parse(apiUrl, true).query;

  const projectId = parseInt(
    Array.isArray(apiParams.id) ? apiParams.id[0] : apiParams.id
  );

  /** 输出文件集合 */
  let outputFiles = [];

  /** 所有接口集合 */
  let interfaces: Array<Intf> = await getInterfaces(apiUrl);
  interfaces = uniqueItfs(getIntfWithModelName(rapUrl, interfaces, urlMapper));

  try {
    /** 生成基础的 request.ts 类型声明 */
    let requestStr = "";

    requestStr = await createBaseRequestStr(interfaces, {
      rapUrl,
      resSelector,
    });
    requestStr = `
    ${creatHeadHelpStr(rapUrl, projectId, rapperVersion)}
    ${requestStr}
  `;

    outputFiles.push({
      path: `${rapperPath}/request.ts`,
      content: format(requestStr, DEFAULT_OPTIONS),
    });

    /** 生成的模板文件第一行增加MD5 */
    outputFiles = outputFiles.map((item) => ({
      ...item,
      content: `/* md5: ${getMd5(item.content)} */\n${item.content}`,
    }));
    Promise.all(
      outputFiles.map(({ path, content }) => writeFile(path, content))
    );
  } catch (error) { }
}

export default rapper;
