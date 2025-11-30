import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().min(2, "errors.nameRequired"), 
  email: z.string().email("errors.invalidEmail"), 
  phone: z.string().regex(/^\d{7,15}$/, "errors.mobileFormat"), 
  password: z.string().min(6, "errors.passwordMinLogin"),
});

export type RegisterData = z.infer<typeof registerSchema>;
