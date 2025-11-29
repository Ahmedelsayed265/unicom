import { z } from "zod";

export const loginSchema = z.object({
  phone: z.string().regex(/\d{7}$/, "errors.mobileFormat"),
  password: z.string().min(6, "errors.passwordMinLogin"),
});

export type LoginData = z.infer<typeof loginSchema>;
