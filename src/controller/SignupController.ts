import { BASE_URL } from "@/helper";
import User from "@/model/User";

class SignupController {
    public static async signup(user: User) {
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

        const res = await fetch(`${BASE_URL}/v1/user/signup`, {
            method: 'POST',
            cache: 'no-store',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: user.getEmail(),
                username: user.getUsername(),
                password: user.getPassword(),
                password2: user.getPassword2()
            })
        });
        console.log(res);
        return await res.json();
    }
}

export default SignupController;