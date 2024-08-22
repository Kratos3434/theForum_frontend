'use client'
import { useSetAtom } from "jotai";
import Link from "next/link";
import Input from "./Input";
import { useState } from "react";
import LoginController from "@/controller/LoginController";
import Loading from "./Loading";
import { useRouter } from "next/navigation";
import { currentUserAtom } from "@/atoms";
import User from "@/model/User";

const Login = () => {
    const router = useRouter();
    const [logDetail, setLogDetail] = useState({ usernameOrEmail: "", password: "" });
    const [logResult, setLogResult] = useState({ status: false, error: "" });
    const [loading, isLoading] = useState(false);
    const setCurrentUser = useSetAtom(currentUserAtom);

    const handleLogin = async (e: any) => {
        e.preventDefault();
        isLoading(true);
        const res = await LoginController.login(logDetail.usernameOrEmail, logDetail.password);
        setLogResult(res);
        //isLoading(false);
        console.log(res);
        if (res.status) {
            //await fetch("/api/current");
            setCurrentUser(new User(res.data.userId, res.data.user.username, res.data.user.email, res.data.user.verified, res.data.picture, res.data.coverPicture, res.data.createdAt, res.data.updatedAt))
            router.push("/");
        } else {
            isLoading(false);
        }
    }

    return (
        <div className="tw-w-full tw-h-[100dvh] tw-flex tw-justify-center tw-items-center tw-bg-red-400">
            <div>
                <span className="tw-text-red-600 tw-font-extrabold tw-text-[50px]">
                    The Forum
                </span>
                <div className="tw-my-[20px]">
                    <div>
                        <div className="tw-text-white tw-font-bold tw-text-[30px]">
                            Log In
                        </div>
                        <small className="tw-text-white">
                            Don&apos;t have an account? &nbsp;
                            <Link href="/register" className="tw-text-blue-600 hover:tw-underline">
                                register
                            </Link>
                        </small>
                    </div>
                    <form className="tw-my-[15px] tw-flex tw-flex-col tw-gap-5" onSubmit={handleLogin}>
                        <div>
                            <label className="tw-text-white">
                                Email or Username
                            </label>
                            <Input className="tw-px-[16px] tw-py-[8px] tw-my-[5px] tw-border-black tw-bg-red-300" type="text" placeholder=""
                                onChange={e => logDetail.usernameOrEmail = e.target.value} />
                        </div>
                        <div>
                            <label className="tw-text-white">
                                Password
                            </label>
                            <Input className="tw-px-[16px] tw-py-[8px] tw-my-[5px] tw-border-black tw-bg-red-300" type="password" placeholder=""
                                onChange={e => logDetail.password = e.target.value} />
                        </div>
                        <div className="tw-mt-[30px] tw-text-center">
                            {
                                logResult.error &&
                                (
                                    <small className="tw-text-black tw-font-extrabold">
                                        *{logResult.error}
                                    </small>
                                )
                            }
                            <button className="tw-w-full tw-bg-white tw-py-[8px] tw-rounded-xl tw-font-bold hover:tw-brightness-95">
                                Log In
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            {loading && <Loading message="Logging in, please wait..." />}
        </div>
    );
}

export default Login;