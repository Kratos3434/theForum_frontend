'use client'
import { currentUserAtom, isVisibleAtom } from "@/atoms";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import Link from "next/link";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { useState } from "react";
import { revalidateTag } from "next/cache";

// interface Props {
//     currentUser: User | null
// }

const NavBar = () => {
    const setIsVisible = useSetAtom(isVisibleAtom);
    const [currentUser, setCurrentUser] = useAtom(currentUserAtom);
    const [expand, setExpand] = useState(false);

    const handleLogout = async (e: any) => {
        const res = await fetch('/api/logout');
        const result = await res.json();
        if (result.status) {
            console.log("Logged out");
            setCurrentUser(null);
        } else {
            console.log("Logout wrong")
        }
    }

    return (
        <nav className="tw-top-0 tw-left-0 tw-fixed tw-w-full tw-h-[60px] tw-shadow-xl tw-bg-white tw-px-[16px] tw-py-[8px]">
            <div className="tw-w-full tw-flex tw-items-center tw-h-full tw-relative">
                <Link className="tw-font-extrabold tw-text-[30px] tw-text-red-400 tw-absolute tw-left-0" href="/">
                    The Forum
                </Link>
                <span className="tw-flex tw-justify-center tw-items-center tw-w-full">
                    <span className="tw-w-[500px] tw-bg-gray-300 tw-rounded-full tw-py-[8px] tw-px-[16px]">
                        <input placeholder="Search" className="tw-w-full tw-outline-none tw-bg-gray-300" />
                    </span>
                </span>
                {
                    currentUser ?
                        (
                            <span className="tw-absolute tw-right-0">
                                <div className="tw-relative">
                                    <div className="tw-flex tw-items-center tw-gap-2 hover:tw-brightness-90 tw-rounded-full tw-bg-red-400 tw-py-[8px] tw-px-[16px] tw-cursor-pointer" 
                                    onClick={e => setExpand(!expand)}>
                                        <img src={currentUser.getPicture()} width={30} height={30} alt={currentUser.getUsername()} className="tw-rounded-full" />
                                        <span className="tw-text-white">
                                            Hi, <b className="tw-text-black">{currentUser.getUsername()}</b>
                                        </span>
                                        {!expand ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
                                    </div>
                                    {/** Expand menu */}
                                    {
                                        expand &&
                                        (
                                            <div className="tw-absolute tw-top-[50px] tw-right-0">
                                                <div className="tw-rounded-xl tw-bg-white tw-shadow-lg tw-p-[8px] tw-py-[16px] tw-w-[200px] tw-flex tw-gap-2 tw-flex-col">
                                                    <Link className="tw-w-full tw-text-center tw-rounded-full tw-bg-red-400 tw-py-[8px] tw-px-[16px] tw-cursor-pointer hover:tw-brightness-90 tw-flex tw-gap-2 tw-items-center" href="/">
                                                        <img src={currentUser.getPicture()} width={30} height={30} alt={currentUser.getUsername()} className="tw-rounded-full" />
                                                        <span className="tw-font-bold tw-text-white">
                                                            Profile
                                                        </span>
                                                    </Link>
                                                    <span className="tw-w-full tw-text-center tw-rounded-full tw-bg-red-400 tw-py-[8px] tw-px-[16px] tw-cursor-pointer hover:tw-brightness-90"
                                                        onClick={handleLogout}>
                                                        <span className="tw-font-bold tw-text-white">
                                                            Log out
                                                        </span>
                                                    </span>
                                                </div>
                                            </div>
                                        )
                                    }
                                    {/** */}
                                </div>
                            </span>
                        ) :
                        (
                            <Link href="/login" className="tw-absolute tw-right-0 tw-rounded-full tw-bg-red-400 tw-py-[8px] tw-px-[16px] tw-cursor-pointer hover:tw-brightness-90"
                                >
                                <span className="tw-font-bold tw-text-white">
                                    Log in
                                </span>
                            </Link>
                        )
                }
            </div>
        </nav>
    )
}

export default NavBar;