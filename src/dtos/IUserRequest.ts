export default interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
  password: string;
}