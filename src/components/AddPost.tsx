'use client'

import Input from "./Input";

const AddPost = () => {
    return (
        <div className="tw-w-full tw-justify-center tw-flex">
            <div className="tw-max-w-[600px] tw-w-full tw-py-[30px]">
                <p className="tw-font-bold tw-text-[30px]">Add Post</p>
                <form className="tw-my-5 tw-flex tw-flex-col tw-gap-5">
                    <div>
                        <label className="tw-text-[20px]">Title<span className="tw-text-red-600">*</span></label>
                        <Input type="text" className="tw-p-[16px] tw-my-1 tw-bg-white tw-border-gray-400" placeholder="" />
                    </div>
                    <div>
                        <label className="tw-text-[20px]">Picture/Video <small>{`(if any)`}</small></label>
                        <Input type="text" className="tw-p-[16px] tw-my-1 tw-bg-white tw-border-gray-400" placeholder="" />
                    </div>
                    <div>
                        <label className="tw-text-[20px]">Description <small>{`(if any)`}</small></label>
                        <Input type="text" className="tw-p-[16px] tw-my-1 tw-bg-white tw-border-gray-400" placeholder="" />
                    </div>
                    <button className="tw-p-[16px] tw-bg-red-400 tw-rounded-full tw-font-bold hover:tw-brightness-95">
                        Add Post
                    </button>
                </form>
            </div>
        </div>
    );
}

export default AddPost;