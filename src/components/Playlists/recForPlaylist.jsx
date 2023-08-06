import React, { useEffect, useRef, useState } from 'react'
import SectionTitle from '../comps/sectionTitle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
import PlayRecList from './List/playRecList'

const RecFor = (props) => {

    const opt = useRef([])

    const openOpt = (id) => {
        if(opt.current[id].classList.contains('scale-0')){
            opt.current.map((el) => {
                el.classList.replace('scale-100', 'scale-0')
            })
            opt.current[id].classList.replace('scale-0', 'scale-100')
        } else {
            opt.current[id].classList.replace('scale-100', 'scale-0')
        }
    }

    return (
        <div>
            <SectionTitle title={props.name} />
            <div className="flex flex-col w-full gap-3 mt-5">
                <PlayRecList limit={props.limit} divider={props.divider} min={props.min} />
            </div>
        </div>
    )
}

export default RecFor