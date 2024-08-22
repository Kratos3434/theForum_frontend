'use client'
import { setJoinedDate } from "@/helper";
import User from "@/model/User";
import { IUserProfile } from "@/types";
import { useState } from "react";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

interface Props {
    userProfile: IUserProfile
}

const UserProfile = ({userProfile}: Props) => {
    const user = useState(new User(userProfile.id, userProfile.user.username, userProfile.user.email, userProfile.user.verified, userProfile.picture, userProfile.coverPicture, userProfile.createdAt, userProfile.updatedAt))[0];

    return (
        <div className="tw-my-[20px]">
            <div className="tw-w-full tw-justify-center tw-flex">
                <div className="tw-max-w-[600px] tw-w-full">
                    <h1>{user.getUsername()}</h1>
                </div>
            </div>
        </div>
    )
}

export default UserProfile;