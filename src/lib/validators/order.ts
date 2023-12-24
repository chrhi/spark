"use client";

import * as z from "zod";

export const orderSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  phoneNumber: z.string(),
  email: z.string().array(),
  willaya: z.string(),
  baladia: z.string(),
  street: z.string(),
});
