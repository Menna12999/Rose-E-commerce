declare type User ={
    firstName: string,
    lastName: string,
    email: string,
    gender: string,
    phone: string,
    photo?:string,
    role: string,
    wishlist: string[],
    addresses: string[],   
}&DataBaseField



declare type LoginResponse ={
token:string;
user:User;
}
declare type RegisterFields = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    rePassword: string;
    phone: string;
    gender: "male" | "female";
  };

  declare type ForgetPasswordField = {
    email: string;
  };
  
  declare type SuccessfulForgetPasswordResponse = {
    message:string,
    info:string
  };
  declare type ErrorForgetPasswordResponse={
    error:string,
    }
    declare type ForgetPasswordResponse = SuccessfulResponse | ErrorForgetPasswordResponse;

    declare type VerifyOTPFiled = {
        resetCode: string;
      };
      declare type SuccessfulVerifyOTPResponse = {
        status:string,
      };
      declare type ErrorVerifyOTPResponse={
        error:string,
        }
        declare type VerifyOTPResponse = SuccessfulVerifyOTPResponse | ErrorVerifyOTPResponse;

        declare type SetPasswordFeilds = {
          email: string;
          newPassword: string;
        };
        declare type SuccessfulSetPasswordResponse = {
          message:string,
          token:string,
        };
        declare type ErrorSetPasswordResponse={
          error:string,
          }
          declare type SetPasswordResponse = SuccessfulSetPasswordResponse | ErrorSetPasswordResponse;

        

        