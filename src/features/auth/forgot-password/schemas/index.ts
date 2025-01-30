import { z } from "zod";

export const forgotPasswordSchema = z.object({
  correo: z.string().email({ message: "Introduce un correo valido" }),
});
