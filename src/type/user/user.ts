export interface UserType {
    code : string
}

export interface LoginProps {
    code : string | null;
    provider : string | null;
}