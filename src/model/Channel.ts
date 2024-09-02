
class Channel {
    private id: number;
    private name: string;
    private description?: string;
    private picture: string;
    private coverPicture: string;
    private createdAt: string;
    private updatedAt?: string;

    constructor(id?: number, name?: string, description?: string, picture?: string, coverPicture?: string, createdAt?: string, updatedAt?: string) {
        this.id = id ?? 0;
        this.name = name ?? "";
        this.picture = picture ?? "";
        this.coverPicture = coverPicture ?? "";
        this.createdAt = createdAt ?? "";
        this.updatedAt = updatedAt;
    }

    public getId() {
        return this.id;
    }

    public getName() {
        return this.name;
    }

    public getDescription() {
        return this.description;
    }

    public getPicture() {
        return this.picture;
    }

    public getCoverPicture() {
        return this.coverPicture;
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

    public setName(name: string) {
        this.name = name;
    }

    public setDescription(description: string) {
        this.description = description;
    }

    public setPicture(picture: string) {
        this.picture = picture;
    }

    public setCoverPicture(coverPicture: string) {
        this.coverPicture = coverPicture;
    }

    public setCreatedAt(createdAt: string) {
        this.createdAt = createdAt;
    }

    public setUpdatedAt(updatedAt: string) {
        this.updatedAt = updatedAt;
    }
}

export default Channel;