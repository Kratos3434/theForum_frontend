export interface IUser {
    id: number,
    email: string,
    username: string
    password: string,
    verified: boolean,
    userProfile?: IUserProfile,
    verificationToken?: VerificationToken,
    createdAt: string,
    updatedAt?: string
}

export interface IUserProfile {
    id: number,
    userId: number,
    user: IUser,
    picture: string,
    coverPicture: string,
    createdAt: string,
    updatedAt?: string
}

export interface IVerificationToken {
    id: number,
    token: string,
    user: IUser,
    userId: number,
    createdAt: string,
    updatedAt?: string
}