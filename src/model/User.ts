class User {
    private id: number;
    private email: string;
    private password: string;
    private password2: string;
    private firstName: string;
    private lastName: string;
    private verified: boolean;
    private createdAt: string;
    private updatedAt?: string;
    private verificationToken?: VerificationToken;

    constructor(id?: number, firstName?: string, lastName?: string, email?: string, verified?: boolean, createdAt?: string, updatedAt?: string) {
        this.id = id ?? 0;
        this.email = email ?? "";
        this.firstName = firstName ?? "";
        this.lastName = lastName ?? "";
        this.verified = verified ?? false;
        this.createdAt = createdAt ?? "";
        this.password = "";
        this.password2 = "";
        this.updatedAt = updatedAt;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getFirstName() {
        return this.firstName;
    }

    getLastName() {
        return this.lastName;
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

    setFirstName(firstName: string) {
        this.firstName = firstName;
    }

    setLastName(lastName: string) {
        this.lastName = lastName;
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
}

export default User;