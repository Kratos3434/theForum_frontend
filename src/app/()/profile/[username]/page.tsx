import UserProfile from "@/components/UserProfile";
import UserController from "@/controller/UserController";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const generateMetadata = async ({params}: any) => {
    return {
        title: params.username
    }
}

const getUserProfile = async (username: string) => {
    const user = await UserController.getByUsername(username);
    if (!user.status) {
        return notFound();
    }

    return user;
}

const ProfilePage = async ({params}: any) => {
    const user = await getUserProfile(params.username);

    return <UserProfile userProfile={user.data} />
}

export default ProfilePage;