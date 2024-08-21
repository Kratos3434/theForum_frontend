'use client'

import { ChangeEventHandler, useState } from "react";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';

interface Props {
    placeholder: string,
    type: string,
    className: string,
    onChange?: ChangeEventHandler<HTMLInputElement> | undefined
}

const Input = ({ placeholder, className, type, onChange }: Props) => {
    const [passwordType, setPasswordType] = useState(type);

    return (
        type === "password" ?
            (
                <div className={`tw-border-2 tw-border-white focus:tw-border-red-400 tw-rounded-xl tw-w-full tw-bg-gray-300 tw-flex ${className}`} tabIndex={1} onChange={onChange} >
                    <input type={passwordType} placeholder={placeholder} className="tw-w-full tw-bg-inherit" />
                    {
                        passwordType === "password" ?
                            (
                                <span className="tw-cursor-pointer" onClick={e => setPasswordType("text")}>
                                    <VisibilityOffIcon />
                                </span>
                            ) :
                            (
                                <span className="tw-cursor-pointer" onClick={e => setPasswordType("password")}>
                                    <VisibilityIcon />
                                </span>
                            )
                    }
                </div>
            ) :
            (
                <input type={type} placeholder={placeholder}
                    className={`tw-border-2 tw-border-white focus:tw-border-red-400 tw-rounded-xl tw-w-full tw-bg-gray-300 ${className}`}
                    onChange={onChange} />
            )
    );
}

export default Input;