import { useState } from "react"
import { getAPI } from "./api"


export const GetArtists = () => {
    const [artists, setArtists] = useState()

    getAPI('artists', '50').then((resluts) => {
        setArtists(resluts)
    })
    console.log(artists)
}