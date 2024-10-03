export interface UserType {
  name: string;
  id: string;
}

export interface LoginProps {
  code: string | null;
  provider: string | null;
}
