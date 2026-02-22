import type { LeviosRequest, LeviosResponse } from "@wesan-labs/levios-framework/http"

export async function GET(req: LeviosRequest, res: LeviosResponse) {
  res.json({
    message: "Levios Store API",
    docs: "https://docs.leviosjs.com",
    path: "/store/home",
  })
}
