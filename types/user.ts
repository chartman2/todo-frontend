export interface IUserResponse {
  "token": string,
  "refresh_token": string,
  "expires_in": number,
  "token_type": string,
  "resource_owner": {
    "id": number,
    "email": string,
    "created_at": string,
    "updated_at": string
  }
}

export interface UserData {
  id: number;
  email: string;
  created_at: Date | string;
  updated_at: Date | string;
}