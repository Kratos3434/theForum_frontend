import { ChangeEventHandler } from "react";

interface Props {
    placeholder: string,
    type: string,
    className: string,
    onChange?: ChangeEventHandler<HTMLInputElement> | undefined
}

const Input = ({ placeholder, className, type, onChange }: Props) => {
    return (
        <input type={type} placeholder={placeholder} 
            className={`tw-border-2 tw-border-white focus:tw-border-red-400 tw-rounded-xl tw-w-full tw-bg-gray-300 ${className}`} 
            onChange={onChange} />
    );
}

export default Input;