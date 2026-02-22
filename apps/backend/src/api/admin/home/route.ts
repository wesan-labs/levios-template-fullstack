import type { LeviosRequest, LeviosResponse } from "@wesan-labs/levios-framework/http"

export async function GET(req: LeviosRequest, res: LeviosResponse) {
  res.json({
    message: "Levios Admin API",
    docs: "https://docs.leviosjs.com",
    path: "/admin/home",
  })
}
