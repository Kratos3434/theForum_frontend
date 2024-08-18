
class VerificationToken {
    private id: number;
    private token: string;
    private userId: number | null;
    private user: User | null;
    private createdAt: string;
    private updatedAt?: string;

    constructor(id: number, token: string, createdAt: string, updatedAt?: string) {
        this.id = id;
        this.token = token;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.userId = null;
        this.user = null;
    }

    getId() {
        return this.id;
    }

    getToken() {
        return this.token;
    }

    getUserId() {
        return this.userId;
    }

    getUser() {
        return this.user;
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

    setToken(token: string) {
        this.token = token;
    }

    setUserId(userId: number) {
        this.userId = userId;
    }

    setUser(user: User) {
        this.user = user;
    }
}