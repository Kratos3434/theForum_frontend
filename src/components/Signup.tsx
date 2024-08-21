'use client'
import { isSignupVisibleAtom, isVisibleAtom } from "@/atoms";
import { useSetAtom } from "jotai";
import Input from "./Input";
import { FormEvent, useState } from "react";
import User from "@/model/User";
import SignupController from "@/controller/SignupController";
import CloseIcon from '@mui/icons-material/Close';
import MailIcon from '@mui/icons-material/Mail';

const Signup = () => {
    const setIsSignupVisible = useSetAtom(isSignupVisibleAtom);
    const setIsVisible = useSetAtom(isVisibleAtom);
    const [error, setError] = useState("");
    const user = useState(new User())[0];
    const [open, isOpen] = useState(false);

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
        <div className={`tw-fixed tw-top-0 tw-left-0 tw-bg-[rgb(0,0,0)] tw-bg-[rgba(0,0,0,0.4)] tw-w-full tw-h-full`}>
            <div className="tw-w-full tw-h-full tw-flex tw-justify-center tw-items-center"
                onClick={e => setIsSignupVisible(false)}>
                <div className="tw-bg-white tw-shadow-lg tw-rounded-md tw-py-[8px] tw-px-[16px] tw-max-w-[500px] tw-w-full tw-relative"
                    onClick={e => e.stopPropagation()}>
                    <div className="tw-flex tw-justify-between">
                        <small className="tw-text-blue-600 tw-font-bold tw-cursor-pointer"
                            onClick={e => {
                                setIsSignupVisible(false);
                                setIsVisible(true);
                            }}>
                            Log In
                        </small>
                        <small className="tw-px-[8px] tw-bg-gray-300 tw-rounded-full hover:tw-brightness-90 tw-cursor-pointer"
                            onClick={e => setIsSignupVisible(false)}>
                            X
                        </small>
                    </div>
                    <div className="tw-text-[25px] tw-font-bold tw-my-3">
                        Sign Up <small className="tw-text-[15px] tw-font-normal tw-text-red-400">It&apos;s quick and easy</small>
                    </div>
                    <form className="tw-flex tw-flex-col tw-gap-5" onSubmit={handleSignup}>
                        <div className="tw-flex tw-flex-col tw-gap-2">
                            <Input type="email" placeholder="Email" className="tw-py-[16px] tw-px-[16px]" 
                            onChange={e => user.setEmail(e.target.value)} />
                            <Input type="text" placeholder="Username" className="tw-py-[16px] tw-px-[16px]" 
                            onChange={e => user.setEmail(e.target.value)} />
                            <Input type="password" placeholder="Password" className="tw-py-[16px] tw-px-[16px]" 
                            onChange={e => user.setPassword(e.target.value)} />
                            <Input type="password" placeholder="Confirm Password" className="tw-py-[16px] tw-px-[16px]" 
                            onChange={e => user.setPassword2(e.target.value)} />
                        </div>
                        <div className="tw-flex tw-flex-col tw-gap-2 tw-items-center">
                            {
                                error &&
                                (
                                    <small className="tw-text-red-600">
                                        *{error}
                                    </small>
                                )
                            }
                            <button className="tw-rounded-md tw-bg-red-500 tw-font-bold tw-py-[8px] tw-px-[16px] hover:tw-brightness-90">
                                Sign Up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
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