'use client'

import { isVisibleAtom } from "@/atoms";
import UserController from "@/controller/UserController";
import { useSetAtom } from "jotai";
import Link from "next/link";
import { useState } from "react";
import Loading from "./Loading";

const Verify = ({ data, token }: { data: any, token: string }) => {
    const [loading, isLoading] = useState(false);
    const [result, setResult] = useState<{ status: boolean, error: string, verified: boolean } | null>(null);
    const setIsVisible = useSetAtom(isVisibleAtom);

    const verifyUser = async (e: any) => {
        isLoading(true);
        const response = await UserController.verify(token);
        isLoading(false);
        setResult(response);
    }

    return (
        data.status ?
            (
                <>
                    <div className="tw-h-[100dvh] tw-flex tw-justify-center tw-items-center tw-flex-col tw-gap-5 tw-bg-red-400">
                        <h1 className="tw-text-white tw-font-extrabold tw-text-[90px]">The Forum</h1>
                        {
                            !result ?
                                (
                                    <div className="tw-cursor-pointer tw-rounded-full tw-bg-red-500 tw-py-[16px] tw-px-[16px] tw-border-[5px] tw-border-black hover:tw-brightness-90"
                                        onClick={verifyUser} >
                                        <span className="tw-font-bold tw-text-[24px] tw-text-white">Activate account</span>
                                    </div>
                                ) :
                                (
                                    result.status || result.verified ?
                                        (
                                            <div className="tw-flex tw-flex-col tw-gap-5">
                                                <span className="tw-text-[30px] tw-font-bold">
                                                    Verified!
                                                </span>
                                                <Link href="/" className="tw-cursor-pointer tw-rounded-full tw-bg-red-500 tw-py-[16px] tw-px-[16px] tw-border-[5px] tw-border-black hover:tw-brightness-90 tw-flex tw-justify-center tw-items-center" 
                                                onClick={e => setIsVisible(true)} >
                                                    <span className="tw-font-bold tw-text-[24px] tw-text-white">Log In</span>
                                                </Link>
                                            </div>
                                        ) :
                                        (
                                            <span className="tw-text-[24px] tw-font-bold tw-text-red-600">
                                                {result.error}
                                            </span>
                                        )
                                )
                        }
                        {loading && <Loading message="Verifying, please wait..." />}
                    </div>
                </>
            ) :
            (
                data.expired ?
                    (
                        <></>
                    ) :
                    (
                        <div className="tw-h-[100dvh] tw-flex tw-justify-center tw-items-center tw-flex-col tw-gap-5 tw-bg-red-400">
                            <h1 className="tw-text-white tw-font-extrabold tw-text-[90px]">The Forum</h1>
                            <div className="tw-rounded-md tw-bg-black tw-py-[16px] tw-px-[16px] tw-border-[5px] tw-border-black">
                                <span className="tw-font-bold tw-text-[24px] tw-text-red-600">{data.error}</span>
                            </div>
                            <Link href="/" className="tw-underline tw-font-bold tw-text-red-700 tw-brightness-90" onClick={e => setIsVisible(true)}>
                                Log In
                            </Link>
                        </div>
                    )
            )
    );
}

export default Verify;