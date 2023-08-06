import React, { useEffect, useState } from 'react'
import { getAPI } from '../../../utils/api'

const AlbumList = () => {

    const [albums, setAlbums] = useState([])

    useEffect(() => {
        getAPI('albums', '78', '&id=24+87+175+204+232+125').then((resluts) => {
            setAlbums(resluts)
        })
    }, [])

    return albums.map((album, i) => {
        return (
            <div key={i} className="flex bg-stone-900 rounded-md items-center gap-3">
                <div className="min-h-fit w-16 bg-slate-600 rounded-l-md">
                    <img className='h-16 w-full rounded-l-md' src={album.image} alt="" />
                </div>
                <h1 className='font-semibold max-w-[5.5rem] lg:max-w-full max-h-12 overflow-hidden' >{album.name}</h1>
            </div>
        )
    })
}

export default AlbumList