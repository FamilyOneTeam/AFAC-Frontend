import { z } from "zod";

export const createUserSchema = z.object({
    nombre: z.string()
    .min(3, "")
    .max(50, "")
    .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, ""),
    tipo_usuario: z.enum([
        "Admin",
        "Familia de acogida"
    ]),
    correo: z.string().email({ message: "" }),
    contrasena: z
    .string()
    .min(8, {
      message:
        "",
    })
    .max(25, {
      message: "",
    })
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-_@#$%^&*]).{8,}$/, {
      message:
        "",
    }),
});
