import React, { useEffect, useState } from 'react'
import { getAPI } from '../../../utils/api'

const RecList = (props) => {

    const [tracks, setTracks] = useState([])

    useEffect(() => {
        getAPI('tracks', props.limit, props.ids).then((resluts) => {
            setTracks(resluts)
        })
    }, [])

    return tracks.map((track, i) => {
        return (
            <div key={i} className="flex flex-col lg:gap-1 gap-2 leading-none">
                <div className="h-36 w-36 bg-slate-600">
                    <img className='h-full w-full' src={track.image} alt="" />
                </div>
                <h1 className='font-bold text-lg leading-none max-h-5 lg:text-base overflow-hidden'>{track.name}</h1>
                <h2 className='text-stone-500 font-semibold max-h-4 lg:text-sm overflow-hidden'>{track.artist_name}</h2>
            </div>
        )
    })

}

export default RecList