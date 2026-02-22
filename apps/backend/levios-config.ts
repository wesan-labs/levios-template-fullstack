import { loadEnv, defineConfig } from "@wesan-labs/levios-framework/utils"

loadEnv(process.env.NODE_ENV || "development", process.cwd())

export default defineConfig({
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL,
    databaseDriverOptions: process.env.DATABASE_URL?.includes("supabase")
      ? { ssl: { rejectUnauthorized: false } }
      : undefined,
    http: {
      storeCors: process.env.STORE_CORS!,
      adminCors: process.env.ADMIN_CORS!,
      authCors: process.env.AUTH_CORS!,
      jwtSecret: process.env.JWT_SECRET || "supersecret",
      cookieSecret: process.env.COOKIE_SECRET || "supersecret",
    },
    redisUrl: process.env.REDIS_URL,
    workerMode: process.env.LEVIOS_WORKER_MODE as
      | "shared"
      | "worker"
      | "server"
      | undefined,
  },
  modules: [
    ...(process.env.SUPABASE_URL
      ? [
          {
            resolve: "@wesan-labs/levios-file-supabase",
            options: {
              supabaseUrl: process.env.SUPABASE_URL,
              supabaseKey: process.env.SUPABASE_SERVICE_KEY,
              bucket: "uploads",
            },
          },
        ]
      : []),
    ...(process.env.WHATSAPP_ACCESS_TOKEN
      ? [
          {
            resolve: "@leviosjs/levios/notification",
            options: {
              providers: [
                {
                  resolve: "@wesan-labs/levios-provider-whatsapp-business",
                  id: "whatsapp-business",
                  options: {
                    channels: ["whatsapp"],
                    access_token: process.env.WHATSAPP_ACCESS_TOKEN,
                    phone_number_id: process.env.WHATSAPP_PHONE_NUMBER_ID,
                    app_secret: process.env.WHATSAPP_APP_SECRET,
                    verify_token: process.env.WHATSAPP_VERIFY_TOKEN,
                  },
                },
              ],
            },
          },
        ]
      : []),
  ],
})
