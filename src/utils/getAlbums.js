import { useState } from "react"
import { getAPI } from "./api"


export const GetAlbums = () => {
    const [albums, setAlbums] = useState()

    getAPI('albums', '6').then((resluts) => {
        setAlbums(resluts)
    })
    return albums
}