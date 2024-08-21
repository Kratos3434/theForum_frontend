'use client'

import { isSignupVisibleAtom, isVisibleAtom } from "@/atoms";
import { useSetAtom } from "jotai";
import Link from "next/link";
import Input from "./Input";
import { useState } from "react";
import LoginController from "@/controller/LoginController";
import Loading from "./Loading";
import { revalidateTag } from "next/cache";

const Login = () => {
    const setIsVisible = useSetAtom(isVisibleAtom);
    const setIsSignupVisible = useSetAtom(isSignupVisibleAtom);
    const [logDetail, setLogDetail] = useState({ usernameOrEmail: "", password: "" });
    const [logResult, setLogResult] = useState({ status: false, error: "" });
    const [loading, isLoading] = useState(false);

    const handleLogin = async (e: any) => {
        e.preventDefault();
        isLoading(true);
        const res = await LoginController.login(logDetail.usernameOrEmail, logDetail.password);
        setLogResult(res);
        isLoading(false);
    }

    return (
        <div className={`tw-bg-[rgb(0,0,0)] tw-bg-[rgba(0,0,0,0.4)] tw-fixed tw-top-0 tw-left-0 tw-w-full tw-h-full tw-px-[16px]`}>
            <div className="tw-w-full tw-h-full tw-flex tw-justify-center tw-items-center" onClick={e => setIsVisible(false)}>
                <div className="tw-bg-white tw-shadow-lg tw-rounded-md tw-py-[8px] tw-px-[16px] tw-max-w-[500px] tw-w-full tw-relative" onClick={e => e.stopPropagation()}>
                    <div className="tw-absolute tw-top-[8px] tw-right-[16px] tw-py-[8px] tw-px-[13px] tw-rounded-full tw-bg-gray-300 tw-cursor-pointer hover:tw-brightness-90"
                        onClick={e => setIsVisible(false)}>
                        <b className="">X</b>
                    </div>
                    <span className="tw-font-bold tw-text-[25px]">
                        Log In
                    </span>
                    <form className="tw-my-5 tw-flex tw-flex-col tw-gap-10" onSubmit={handleLogin}>
                        <div className="tw-flex tw-flex-col tw-gap-5">
                            <div className="tw-flex tw-flex-col tw-gap-2">
                                <Input type="text" placeholder="Email" className="tw-px-[16px] tw-py-[16px]" 
                                onChange={e => logDetail.usernameOrEmail = e.target.value} />
                            </div>
                            <div className="tw-flex tw-flex-col tw-gap-2">
                                <Input type="password" placeholder="Password" className="tw-px-[16px] tw-py-[16px]" 
                                onChange={e => logDetail.password = e.target.value} />
                                {
                                    logResult.error &&
                                    (
                                        <small className="tw-text-red-600">
                                            *{logResult.error}
                                        </small>
                                    )
                                }
                            </div>
                        </div>
                        <div className="tw-flex tw-flex-col tw-gap-1 tw-items-center">
                            <button className="tw-flex tw-justify-center tw-rounded-full tw-bg-red-400 tw-py-[8px] tw-px-[20px] tw-font-bold hover:tw-brightness-75">
                                Log In
                            </button>
                            <small>or</small>
                            <span className="tw-text-[13px] tw-text-blue-600 tw-cursor-pointer"
                                onClick={e => {
                                    setIsVisible(false);
                                    setIsSignupVisible(true);
                                }}>
                                Sign up
                            </span>
                        </div>
                    </form>
                </div>
            </div>
            {loading && <Loading message="Logging In, please wait..." />}
        </div>
    );
}

export default Login;