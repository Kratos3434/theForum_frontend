'use client'

import { useAtomValue } from "jotai";
import Login from "./Login";
import NavBar from "./NavBar"
import { currentUserAtom } from "@/atoms";
import Signup from "./Signup";
import User from "@/model/User";
import { useHydrateAtoms } from "jotai/utils";
import { IUserProfile } from '@/types';

interface Props {
    children: React.ReactNode,
    currentUser: IUserProfile | null
}

const HomeLayout = ({ children, currentUser }: Props) => {
    useHydrateAtoms([[currentUserAtom, currentUser ? new User(currentUser?.userId, currentUser?.user.username, currentUser?.user.email, currentUser?.user.verified, currentUser?.picture, currentUser?.coverPicture, currentUser?.createdAt, currentUser?.updatedAt) : null]]);

    return (
        <>
            <NavBar />
            {children}
        </>
    )
}

export default HomeLayout;