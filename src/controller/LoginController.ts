import { BASE_URL } from "@/helper";

class LoginController {
    public static async login(usernameOrEmail: string, password: string) {

        if (!usernameOrEmail) {
            return {status: false, error: "Username or email is required!"};
        }

        if (!password) {
            return {status: false, error: "Password is required"};
        }
    
        const res = await fetch(`${BASE_URL}/v1/user/login`, {
            cache: 'no-store',
            credentials: 'include',
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({usernameOrEmail, password})
        });

        const result = await res.json();

        return result
    }
}

export default LoginController;