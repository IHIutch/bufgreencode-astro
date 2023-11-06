import { createEnv } from '@t3-oss/env-core'
import { z } from 'zod'

export const env = createEnv({
  // server: {
  //   DATABASE_URL: z.string().url(),
  //   OPEN_AI_API_KEY: z.string().min(1),
  // },
  clientPrefix: 'PUBLIC_',
  client: {
    PUBLIC_ALGOLIA_APP_ID: z.string(),
    PUBLIC_ALGOLIA_INDEX_NAME: z.string(),
    PUBLIC_ALGOLIA_API_KEY: z.string(),
  },
  runtimeEnv: import.meta.env,
  emptyStringAsUndefined: true,
})
