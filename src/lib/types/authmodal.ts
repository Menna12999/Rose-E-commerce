export interface AuthModalProps {
    showModal: boolean;
    setShowModal: (value: boolean) => void;
    currentForm: "signin" | "signup" | "forgot-password"|"verify-password" |"set-password";
    setCurrentForm: (value: "signin" | "signup" | "forgot-password"|"verify-password"|"set-password") => void;
}  

export  type ForgetPasswordProps = Pick<AuthModalProps, "setShowModal" | "setCurrentForm">;
