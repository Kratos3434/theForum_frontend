'use client'
import { isVisibleAtom } from "@/atoms";
import { useAtom } from "jotai";
import Link from "next/link";

const NavBar = () => {
    const [isVisible, setIsVisible] = useAtom(isVisibleAtom);

    return (
        <nav className="tw-top-0 tw-left-0 tw-fixed tw-w-full tw-h-[80px] tw-shadow-xl tw-bg-white tw-px-[16px] tw-py-[8px]">
            <div className="tw-w-full tw-flex tw-items-center tw-h-full tw-relative">
                <Link className="tw-font-extrabold tw-text-[30px] tw-text-red-400 tw-absolute tw-left-0" href="/">
                    The Forum
                </Link>
                <span className="tw-flex tw-justify-center tw-items-center tw-w-full">
                    <span className="tw-w-[500px] tw-bg-gray-300 tw-rounded-full tw-py-[8px] tw-px-[16px]">
                        <input placeholder="Search" className="tw-w-full tw-outline-none tw-bg-gray-300" />
                    </span>
                </span>
                <span className="tw-absolute tw-right-0 tw-rounded-full tw-bg-red-400 tw-py-[8px] tw-px-[16px] tw-cursor-pointer hover:tw-brightness-90" 
                onClick={e => setIsVisible(true)}>
                    <span className="tw-font-bold tw-text-white">
                        Log in
                    </span>
                </span>
            </div>
        </nav>
    )
}

export default NavBar;