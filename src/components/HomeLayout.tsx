'use client'

import { useAtomValue } from "jotai";
import Login from "./Login";
import NavBar from "./NavBar"
import { isVisibleAtom } from "@/atoms";

interface Props {
    children: React.ReactNode
}

const HomeLayout = ({ children }: Props) => {
    const isVisible = useAtomValue(isVisibleAtom);

    return (
        <>
            <NavBar />
            <Login isVisible={isVisible} />
            {children}
        </>
    )
}

export default HomeLayout;