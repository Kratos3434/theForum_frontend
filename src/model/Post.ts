import User from "./User";

class Post {
    private id: number;
    private title: string;
    private descripotion?: string;
    private media?: string;
    private author: User;
    private createdAt: string;
    private updatedAt?: string;

    constructor(id?:number, title?:string, description?: string, media?: string, author?: User, createdAt?: string, updatedAt?: string) {
        this.id = id ?? 0;
        this.title = title ?? "";
        this.descripotion = description;
        this.media = media;
        this.author = author ?? new User();
        this.createdAt = createdAt ?? "";
        this.updatedAt = updatedAt;
    }
}