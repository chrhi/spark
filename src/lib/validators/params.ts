import * as z from "zod";

export const searchParamsSchema = z.object({
  page: z.string().default("1"),
  per_page: z.string().default("10"),
});

export const dashboardProductsSearchParamsSchema = searchParamsSchema.extend({
  sort: z.string().optional().default("createdAt.desc"),
  name: z.string().optional(),
  category: z.string().optional(),
  from: z.string().optional(),
  to: z.string().optional(),
});
