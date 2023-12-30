import * as z from "zod";

export const collectionSchema = z.object({
  name: z.string(),
  description: z.string(),
  products: z.string().array(),
  status: z.string(),
});
