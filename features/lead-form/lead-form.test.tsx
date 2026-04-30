import { describe, expect, it } from "vitest";
import { leadFormSchema } from "./model/schema";

describe("lead form schema", () => {
  it("rejects empty name", () => {
    const result = leadFormSchema.safeParse({
      category: "beton-zavodlari",
      region: "tashkent-city",
      name: "",
      phone: "+998991234567",
    });
    expect(result.success).toBe(false);
  });

  it("rejects bad phone", () => {
    const result = leadFormSchema.safeParse({
      category: "beton-zavodlari",
      region: "tashkent-city",
      name: "Akmal",
      phone: "abc",
    });
    expect(result.success).toBe(false);
  });

  it("accepts valid input", () => {
    const result = leadFormSchema.safeParse({
      category: "beton-zavodlari",
      region: "tashkent-city",
      name: "Akmal",
      phone: "+998 99 491 28 30",
    });
    expect(result.success).toBe(true);
  });
});
