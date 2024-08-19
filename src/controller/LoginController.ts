
class LoginController {
    public static login(usernameOrEmail: string, password: string) {
        if (!usernameOrEmail) {
            return {status: false, error: "Username or email is required"};
        }

        if (!password) {
            return {status: false, error: "Password is required"};
        }

        return {status: true, error: ""};
    }
}