import { getLocaleHeader } from "@lib/util/get-locale-header"
import Levios, { FetchArgs, FetchInput } from "@wesan-labs/levios-js-sdk"

// Defaults to standard port for Levios server
let LEVIOS_BACKEND_URL = "http://localhost:9000"

if (process.env.NEXT_PUBLIC_LEVIOS_BACKEND_URL) {
  LEVIOS_BACKEND_URL = process.env.NEXT_PUBLIC_LEVIOS_BACKEND_URL
}

export const sdk = new Levios({
  baseUrl: LEVIOS_BACKEND_URL,
  debug: process.env.NODE_ENV === "development",
  publishableKey: process.env.NEXT_PUBLIC_LEVIOS_PUBLISHABLE_KEY,
})

const originalFetch = sdk.client.fetch.bind(sdk.client)

sdk.client.fetch = async <T>(
  input: FetchInput,
  init?: FetchArgs
): Promise<T> => {
  const headers = init?.headers ?? {}
  let localeHeader: Record<string, string | null> | undefined
  try {
    localeHeader = await getLocaleHeader()
    headers["x-levios-locale"] ??= localeHeader["x-levios-locale"]
  } catch {}

  const newHeaders = {
    ...localeHeader,
    ...headers,
  }
  init = {
    ...init,
    headers: newHeaders,
  }
  return originalFetch(input, init)
}
