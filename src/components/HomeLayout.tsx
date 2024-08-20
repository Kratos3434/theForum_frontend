'use client'

import { useAtomValue } from "jotai";
import Login from "./Login";
import NavBar from "./NavBar"
import { isSignupVisibleAtom, isVisibleAtom } from "@/atoms";
import Signup from "./Signup";

interface Props {
    children: React.ReactNode
}

const HomeLayout = ({ children }: Props) => {
    const isVisible = useAtomValue(isVisibleAtom);
    const isSignupVisible = useAtomValue(isSignupVisibleAtom);

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