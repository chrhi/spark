"use client";

import * as z from "zod";

export const shippingSchema = z.object({
  bgMyOwn: z.boolean(),
  company: z.string().min(2).max(50),
});
