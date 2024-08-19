import { BASE_URL } from "@/helper";

class UserController {
    public static async verify(token: string) {
        const res = await fetch(`${BASE_URL}/v1/user/verify/${token}`, {
            cache: 'no-store',
            method: 'POST'
        });

        const response = await res.json();
        
        return response;

    }
}

export default UserController;