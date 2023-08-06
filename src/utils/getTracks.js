import { useState } from "react"
import { getAPI } from "./api"


export const GetTracks = () => {
    const [tracks, setTracks] = useState()

    getAPI('tracks', '50').then((resluts) => {
        setTracks(resluts)
    })
    console.log(tracks)
}