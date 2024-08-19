'use client'
import CircularProgress from '@mui/material/CircularProgress';

const Loading = () => {
    return (
        <div className='tw-fixed tw-bg-[rgb(0,0,0)] tw-bg-[rgba(0,0,0,0.4)] tw-w-full tw-h-full tw-top-0 tw-left-0 tw-flex tw-justify-center tw-items-center'>
            <CircularProgress />
        </div>
    )
}

export default Loading;