import { LeviosRequest, LeviosResponse } from "@wesan-labs/levios-framework/http";

export async function GET(
  req: LeviosRequest,
  res: LeviosResponse
) {
  res.sendStatus(200);
}
