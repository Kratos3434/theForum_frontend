'use client'

const Verify = ({ data }: { data: any }) => {
    return (
        data.status ?
            (
                <div className="tw-h-[100dvh] tw-flex tw-justify-center tw-items-center tw-flex-col tw-gap-5 tw-bg-red-400">
                    <h1 className="tw-text-white tw-font-extrabold tw-text-[90px]">The Forum</h1>
                    <div className="tw-cursor-pointer tw-rounded-full tw-bg-red-500 tw-py-[16px] tw-px-[16px] tw-border-[5px] tw-border-black hover:tw-brightness-90">
                        <span className="tw-font-bold tw-text-[24px] tw-text-white">Activate account</span>
                    </div>
                </div>
            ) :
            (
                data.expired ?
                    (
                        <></>
                    ) :
                    (
                        <div className="tw-h-[100dvh] tw-flex tw-justify-center tw-items-center tw-flex-col tw-gap-5 tw-bg-red-400">
                            <h1 className="tw-text-white tw-font-extrabold tw-text-[90px]">The Forum</h1>
                            <div className="tw-cursor-pointer tw-rounded-md tw-bg-black tw-py-[16px] tw-px-[16px] tw-border-[5px] tw-border-black hover:tw-brightness-90">
                                <span className="tw-font-bold tw-text-[24px] tw-text-red-600">{data.error}</span>
                            </div>
                        </div>
                    )
            )
    );
}

export default Verify;