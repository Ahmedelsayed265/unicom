import { z } from "zod";

export const loginSchema = z.object({
  phone: z.string().regex(/\d{7}$/, "errors.mobileFormat"),
  password: z.string().min(6, "errors.passwordMinLogin"),
});

export type LoginData = z.infer<typeof loginSchema>;

// Step 1: Market Selection Schema
export const step1Schema = z.object({
  market_id: z.string().min(1, "يرجى اختيار السوق"),
  area: z.string().min(1, "يرجى اختيار المنطقة"),
});

// Step 2: Documents Schema
export const step2Schema = z.object({
  has_commercial_record: z.enum(["yes", "no"]),
  commercial_record: z
    .instanceof(File)
    .optional()
    .refine(
      (file) => !file || file.size <= 5000000,
      "حجم الملف يجب أن يكون أقل من 5MB"
    ),
  freelance_id: z.string().optional(),
  freelance_national_id: z.string().optional(),
  freelance_image: z
    .instanceof(File)
    .optional()
    .refine(
      (file) => !file || file.size <= 5000000,
      "حجم الملف يجب أن يكون أقل من 5MB"
    ),
});

// Step 3: Confirmation Schema
export const step3Schema = z.object({
  name: z.string().min(2, "الاسم يجب أن يكون حرفين على الأقل"),
  gender: z.enum(["male", "female"]),
  market_type_id: z.string().min(1, "يرجى اختيار نوع المحل"),
  product_type_id: z.string().min(1, "يرجى اختيار نوع المنتج"),
  area: z.string().min(1, "يرجى إدخال المساحة التقريبية"),
});

// Combined Schema for final submission
export const sellerRegistrationSchema = step1Schema
  .merge(step2Schema)
  .merge(step3Schema);

export type Step1FormData = z.infer<typeof step1Schema>;
export type Step2FormData = z.infer<typeof step2Schema>;
export type Step3FormData = z.infer<typeof step3Schema>;
export type SellerRegistrationData = z.infer<typeof sellerRegistrationSchema>;
