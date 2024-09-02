'use client'

import { useAtomValue } from "jotai";
import NavBar from "./NavBar"
import { createChannelAtom, currentUserAtom } from "@/atoms";
import User from "@/model/User";
import { useHydrateAtoms } from "jotai/utils";
import { IUserProfile } from '@/types';
import CreateChannel from "./CreateChannel";

interface Props {
    children: React.ReactNode,
    currentUser: IUserProfile | null
}

const HomeLayout = ({ children, currentUser }: Props) => {
    useHydrateAtoms([[currentUserAtom, currentUser ? new User(currentUser?.userId, currentUser?.user.username, currentUser?.user.email, currentUser?.user.verified, currentUser?.picture, currentUser?.coverPicture, currentUser?.createdAt, currentUser?.updatedAt) : null]]);
    const createChannel = useAtomValue(createChannelAtom);

    return (
        <>
            <NavBar />
            {children}
            {createChannel && <CreateChannel />}
        </>
    )
}

export default HomeLayout;