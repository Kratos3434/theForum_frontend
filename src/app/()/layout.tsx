import HomeLayout from "@/components/HomeLayout"
import UserController from "@/controller/UserController";
import { BASE_URL } from "@/helper";
import User from "@/model/User";
import  {cookies} from 'next/headers';

interface Props {
    children: React.ReactNode
}

const getCurrentUser = async (token: string) => {
    console.log("Fetching again");
    //const result = await UserController.getCurrent(token);
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
    const result = await res.json();
    if (!result.status) return null;

    return result.data;
}

const LayoutHome = async ({children}: Props) => {
    const cookie = cookies();
    const token = cookie.get("token")?.value;

    const currentUser = token ? await getCurrentUser(token) : null;

    return (
        <HomeLayout currentUser={currentUser}>
            <div className="tw-mt-[60px]">
                {children}
            </div>
        </HomeLayout>
    )
}

export default LayoutHome;