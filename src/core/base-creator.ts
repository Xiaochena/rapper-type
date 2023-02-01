// import chalk from "chalk";

import { ICreatorExtr, Intf } from "../types";
import convert from "./convert";
import { creatInterfaceHelpStr } from "./tools";

/** 生成 Models 文件 */
export async function createModel(interfaces: Array<Intf>, extr: ICreatorExtr) {
  const itfStrs = await Promise.all(
    interfaces.map(async (itf) => {
      try {
        const [reqItf, resItf] = await convert(itf);
        return `
            ${creatInterfaceHelpStr(extr.rapUrl, itf)}
            '${itf.modelName}': {
              Req: ${reqItf
            .replace(/export (type|interface) Req =?/, "")
            .replace(/;/g, "")};
              Res: ${resItf
            .replace(/export (type|interface) Res =?/, "")
            .replace(/;/g, "")};
            }
          `;
      } catch (error) {
        // throw chalk.red(`接口：${extr.rapUrl}/repository/editor?id=${itf.repositoryId}&mod=${itf.moduleId}&itf=${itf.id}
        //   生成出错
        //   ${error}`);
      }
    })
  );
  return `
        export interface IModels {
            ${itfStrs.join("\n\n")}
        };
    `;
}

/** 生成 IResponseTypes */
export function createReqResTypes() {
  return `
  type TypeSelect<T extends "Req" | "Res"> = {
    [P in keyof IModels]: ResSelector<IModels[P][T]>
  }

  export type IRequestTypes = TypeSelect<'Req'>
  export type IResponseTypes = TypeSelect<'Res'>
`;
}

export async function createBaseRequestStr(
  interfaces: Array<Intf>,
  extr: ICreatorExtr
) {
  const modelStr = await createModel(interfaces, extr);
  return `
    ${modelStr}

    ${extr.resSelector}
  
    ${createReqResTypes()}
    `;
}
