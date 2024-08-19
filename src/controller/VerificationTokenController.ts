import { BASE_URL } from "@/helper";

class VerificationTokenController {
    public static async verify(token: string) {
        const res = await fetch(`${BASE_URL}/v1/verificationToken/verify/${token}`, {
            cache: 'no-store',
            method: 'POST'
        });

        const data = await res.json();
        return data;
    }
}

export default VerificationTokenController;