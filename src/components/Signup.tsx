'use client'
import { isSignupVisibleAtom, isVisibleAtom } from "@/atoms";
import { useSetAtom } from "jotai";
import Input from "./Input";
import { FormEvent, useState } from "react";
import User from "@/model/User";
import SignupController from "@/controller/SignupController";
import CloseIcon from '@mui/icons-material/Close';
import MailIcon from '@mui/icons-material/Mail';
import Link from "next/link";
import Loading from "./Loading";

const Signup = () => {
    const setIsSignupVisible = useSetAtom(isSignupVisibleAtom);
    const setIsVisible = useSetAtom(isVisibleAtom);
    const [error, setError] = useState("");
    const user = useState(new User())[0];
    const [open, isOpen] = useState(false);
    const [loading, isLoading] = useState(false);

    const handleSignup = (e: FormEvent<HTMLFormElement>) => {

        e.preventDefault();
        const { status, error: err } = SignupController.signup(user);

        if (!status) {
            setError(err);
        } else {
            setError("");
            isOpen(true);
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
                            Register
                        </div>
                        <small className="tw-text-white">
                            Already have an account? &nbsp;
                            <Link href="/login" className="tw-text-blue-600 hover:tw-underline">
                                Log in
                            </Link>
                        </small>
                    </div>
                    <form className="tw-my-[15px] tw-flex tw-flex-col tw-gap-5" onSubmit={handleSignup}>
                        <div>
                            <label className="tw-text-white">
                                Email or Username
                            </label>
                            <Input className="tw-px-[16px] tw-py-[8px] tw-my-[5px] tw-border-black tw-bg-red-300" type="text" placeholder=""
                            />
                        </div>
                        <div>
                            <label className="tw-text-white">
                                Password
                            </label>
                            <Input className="tw-px-[16px] tw-py-[8px] tw-my-[5px] tw-border-black tw-bg-red-300" type="password" placeholder=""
                            />
                        </div>
                        <div className="tw-mt-[30px] tw-text-center">
                            {
                                error &&
                                (
                                    <small className="tw-text-black tw-font-extrabold">
                                        *{error}
                                    </small>
                                )
                            }
                            <button className="tw-w-full tw-bg-white tw-py-[8px] tw-rounded-xl tw-font-bold hover:tw-brightness-95">
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            {loading && <Loading message="Logging in, please wait..." />}
            {
                open &&
                (
                    <div className={`tw-fixed tw-top-0 tw-left-0 tw-bg-[rgb(0,0,0)] tw-bg-[rgba(0,0,0,0.4)] tw-w-full tw-h-full`}>
                        <div className="tw-w-full tw-h-full tw-flex tw-justify-center tw-items-center">
                            <div className="tw-bg-white tw-shadow-lg tw-rounded-md tw-py-[8px] tw-px-[16px] tw-max-w-[500px] tw-w-full tw-relative">
                                <div className="tw-flex tw-justify-end">
                                    <span className="tw-cursor-pointer" onClick={e => setIsSignupVisible(false)}>
                                        <CloseIcon />
                                    </span>
                                </div>
                                <div className="tw-flex tw-flex-col tw-items-center">
                                    <div className="tw-font-extrabold tw-text-[30px] tw-my-4">
                                        Welcome to <span className="tw-text-red-400">The Forum!</span>
                                    </div>
                                    <p>
                                        Please check your inbox to activate your account <MailIcon />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default Signup;