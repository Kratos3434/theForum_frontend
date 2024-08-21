'use client'
import CircularProgress from '@mui/material/CircularProgress';

interface Props {
    message?: string
}

const Loading = ({message}: Props) => {
    return (
        <div className='tw-fixed tw-bg-[rgb(0,0,0)] tw-bg-[rgba(0,0,0,0.4)] tw-w-full tw-h-full tw-top-0 tw-left-0 tw-flex tw-justify-center tw-items-center'>
            <div className='tw-flex tw-flex-col tw-items-center tw-gap-5'>
                <CircularProgress size={90} className='tw-font-extrabold' />
                <p className='tw-text-white tw-font-extrabold'>{message}.</p>
            </div>
        </div>
    )
}

export default Loading;