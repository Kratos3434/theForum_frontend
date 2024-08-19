import VerificationToken from "./VerificationToken";

class User {
    private id: number;
    private email: string;
    private username: string;
    private password: string;
    private password2: string;
    private verified: boolean;
    private createdAt: string;
    private updatedAt?: string;
    private verificationToken?: VerificationToken;

    constructor(id?: number, username?: string, email?: string, verified?: boolean, createdAt?: string, updatedAt?: string) {
        this.id = id ?? 0;
        this.email = email ?? "";
        this.verified = verified ?? false;
        this.createdAt = createdAt ?? "";
        this.password = "";
        this.password2 = "";
        this.updatedAt = updatedAt;
        this.username = username ?? "";
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    isVerified() {
        return this.verified;
    }

    getCreatedAt() {
        return this.createdAt;
    }

    getUpdatedAt() {
        return this.updatedAt;
    }

    setId(id: number) {
        this.id = id;
    }

    setEmail(email: string) {
        this.email = email;
    }

    setIsVerified(verified: boolean) {
        this.verified = verified;
    }

    setCreatedAt(createdAt: string) {
        this.createdAt = createdAt;
    }

    setUpdatedAt(updatedAt?: string) {
        this.updatedAt = updatedAt;
    }

    setVerificationToken(verificationToken: VerificationToken) {
        this.verificationToken = verificationToken;
    }

    getVerificationToken() {
        return this.verificationToken;
    }

    getPassword() {
        return this.password;
    }

    setPassword(password: string) {
        this.password = password;
    }

    getPassword2() {
        return this.password2;
    }

    setPassword2(password2: string) {
        this.password2 = password2;
    } 

    getUsername() {
        return this.username;
    }

    setUsername(username: string) {
        this.username = username;
    }
}

export default User;