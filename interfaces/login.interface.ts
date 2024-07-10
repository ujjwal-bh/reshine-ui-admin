export interface ITokens{
    access: {
        expires: string,
        token: string
    },
    refresh: {
        expires: string,
        token: string
    }
}

export interface IUser{
    active: boolean,
    id: string,
    isEmailVerified: boolean,
    phone: string
    role: string
}


export interface ILoginData{
    user: IUser,
    tokens: ITokens
}