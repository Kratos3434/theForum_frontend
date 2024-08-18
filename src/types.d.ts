export interface User {
    id: number,
    email: string,
    password: string,
    verified: boolean,
    userProfile?: UserProfile,
    verificationToken?: VerificationToken,
    createdAt: string,
    updatedAt?: string
}

export interface UserProfile {
    id: number,
    firstName: string,
    lastName: string,
    user: User,
    userId: number,
    createdAt: string,
    updatedAt?: string
}

export interface VerificationToken {
    id: number,
    token: string,
    user: User,
    userId: number,
    createdAt: string,
    updatedAt?: string
}