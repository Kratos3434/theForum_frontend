'use client'

import { useSetAtom } from "jotai";
import Input from "./Input";
import CloseIcon from '@mui/icons-material/Close';
import { createChannelAtom } from "@/atoms";
import { useState } from "react";
import Channel from "@/model/Channel";

const CreateChannel = () => {
    const setCreateChannel = useSetAtom(createChannelAtom);
    const channel = useState(new Channel())[0];

    return (
        <div className="tw-fixed tw-top-0 tw-left-0 tw-w-full tw-h-[100dvh] tw-bg-[rgb(0,0,0)] tw-bg-[rgba(0,0,0,0.4)] tw-flex tw-justify-center tw-items-center" 
        onClick={e => setCreateChannel(false)}>
            <div className="tw-w-full tw-max-w-[600px] tw-py-[8px] tw-px-[16px] tw-bg-white tw-rounded-xl" onClick={e => e.stopPropagation()}>
                <div className="tw-flex tw-justify-between tw-items-center">
                    <p className="tw-font-extrabold tw-text-[30px]">Create a Channel</p>
                    <div className="tw-rounded-full tw-bg-gray-400 tw-p-1 tw-cursor-pointer" onClick={e => setCreateChannel(false)}>
                        <CloseIcon />
                    </div>
                </div>
                <div className="tw-flex tw-flex-col tw-gap-5 tw-mt-[20px]">
                    <div className="tw-flex tw-flex-col tw-gap-2">
                        <label className="tw-text-[18px]">Name<span className="tw-text-red-600">*</span></label>
                        <Input type="text" placeholder="" className=" tw-border-gray-500 tw-border-[1px] tw-px-[8px] tw-py-[16px]" 
                        onChange={e => channel.setName(e.target.value)} />
                    </div>
                    <div className="tw-flex tw-flex-col tw-gap-2">
                        <label className="tw-text-[18px]">Description<span className="tw-text-red-600">*</span></label>
                        <textarea className="tw-rounded-xl tw-bg-gray-300 tw-p-[8px] tw-outline-none tw-resize-none" rows={15} 
                        onChange={e => channel.setDescription(e.target.value)} />
                    </div>
                    <div className="tw-flex tw-justify-end tw-items-center">
                        <button className="tw-rounded-full tw-py-[8px] tw-px-[25px] tw-bg-red-400 tw-font-bold hover:tw-brightness-95">
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateChannel;