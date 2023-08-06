import React, { useState, useEffect } from 'react'
import { getAPI } from '../../../utils/api'

const ArtistList = () => {

    const [artists, setArtists] = useState([])

    useEffect(() => {
        getAPI('artists', '26').then((resluts) => {
            setArtists(resluts)
        })
    }, [])

    return artists.map((artist, i) => {
        if (artist.image){
            return (
                <div key={i} className="flex flex-col items-center gap-3">
                    <div className="h-36 w-36 bg-slate-600 rounded-full overflow-hidden">
                        <img className='h-full w-full' src={artist.image} alt="" />
                    </div>
                    <h1 className='text-xl text-center font-bold max-h-[3.5rem] lg:text-base overflow-hidden'>{artist.name}</h1>
                </div>
            )
        }
    })
}

export default ArtistList