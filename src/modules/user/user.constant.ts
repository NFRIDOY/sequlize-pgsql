export const UserStatus = {
    PROGRESS: 'in-progress',
    ACTIVE: 'active',
    BLOCKED: 'blocked',
} as const;

export const UserRole = {
    OWNER: 'owner',
    SUPER_ADMIN: 'super-admin',
    SUPER_USER: 'super-user',
    ADMIN: 'admin',
    MODERATOR: 'moderator',
    USER: 'user',
    READER: 'reader',
    GUEST: 'guest',
    SUBSCRIBER: 'subscriber',
} as const;

// Union type of all role values
export type UserRoleList = typeof UserRole[keyof typeof UserRole];

// Union type of all role keys
export type UserRoleUnion = keyof typeof UserRole;

// Union type of all role values
export type UserStatusList = typeof UserStatus[keyof typeof UserStatus];

// Union type of all role keys
export type UserStatusUnion = keyof typeof UserStatus;