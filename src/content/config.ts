// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content'
// 2. Define your collection(s)
const articleCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    lead: z.string().optional(),
    article: z.string(),
    article_number: z.number(),
    section_number: z.number(),
  }),
})
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  articles: articleCollection,
}
