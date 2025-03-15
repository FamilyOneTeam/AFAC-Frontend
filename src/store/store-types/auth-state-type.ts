import { userDataType } from "./user-type"

export type AuthStateType = {
    user: userDataType | null;
    setUser: (userData: userDataType) => void;
    logout: () => void;
};
