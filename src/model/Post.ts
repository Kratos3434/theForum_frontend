import User from "./User";

class Post {
    private id: number;
    private title: string;
    private description?: string;
    private media?: string;
    private author: User;
    private createdAt: string;
    private updatedAt?: string;

    constructor(id?:number, title?:string, description?: string, media?: string, author?: User, createdAt?: string, updatedAt?: string) {
        this.id = id ?? 0;
        this.title = title ?? "";
        this.description = description;
        this.media = media;
        this.author = author ?? new User();
        this.createdAt = createdAt ?? "";
        this.updatedAt = updatedAt;
    }

    public getId() {
        return this.id;
    }

    public getTitle() {
        return this.title;
    }

    public getDescription() {
        return this.description;
    }

    public getMedia() {
        return this.media;
    }

    public getAuthor() {
        return this.author;
    }

    public getCreatedAt() {
        return this.createdAt;
    }

    public getUpdatedAt() {
        return this.updatedAt;
    }

    public setId(id: number) {
        this.id = id;
    }

    public setTitle(title: string) {
        this.title = title;
    }

    public setDescription(description: string) {
        this.description = description;
    }

    public setMedia(media: string) {
        this.media = media;
    }

    public setAuthor(author: User) {
        this.author = author;
    }

    public setCreatedAt(createdAt: string) {
        this.createdAt = createdAt;
    }

    public setUpdatedAt(updatedAt?: string) {
        this.updatedAt = updatedAt;
    }
}

export default Post;