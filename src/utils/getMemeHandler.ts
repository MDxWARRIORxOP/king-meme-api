import { getMeme } from "./getMeme";
import { Res } from "./res";

export function getMemeHandler(
  type: "new" | "top" | "hot" | "random" | "controversial" | "rising"
) {
  return async (request: any) => {
    const sfw = request.query.sfw == "true" ? true : false;
    const meme = await getMeme(sfw, type);
    return Res(meme);
  };
}
