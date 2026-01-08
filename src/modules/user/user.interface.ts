import { UserRoleUnion, UserStatusUnion } from "./user.constant";

export interface IUser {
    id: number;
    name: string;
    email: string;
    password?: string;
    phone?: string;
    role: UserRoleUnion;
    status: UserStatusUnion;
    address?: string;
    image?: string;
    description?: string;
}
