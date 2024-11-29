export class CreateUserDto {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  phoneNumber: string;
  confirmpassword:string;
  username:string
}

export class LoginUserDto {
  email: string;
  password: string;
}
