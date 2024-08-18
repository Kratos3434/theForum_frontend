import User from "@/model/User";

class SignupController {
    public static signup(user: User) {
        console.log(user.getFirstName());
        if (!user.getFirstName()) {
            return { status: false, error: "First name is required" };
        }

        if (!user.getLastName()) {
            return { status: false, error: "Last name is required" };
        }

        if (!user.getEmail()) {
            return { status: false, error: "Email is required" };
        }

        if (!user.getPassword()) {
            return { status: false, error: "Password is required" };
        }

        if (!user.getPassword2()) {
            return { status: false, error: "Please confirm your password" };
        }

        if (user.getPassword() !== user.getPassword2()) {
            return { status: false, error: "Passwords do not match" };
        }
        return { status: true, error: "" };
    }
}

export default SignupController;