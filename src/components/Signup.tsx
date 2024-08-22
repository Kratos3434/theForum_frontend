'use client'
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
    const [error, setError] = useState("");
    const user = useState(new User())[0];
    const [open, isOpen] = useState(false);
    const [loading, isLoading] = useState(false);

    const inputs = [
        {
            label: "Email",
            type: "email",
            onchange: (e: any) => user.setEmail(e.target.value)
        },
        {
            label: "Username",
            type: "text",
            onchange: (e: any) => user.setUsername(e.target.value)
        },
        {
            label: "Password",
            type: "password",
            onchange: (e: any) => user.setPassword(e.target.value)
        },
        {
            label: "Confirm Password",
            type: "password",
            onchange: (e: any) => user.setPassword2(e.target.value)
        }
    ];

    const handleSignup = async (e: FormEvent<HTMLFormElement>) => {

        e.preventDefault();
        isLoading(true);
        const { status, error: err } = await SignupController.signup(user);

        if (!status) {
            isLoading(false);
            setError(err);
        } else {
            setError("");
            isOpen(true);
        }
    }

    return (
        <div className="tw-w-full tw-h-[100dvh] tw-flex tw-justify-center tw-items-center tw-bg-red-400">
            <div className="tw-flex tw-gap-20 tw-items-center">
                <span className="tw-text-red-600 tw-font-extrabold tw-text-[100px]">
                    The Forum <br /> <small className="tw-text-black">The truth</small>
                </span>
                <div className="tw-my-[20px] tw-border-l-[1px] tw-border-black tw-px-[25px]">
                    <div>
                        <div className="tw-text-white tw-font-bold tw-text-[50px]">
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
                        {
                            inputs.map((e, idx) => {
                                return (
                                    <div key={idx}>
                                        <label className="tw-text-white">
                                            {e.label}
                                        </label>
                                        <Input className="tw-px-[16px] tw-py-[8px] tw-my-[5px] tw-border-black tw-bg-red-300" type={e.type} placeholder=""
                                        onChange={e.onchange}  />
                                    </div>
                                )
                            })
                        }
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
            {loading && <Loading message="Signing up, please wait..." />}
            {
                open &&
                (
                    <div className={`tw-fixed tw-top-0 tw-left-0 tw-bg-[rgb(0,0,0)] tw-bg-[rgba(0,0,0,0.4)] tw-w-full tw-h-full`}>
                        <div className="tw-w-full tw-h-full tw-flex tw-justify-center tw-items-center">
                            <div className="tw-bg-white tw-shadow-lg tw-rounded-md tw-py-[8px] tw-px-[16px] tw-relative">
                                {/* <div className="tw-flex tw-justify-end">
                                    <span className="tw-cursor-pointer" onClick={e => setIsSignupVisible(false)}>
                                        <CloseIcon />
                                    </span>
                                </div> */}
                                <div className="tw-flex tw-flex-col tw-items-center">
                                    <div className="tw-font-extrabold tw-text-[50px] tw-my-4">
                                        Welcome to <span className="tw-text-red-400">The Forum!</span>
                                    </div>
                                    <p className="tw-text-[20px]">
                                        Please check your inbox to activate your account <MailIcon />
                                    </p>
                                    <Link href="/login" className="tw-p-[16px] tw-px-[40px] tw-bg-red-400 tw-rounded-xl tw-text-white tw-font-bold hover:tw-brightness-95 tw-my-[20px]">
                                        Log In
                                    </Link>
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