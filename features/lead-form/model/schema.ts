import { z } from "zod";

export const leadFormSchema = z.object({
  category: z.string().min(1, "categoryRequired"),
  budget: z.string().optional(),
  region: z.string().min(1, "regionRequired"),
  duration: z.string().optional(),
  name: z.string().min(2, "nameRequired"),
  phone: z
    .string()
    .min(9, "phoneInvalid")
    .regex(/^[+0-9 ()-]+$/, "phoneInvalid"),
  callTime: z.string().optional(),
});

export type LeadFormData = z.infer<typeof leadFormSchema>;

export const leadFormStepFields: Record<1 | 2 | 3, (keyof LeadFormData)[]> = {
  1: ["category"],
  2: ["region", "budget", "duration"],
  3: ["name", "phone", "callTime"],
};
