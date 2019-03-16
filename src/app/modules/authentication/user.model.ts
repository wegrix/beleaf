export interface User {
    uid: string;
    email: string;
    photoURL?: string;
    displayName?: string;
    password?: string;
    confirmPassword?: string;
    role?: string;
    joinedOn?: string;
    data?: {
        project?: ''
    };
}
