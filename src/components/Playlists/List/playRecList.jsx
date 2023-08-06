import React, { useState, useEffect, useRef } from 'react'
import { getAPI } from '../../../utils/api'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'

const PlayRecList = (props) => {

    const [tracks, setTracks] = useState([])
    const opt = useRef([])

    useEffect(() => {
        getAPI('tracks', props.limit).then((resluts) => {
            setTracks(resluts)
        })
    }, [])

    const openOpt = (id) => {
        if (opt.current[id].classList.contains('scale-0')) {
            opt.current.map((el) => {
                el.classList.replace('scale-100', 'scale-0')
            })
            opt.current[id].classList.replace('scale-0', 'scale-100')
        } else {
            opt.current[id].classList.replace('scale-100', 'scale-0')
        }
    }

    return tracks.map((track, i) => {
        if (i > props.min && i % props.divider === 0 && i !== 150 ) {
            return (
                <div key={i} className="flex gap-3 h-16 items-center">
                    <div className="h-full w-16 bg-slate-600">
                        <img className='h-full w-full' src={track.image} alt="" />
                    </div>
                    <div className="flex items-center pr-2 h-full flex-grow justify-between">
                        <div className="flex h-full flex-col justify-end">
                            <h1 className='font-bold text-lg'>{track.name}</h1>
                            <h2 className='text-stone-500 font-semibold'>{track.artist_name}</h2>
                        </div>
                        <div className="text-2xl text-stone-500  ">
                            <div onClick={() => openOpt(i)}>
                                <FontAwesomeIcon icon={faEllipsis} />
                            </div>
                            <ul ref={(el) => opt.current[i] = el} className="absolute flex scale-0 transition-all text-base bg-stone-300 w-36 flex-col gap-3 p-3 font-medium text-stone-800 -translate-y-40 -translate-x-[9.25rem] origin-bottom-right rounded shadow-lg shadow-black/20">
                                <li>Add to playlist</li>
                                <li>Like</li>
                                <li>View artist</li>
                                <li>Share</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        }
    })
}

export default PlayRecList