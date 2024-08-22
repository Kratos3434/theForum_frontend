import { BASE_URL } from "@/helper";

class UserController {
    public static async verify(token: string) {
        const res = await fetch(`${BASE_URL}/v1/user/verify/${token}`, {
            cache: 'no-store',
            method: 'POST',
        });

        const response = await res.json();

        return response;

    }

    public static async getCurrent(token: string) {
        const res = await fetch(`${BASE_URL}/v1/user/current`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            next: {
                tags: ['currentUser']
            }
        });

        return await res.json();
    }

    public static async getByUsername(username: string) {
        const res = await fetch(`${BASE_URL}/v1/user/profile/${username}`, {
            method: 'GET',
            cache: 'no-cache'
        });

        return await res.json();
    }
}

export default UserController;