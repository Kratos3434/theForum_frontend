'use client'
import { setJoinedDate } from "@/helper";
import User from "@/model/User";
import { IUserProfile } from "@/types";
import { useState } from "react";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
    userProfile: IUserProfile,
    children: React.ReactNode
}

const ProfileLayout = ({children, userProfile}: Props) => {
    const path = usePathname();
    console.log(path)
    const user = useState(new User(userProfile.id, userProfile.user.username, userProfile.user.email, userProfile.user.verified, userProfile.picture, userProfile.coverPicture, userProfile.createdAt, userProfile.updatedAt))[0];

    const links = [
        {
            name: "Posts",
            path: `/profile/${user.getUsername()}`
        },
        {
            name: "Posts",
            path: "/somewhere"
        }
    ];
    return (
        <div>
            <div className="tw-w-full tw-justify-center tw-flex">
                <div className="tw-max-w-[600px] tw-w-full tw-border-b-[1px] tw-border-black">
                    <div className="tw-relative">
                        <img src={user.getCoverPicture()} width={600} height={200} alt={user.getUsername()} />
                        <img src={user.getPicture()} width={150} height={150} alt={user.getUsername()} className="tw-absolute tw-bottom-[-60px] tw-left-[16px] tw-rounded-full tw-border-[5px] tw-border-white" />
                    </div>
                    <div className="tw-mt-[70px]">
                        <p className="tw-font-extrabold tw-text-[30px]">{user.getUsername()}</p>
                        <small className="tw-text-[15px] tw-font-semibold tw-items-center"><CalendarMonthIcon /> Joined {setJoinedDate(user.getCreatedAt())}</small>
                    </div>
                    <div className="tw-flex tw-justify-around tw-items-center tw-mt-[30px] tw-mb-[2px]">
                        {
                            links.map((e, idx) => {
                                return (
                                    <Link href={e.path} className={`tw-font-bold hover:tw-text-red-400 tw-w-full tw-text-center tw-border-b-[5px] tw-border-white ${e.path === path && "tw-border-red-400 tw-text-red-400"}`}>
                                        {e.name}
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            {children}
        </div>
    )
}

export default ProfileLayout;