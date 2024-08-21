'use client'

import { useAtomValue } from "jotai";
import Login from "./Login";
import NavBar from "./NavBar"
import { currentUserAtom, isSignupVisibleAtom, isVisibleAtom } from "@/atoms";
import Signup from "./Signup";
import User from "@/model/User";
import { useHydrateAtoms } from "jotai/utils";
import { IUserProfile } from '@/types';

interface Props {
    children: React.ReactNode,
    currentUser: IUserProfile | null
}

const HomeLayout = ({ children, currentUser }: Props) => {
    const isVisible = useAtomValue(isVisibleAtom);
    const isSignupVisible = useAtomValue(isSignupVisibleAtom);
    //new User(result.currentUser?.userId, result.currentUser?.user.username, result.currentUser?.user.email, result.currentUser?.user.verified, result.currentUser?.picture, result.currentUser?.coverPicture, result.currentUser?.createdAt, result.currentUser?.updatedAt)
    useHydrateAtoms([[currentUserAtom, currentUser ? new User(currentUser?.userId, currentUser?.user.username, currentUser?.user.email, currentUser?.user.verified, currentUser?.picture, currentUser?.coverPicture, currentUser?.createdAt, currentUser?.updatedAt) : null]]);

    return (
        <>
            {
                (isVisible || isSignupVisible) &&
                <style jsx global >
                {
                    `
                    html, body {
                        overflow: hidden;
                    }
                    `
                }
                </style>
            }
            <NavBar />
            { isVisible && <Login /> }
            { isSignupVisible && <Signup /> }
            {children}
        </>
    )
}

export default HomeLayout;