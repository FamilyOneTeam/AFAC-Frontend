import { z } from "zod";
import { createUserSchema } from "../schemas";

export const userTpe = {
    ADMIN: "Admin",
    FAMILIA: "Familia de acogida",
};

export type userType = typeof userTpe[keyof typeof userTpe];

export type createUserSchemaType = z.infer<typeof createUserSchema>;