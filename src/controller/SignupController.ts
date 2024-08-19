import User from "@/model/User";

class SignupController {
    public static signup(user: User) {
        if (!user.getEmail()) {
            return { status: false, error: "Email is required" };
        }

        if (!user.getUsername()) {
            return { status: false, error: "Username is required" };
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