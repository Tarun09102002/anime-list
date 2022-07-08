import React from 'react'
import { Grid, Oval, CirclesWithBar, ThreeDots } from 'react-loader-spinner'

function Loading() {

    return (
        <div className='bg-purple-900 min-h-screen h-full w-full flex flex-col justify-center items-center'>
            <ThreeDots color='#FFF' />
            {/* <div className='font-display text-white text-2xl'>Loading...</div> */}
        </div>
    )
}

export default Loading