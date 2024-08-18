'use client'

import { isVisibleAtom } from "@/atoms";
import { useSetAtom } from "jotai";
import Link from "next/link";

interface Props {
    isVisible?: boolean
}


const Login = ({ isVisible }: Props) => {
    const setIsVisible = useSetAtom(isVisibleAtom);

    return (
        <div className={`${!isVisible && "tw-hidden"} tw-bg-[rgb(0,0,0)] tw-bg-[rgba(0,0,0,0.4)] tw-fixed tw-top-0 tw-left-0 tw-w-full tw-h-full tw-px-[16px]`}>
            <div className="tw-w-full tw-h-full tw-flex tw-justify-center tw-items-center" onClick={e => setIsVisible(false)}>
                <div className="tw-bg-white tw-shadow-lg tw-rounded-md tw-py-[8px] tw-px-[16px] tw-max-w-[500px] tw-w-full tw-relative" onClick={e => e.stopPropagation()}>
                    <div className="tw-absolute tw-top-[8px] tw-right-[16px] tw-py-[8px] tw-px-[13px] tw-rounded-full tw-bg-gray-300 tw-cursor-pointer hover:tw-brightness-90" 
                    onClick={e => setIsVisible(false)}>
                        <b className="">X</b>
                    </div>
                    <span className="tw-font-bold tw-text-[25px]">
                        Log In
                    </span>
                    <form className="tw-my-5 tw-flex tw-flex-col tw-gap-10">
                        <div className="tw-flex tw-flex-col tw-gap-5">
                            <div className="tw-flex tw-flex-col tw-gap-2">
                                <input type="text" placeholder="Email" className="tw-rounded-xl tw-py-[16px] tw-px-[16px] tw-bg-gray-300 tw-outline-none tw-w-full" />
                                <small className="tw-text-red-600">
                                    *Error
                                </small>
                            </div>
                            <div className="tw-flex tw-flex-col tw-gap-2">
                                <input type="password" placeholder="Password" className="tw-rounded-xl tw-py-[16px] tw-px-[16px] tw-bg-gray-300 tw-outline-none tw-w-full" />
                                <small className="tw-text-red-600">
                                    *Error
                                </small>
                            </div>
                        </div>
                        <div className="tw-flex tw-flex-col tw-gap-1 tw-items-center">
                            <button className="tw-flex tw-justify-center tw-rounded-full tw-bg-red-400 tw-py-[8px] tw-px-[20px] tw-font-bold hover:tw-brightness-75">
                                Log In
                            </button>
                            <small>or</small>
                            <Link href="/" className="tw-text-[13px] tw-text-blue-600">
                                Sign up
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;